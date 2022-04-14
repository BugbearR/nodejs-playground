const path = require("path");
const glob = require('glob');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

// "index.js" : "./src/client/index.js"
//
// ./src/client/{module}/index.js
// {module}/index.js
function getEntries() {
    const entries = {
        "index.js" : "./src/client/root/index.js"
    };
    glob.sync("./src/client/root/*/index.js").forEach((file) => {
        const outName = file.replace(/^\.\/src\/client\/root\//, "");
        entries[outName] = file;
        console.log(outName);
        console.log(file);
    });
    return entries;
}

module.exports = {
    // mode: "production",
    mode: "development",
    entry: getEntries(),
    output: {
        path: path.join(__dirname, "dist/client/root"),
        filename: "[name]"
    },
    target: ["web"],
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src/client/root/**/*.html"),
                    to: path.join(__dirname, "dist/client/root"),
                    context: path.join(__dirname, "src/client/root")
                },
                {
                    from: path.join(__dirname, "src/client/example/**/*.html"),
                    to: path.join(__dirname, "dist/client/example"),
                    context: path.join(__dirname, "src/client/example")
                }
            ]
        })
    ],
    resolve: {
        alias: {
            "#": path.resolve(__dirname, "src/client/root")
        },
        extensions: ['.js']
    }
};
