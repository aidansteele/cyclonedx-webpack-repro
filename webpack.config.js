const { CycloneDxWebpackPlugin } = require('@cyclonedx/webpack-plugin');
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const path = require('path');

module.exports = {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimize: false,
        minimizer: [new ESBuildMinifyPlugin()],
      },

    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'out.js'
    },
    plugins: [
        new CycloneDxWebpackPlugin({
            outputLocation: './artifacts',
            moduleName: "mymodule",
            moduleVersion: "1",
            emitStats: true
        })
    ]
}
