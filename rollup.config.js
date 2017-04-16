import babel from 'rollup-plugin-babel';

var env = process.env.NOVE_ENV;
var config = {
    format: 'umd',
    entry: 'src/index.js',
    moduleName: 'libtest',
    plugins: [
        babel({
            plugins: ['external-helpers'],
            exclude: 'node_modules/**'
        })
    ]
}

export default config;