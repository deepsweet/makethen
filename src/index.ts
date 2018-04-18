function makethen<A, R1, R2, R3>(fn: (arg: A, cb: (err: any, res1: R1, res2: R2, res3: R3) => void) => void): (arg: A) => Promise<[R1, R2, R3]>
function makethen<A, R1, R2>(fn: (arg: A, cb: (err: any, res1: R1, res2: R2) => void) => void): (arg: A) => Promise<[R1, R2]>
function makethen<A, R>(fn: (arg: A, cb: (err: any, res: R) => void) => void): (arg: A) => Promise<R>
function makethen<A1, A2, R1, R2, R3>(fn: (arg1: A1, arg2: A2, cb: (err: any, res1: R1, res2: R2, res3: R3) => void) => void): (arg1: A1, arg2: A2) => Promise<[R1, R2, R3]>
function makethen<A1, A2, R1, R2>(fn: (arg1: A1, arg2: A2, cb: (err: any, res1: R1, res2: R2) => void) => void): (arg1: A1, arg2: A2) => Promise<[R1, R2]>
function makethen<A1, A2, R>(fn: (arg1: A1, arg2: A2, cb: (err: any, res: R) => void) => void): (arg1: A1, arg2: A2) => Promise<R>
function makethen<A1, A2, A3, R1, R2, R3>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: (err: any, res1: R1, res2: R2, res3: R3) => void) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<[R1, R2, R3]>
function makethen<A1, A2, A3, R1, R2>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: (err: any, res1: R1, res2: R2) => void) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<[R1, R2]>
function makethen<A1, A2, A3, R>(fn: (arg1: A1, arg2: A2, arg3: A3, cb: (err: any, res: R) => void) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<R>

function makethen (fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (error, ...results) => {
      if (error !== null) {
        return reject(error)
      }

      if (results.length === 1) {
        return resolve(results[0])
      }

      resolve(results)
    })
  })
}

export default makethen
