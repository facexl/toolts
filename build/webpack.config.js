const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        'index':'./src/index.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    output:{
        path: path.resolve(__dirname, '../','dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}