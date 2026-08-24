const path = require("path")
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {

    entry: {
        "button": "./src/button.js",
        "image": "./src/image.js",
    },

    output: {
        filename: "JS/[name]-[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[name][ext]',
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist"),
        },
        compress: true,
        port: 9000,
        devMiddleware: {
            writeToDisk: true, 
        },
    },

    mode: "development",

    plugins: [

        new MiniCssExtractPlugin ({
            filename: "CSS/[name]-[contenthash].css"
        }),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            filename: "button.html",
            template: "button_template.html",
            chunks: ["button"]
        }),

        new HtmlWebpackPlugin({
            filename: "image.html",
            template: "image_template.html",
            chunks: ["image"]
        }),

        // new ESLintPlugin()
        
    ],

    module: {
        rules: [

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.png/,
                type: 'asset/resource',
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/inline',
            },

            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    targets: "defaults",
                    presets: [
                        ['@babel/preset-env']
                    ]
                    }
                }
            },

        ],
    },
}