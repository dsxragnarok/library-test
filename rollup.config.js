import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

var env = process.env.NODE_ENV;
var config = {
    format: 'umd',
    entry: 'src/index.js',
    moduleName: 'libtest',
    plugins: [
        nodeResolve({
            jsnext: true
        }),
        babel({
            exclude: 'node_modules/**',
            externalHelpers: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env)
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
