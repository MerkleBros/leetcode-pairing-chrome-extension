const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		'lobby': './src/lobby/lobby.js',
		'room': './src/room/room.js'
	},
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		runtimeChunk: 'single'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new webpack.HashedModuleIdsPlugin()
	],
  	module: {
    	rules: [
			{
			    test: /\.jsx?/,
			    exclude: /node_modules/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['@babel/preset-env']
			        }
			    }
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'html-loader'
				}
			},			
			{
	        	test: /\.css$/,
	        	exclude: /node_modules/,
	        	use: [
	        		'style-loader',
	           		'css-loader'
	         ]
	       },
	       {
	         test: /\.(png|svg|jpg|gif)$/,
	         exclude: /node_modules/,
	         use: [
	           'file-loader'
	         ]
	       }
        ]
    }
};