import test from 'tape';

import promisify from '../../lib/';

test('export', (t) => {
    t.equal(
        typeof promisify,
        'function',
        'must be a function'
    );

    t.end();
});

test('resolve: no arguments', (t) => {
    const result = 'test';
    const fixture = (cb) => setImmediate(() => cb(null, result));

    promisify(fixture)().then((value) => {
        t.equal(
            value,
            result,
            'must be resolved with correct value'
        );

        t.end();
    });
});

test('resolve: few arguments', (t) => {
    const fixture = (foo, bar, cb) => setImmediate(() => cb(null, `test${foo}${bar}`));

    promisify(fixture)('?', '!').then((value) => {
        t.equal(
            value,
            'test?!',
            'must be resolved with correct value'
        );

        t.end();
    });
});

test('resolve: multiple result arguments', (t) => {
    const result = [ 'test1', 'test2' ];
    const fixture = (cb) => setImmediate(() => cb(null, ...result));

    promisify(fixture)().then((value) => {
        t.deepEqual(
            value,
            result,
            'must be resolved with correct array of values'
        );

        t.end();
    });
});

test('reject', (t) => {
    const error = 'error';
    const fixture = (cb) => setImmediate(() => cb(error));

    promisify(fixture)().catch((value) => {
        t.equal(
            value,
            error,
            'must be rejected with correct error'
        );

        t.end();
    });
});
