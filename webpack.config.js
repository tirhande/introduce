const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');
const standardFontsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'standard_fonts',
);

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
                use: ['style-loader','css-loader'],
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
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
              { from: './src/assets/portfolio_kkh.pdf' },
              { from: cMapsDir, to: 'cmaps/' },
              { from: standardFontsDir, to: 'standard_fonts/' },
            ],
          }),
    //     new HtmlWebPackPlugin({
    //         template: './public/index.html'
    //     })
    ],
    resolve: {
        extensions: ['*', '.js']
    }
};