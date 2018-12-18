const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');

module.exports = merge(common, {
	entry: {
		'lobby': './src/lobby/lobby.js',
		'room': './src/room/room.js'
	},
	output: {
		filename: '[name].[contentHash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'production',
	devtool: 'source-map'
});