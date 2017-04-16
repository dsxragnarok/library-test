import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

var env = process.env.NOVE_ENV;
var config = {
    format: 'umd',
    entry: 'src/index.js',
    moduleName: 'libtest',
    plugins: [
        nodeResolve({
            jsnext: true
        }),
        babel({
            plugins: ['external-helpers'],
            exclude: 'node_modules/**'
        })
    ]
}

if (env === 'production') {
    config.plugins.push(uglify({
        compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            warnings: false,
            screw_ie8: false
        },
        mangle: {
            screw_ie8: false
        },
        output: {
            screw_ie8: false
        }
    }));
}

export default config;