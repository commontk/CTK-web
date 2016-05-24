module.exports = [
    {
        test: /\.svg$/,
        loader: 'svg-sprite',
        exclude: /fonts/,
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=60000&mimetype=application/font-woff',
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=60000',
        include: /fonts/,
    }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
    }, {
        test: /\.css$/,
        loader: 'style!css!postcss',
    }, {
        test: /\.mcss$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss',
    }, {
        test: /\.json$/,
        loader: 'json-loader',
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015']
        }
    }
];
