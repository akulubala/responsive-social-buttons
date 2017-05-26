let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let imagemin = require('imagemin');
let imageminSvgo = require('imagemin-svgo');

let inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	entry: {
		"social-buttons": [
			path.resolve(__dirname, 'resource/js/rrssb.js'),
			path.resolve(__dirname, 'resource/scss/rrssb.scss')
		]
	},
	output: {
		path: path.resolve(__dirname, inProduction ? 'dist' : 'responsive-social-buttons/dist'),
		filename: '[name].js' // [name] point to entry { app } value, chunkhash will give every file a unique hash
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader"],
					fallback: "style-loader"
				})
			},
			{
				test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          //resolve-url-loader may be chained before sass-loader if necessary
		          use: ['css-loader', 'resolve-url-loader', 'sass-loader']
		        })
			},
			{ 	
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.(eot|ttf|woff|woff2)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[hash].[ext]'
				}
			}
		]
	},
	devServer: {
	    hot: true,
	    // enable HMR on the server

	    contentBase: path.resolve(__dirname),
	    // match the output path

	    publicPath: '/'
	    // match the output `publicPath`
	 },
	plugins: [
		new ExtractTextPlugin("[name].css"), // extract css to file, [name] use entry file name
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		}),
	    new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: "jquery",
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),
		function() {
	    	this.plugin('done', stats => {
	    		imagemin(['icons/*.svg'], 'icons/compressed', {
					use: [
						imageminSvgo({
							plugins: [
								{removeViewBox: false}
							]
						})
					]
				}).then(() => {
					console.log('Images optimized');
				});
				require('fs-extra').remove(path.resolve(__dirname, inProduction ? 'responsive-social-buttons' : 'dist'));
	    	});
	    }
	]
};

if (inProduction === true) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
	module.exports.plugins.push(
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, !inProduction ? 'responsive-social-buttons' : ''),
			verbose: true, // write logs to console
			dry: false // emulate delete?
		})
	)
}