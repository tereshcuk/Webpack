const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        },
    module: {
        rules: [
            {
              test: /\.js$/,                  
              loader: 'babel-loader'           
            },
            {
              test: /\.html$/,
              loader: 'html-loader'                
            },
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,                 
                'css-loader'
            ],
            },            
        ]   
        }, 
    plugins: [
        new HtmlWebPackPlugin(
            {
              template: './src/index.html',
              filename: './index.html'
            }
        ), 
        new MiniCssExtractPlugin(
            {
              //template: './css/style.css',
              filename: '[name].css'
            }
        )

    ]
        
    
};