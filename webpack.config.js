const path = require("path")

module.exports = {

    entry: "./src/app.js",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[name][ext]',
    },

    mode: "none",

    module: {
        rules: [

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            {
                test: /\.png/,
                type: 'asset/resource',
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/inline',
            },

        ],
    },
}