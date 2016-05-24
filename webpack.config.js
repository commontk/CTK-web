var path = require('path');

module.exports = {
    entry: './lib/',
    output: {
        filename: 'ctk.js',
        path: 'dist',
        library: 'CTK'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: require('./ctk-webpack-loaders.js')
    },
    resolve: {
        alias: {
            ctk: path.resolve('./lib')
        }
    },
    eslint: {
        configFile: '.eslintrc.js'
    }
};
