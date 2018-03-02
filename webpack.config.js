const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {

    entry: './main.js',

    output : {
        path: '/',
        filename : 'index.js'
    },

    devtool: "inline-source-map",

    devServer:{
        inline:true,
        historyApiFallback: true,
        port:8080
    },

    module:{
        rules : [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use:[{
                    loader: 'babel-loader',
                }]
            }
        ]
    }
};
