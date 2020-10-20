const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        'index':'./src/index.ts'
    },
    output:{
        path: path.resolve(__dirname, '../','dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}