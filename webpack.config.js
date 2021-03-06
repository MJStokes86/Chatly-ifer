const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['./src/app.js'],
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