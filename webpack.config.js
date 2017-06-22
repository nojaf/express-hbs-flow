var path = require('path');
var fs = require('fs');
var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'server/dist')
    },
    target: 'node',
    externals: nodeModules,
    node: {
        __dirname: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new FlowBabelWebpackPlugin(),
    ],
};