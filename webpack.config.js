const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
				test: /\.css$/,
				use: [
					'style-loader', {
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					},
				],
				include: /\.module\.css$/
            }
        ]
    }
}