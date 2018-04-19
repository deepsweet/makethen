/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import test from 'tape'

import makethen from '../src/'

test('export', (t) => {
  t.equal(
    typeof makethen,
    'function',
    'must be a function'
  )

  t.end()
})

test('resolve when there is no error', (t) => {
  const callbackish = (arg: number, cb: (err: any, res: any) => void) => cb(null, true)

  makethen(callbackish)(123).then(() => {
    t.end()
  })
})

test('reject when there is an error', (t) => {
  const callbackish = (arg: number, cb: (err: any, res: any) => void) => cb(new Error('foo'), true)

  makethen(callbackish)(123).catch(() => {
    t.end()
  })
})

test('1 argument + no result', (t) => {
  const callbackish = (arg: number, cb: (err: any) => void) => cb(null)

  makethen(callbackish)(123).then((result: void) => {
    t.equal(
      typeof result,
      'undefined',
      'no result'
    )

    t.end()
  })
})

test('1 argument + 1 result', (t) => {
  const callbackish = (arg: number, cb: (err: any, res: boolean) => void) => cb(null, true)

  makethen(callbackish)(123).then((result: boolean) => {
    t.equal(
      result,
      true,
      'result'
    )

    t.end()
  })
})

test('1 argument + 2 results', (t) => {
  const callbackish = (arg: number, cb: (err: any, res1: boolean, res2: number) => void) => cb(null, true, 123)

  makethen(callbackish)(123).then((result: [boolean, number]) => {
    t.deepEqual(
      result,
      [true, 123],
      'array of 2 results'
    )

    t.end()
  })
})

test('1 argument + 3 results', (t) => {
  const callbackish = (arg: number, cb: (err: any, res1: boolean, res2: number, res3: string) => void) => cb(null, true, 123, 'foo')

  makethen(callbackish)(123).then((result: [boolean, number, string]) => {
    t.deepEqual(
      result,
      [true, 123, 'foo'],
      'array of 3 results'
    )

    t.end()
  })
})

test('2 arguments + no result', (t) => {
  const callbackish = (arg1: number, arg2: string, cb: (err: any) => void) => cb(null)

  makethen(callbackish)(123, 'foo').then((result: void) => {
    t.equal(
      typeof result,
      'undefined',
      'no result'
    )

    t.end()
  })
})

test('2 arguments + 1 result', (t) => {
  const callbackish = (arg1: number, arg2: string, cb: (err: any, res: boolean) => void) => cb(null, true)

  makethen(callbackish)(123, 'foo').then((result: boolean) => {
    t.deepEqual(
      result,
      true,
      'result'
    )

    t.end()
  })
})

test('2 arguments + 2 results', (t) => {
  const callbackish = (arg1: number, arg2: string, cb: (err: any, res1: boolean, res2: number) => void) => cb(null, true, 123)

  makethen(callbackish)(123, 'foo').then((result: [boolean, number]) => {
    t.deepEqual(
      result,
      [true, 123],
      'array of 2 results'
    )

    t.end()
  })
})

test('2 arguments + 3 results', (t) => {
  const callbackish = (arg1: number, arg2: string, cb: (err: any, res1: boolean, res2: number, res3: string) => void) => cb(null, true, 123, 'foo')

  makethen(callbackish)(123, 'foo').then((result: [boolean, number, string]) => {
    t.deepEqual(
      result,
      [true, 123, 'foo'],
      'result'
    )

    t.end()
  })
})

test('3 arguments + no result', (t) => {
  const callbackish = (arg1: number, arg2: string, arg3: boolean, cb: (err: any) => void) => cb(null)

  makethen(callbackish)(123, 'foo', true).then((result: void) => {
    t.equal(
      typeof result,
      'undefined',
      'no result'
    )

    t.end()
  })
})

test('3 arguments + 1 result', (t) => {
  const callbackish = (arg1: number, arg2: string, arg3: boolean, cb: (err: any, res: boolean) => void) => cb(null, true)

  makethen(callbackish)(123, 'foo', true).then((result: boolean) => {
    t.deepEqual(
      result,
      true,
      'result'
    )

    t.end()
  })
})

test('3 arguments + 2 results', (t) => {
  const callbackish = (arg1: number, arg2: string, arg3: boolean, cb: (err: any, res1: boolean, res2: number) => void) => cb(null, true, 123)

  makethen(callbackish)(123, 'foo', true).then((result: [boolean, number]) => {
    t.deepEqual(
      result,
      [true, 123],
      'array of 2 results'
    )

    t.end()
  })
})

test('3 arguments + 3 results', (t) => {
  const callbackish = (arg1: number, arg2: string, arg3: boolean, cb: (err: any, res1: boolean, res2: number, res3: string) => void) => cb(null, true, 123, 'foo')

  makethen(callbackish)(123, 'foo', true).then((result: [boolean, number, string]) => {
    t.deepEqual(
      result,
      [true, 123, 'foo'],
      'array of 3 results'
    )

    t.end()
  })
})
