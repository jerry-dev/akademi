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
    ]
}