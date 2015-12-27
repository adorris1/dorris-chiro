/**
 * Created by Dianne on 12/26/15.
 */
module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};