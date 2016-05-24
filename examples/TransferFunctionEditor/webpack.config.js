var ctkLoaders = require(require.resolve('../../ctk-webpack-loaders.js'));
var path = require('path');

module.exports = {
    entry: './main',
    output: {
        path: './dist',
        filename: '[name].js',
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: ctkLoaders
    },
    resolve: {
        alias: {
            ctk: path.resolve('../../lib')
        }
    },
    eslint: {
        configFile: require.resolve('../../.eslintrc.js')
    }
};
