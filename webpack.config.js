const path = require("path")
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {

    entry: "./src/app.js",

    output: {
        filename: "app-[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[name][ext]',
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    mode: "none",

    plugins: [

        new MiniCssExtractPlugin ({
            filename: "CSS/style-[contenthash].css"
        }),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "index.html",
            // publicPath: "./dist/",
        }),

        new ESLintPlugin()
        
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