const path = require("path")

module.exports = {

    entry: "./src/app.js",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./dist")
    },
    
    mode: "none",

    module: {
        rules: [

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ],
    },
}