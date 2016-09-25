import Start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';
import files from 'start-files';
import watch from 'start-watch';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import write from 'start-write';
import eslint from 'start-eslint';
import tape from 'start-tape';
import * as istanbul from 'start-istanbul';
import codecov from 'start-codecov';
import tapSpec from 'tap-spec';

export const start = Start(reporter());

export const build = () => start(
    env('NODE_ENV', 'production'),
    files('build/'),
    clean(),
    files('lib/**/*.js'),
    read(),
    babel(),
    write('build/')
);

export const dev = () => start(
    env('NODE_ENV', 'development'),
    files('build/'),
    clean(),
    files('lib/**/*.js'),
    watch((file) => start(
        files(file),
        read(),
        babel(),
        write('build/')
    ))
);

export const lint = () => start(
    env('NODE_ENV', 'test'),
    files([ '*.js', 'lib/**/*.js', 'test/**/*.js' ]),
    eslint()
);

export const test = () => start(
    env('NODE_ENV', 'test'),
    files('test/**/*.js'),
    tape(tapSpec)
);

export const tdd = () => start(
    files([ 'lib/**/*.js', 'test/**/*.js' ]),
    watch(test)
);

export const coverage = () => start(
    env('NODE_ENV', 'test'),
    files('coverage/'),
    clean(),
    files('lib/**/*.js'),
    istanbul.instrument({ esModules: true }),
    test,
    istanbul.report([ 'lcovonly', 'text-summary' ])
);

export const ci = () => start(
    lint,
    coverage,
    files('coverage/lcov.info'),
    read(),
    codecov()
);

export const prepush = () => start(
    lint,
    coverage
);
