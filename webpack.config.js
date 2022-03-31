const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack','url-loader'],
            },
            {
                test: /\.(ttf|png|jpg)$/,
                use: ['file-loader'],
            },
        ],
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: './public/index.html'
    //     })
    // ],
    resolve: {
        extensions: ['*', '.js']
    }
};