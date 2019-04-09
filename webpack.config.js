const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin ({
// 	filename: 'style.css'
// });

module.exports = {
	entry: ['./src/app.js', './src/index.html'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'	
	}, 

	module: {
		rules: [
		{
			
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env']
				}
			}

		]
			
		}, {
			test: /\.scss$/,
			use: [
			'style-loader',
			'css-loader',
			'sass-loader'
			]

			
			
		},

		{
			test: /\.html$/,
			use: ['html-loader']
		},
		{
			test: /\.(jpg|png)$/,
			use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/',
					publicPath: 'img/'
				}
			}
		  ]
		},

		]

	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],

	devServer: {
		contentBase: path.join(__dirname, 'dist')
	},
};