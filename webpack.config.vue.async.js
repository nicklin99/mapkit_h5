const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        picker_vue_async: './src/picker/vue_async.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        amap: 'AMap', //amap => window.AMap
        vue: 'Vue', //vue=>window.Vue 通过script加载
    },
    devtool: 'source-map',
    plugins: [

    ],
};