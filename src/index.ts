export type NodeCallback1<R > = (err: any, res?: R) => void
export type NodeCallback2<R1, R2 > = (err: any, res1: R1, res2: R2) => void
export type NodeCallback3<R1, R2, R3> = (err: any, res1: R1, res2: R2, res3: R3) => void

function makethen<A, R1, R2, R3>(fn: (arg: A, cb: NodeCallback3<R1, R2, R3>) => void): (arg: A) => Promise<[R1, R2, R3]>
function makethen<A, R1, R2>(fn: (arg: A, cb: NodeCallback2<R1, R2>) => void): (arg: A) => Promise<[R1, R2]>
function makethen<A, R>(fn: (arg: A, cb: NodeCallback1<R>) => void): (arg: A) => Promise<R>
function makethen<A1, A2, R1, R2, R3>(fn: (arg1: A1, arg2: A2, cb: NodeCallback3<R1, R2, R3>) => void): (arg1: A1, arg2: A2) => Promise<[R1, R2, R3]>
function makethen<A1, A2, R1, R2>(fn: (arg1: A1, arg2: A2, cb: NodeCallback2<R1, R2>) => void): (arg1: A1, arg2: A2) => Promise<[R1, R2]>
function makethen<A1, A2, R>(fn: (arg1: A1, arg2: A2, cb: NodeCallback1<R>) => void): (arg1: A1, arg2: A2) => Promise<R>
function makethen<A1, A2, A3, R1, R2, R3>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: NodeCallback3<R1, R2, R3>) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<[R1, R2, R3]>
function makethen<A1, A2, A3, R1, R2>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: NodeCallback2<R1, R2>) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<[R1, R2]>
function makethen<A1, A2, A3, R>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: NodeCallback1<R>) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<R>

function makethen (fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (error, ...results) => {
      if (error !== null) {
        return reject(error)
      }

      if (results.length === 0) {
        return resolve()
      }

      if (results.length === 1) {
        return resolve(results[0])
      }

      resolve(results)
    })
  })
}

export default makethen
