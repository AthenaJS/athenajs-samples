var path = require('path');

module.exports = {
    entry: [
        './js/index.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: /node_modules|athena\.js/
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules'
        ]

    }
};