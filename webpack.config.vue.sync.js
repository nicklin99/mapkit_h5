const path = require('path');

module.exports = {
    entry: {
        picker_vue_sync: './src/vue.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        amap: 'AMap', //amap => window.AMap
        vue: 'Vue', //vue=>window.Vue
    },
    devtool: 'source-map',
    plugins: [

    ],
};