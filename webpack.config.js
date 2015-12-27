/**
 * Created by Dianne on 12/26/15.
 */
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./src/App.js"
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};