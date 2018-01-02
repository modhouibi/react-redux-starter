const path=require('path');

module.exports={
	
	entry:'./src/index.js',
	output:{
		
		path:path.resolve(__dirname,'public'),
		filename:'bundle.js'
	},
	
	module:{
		
		rules:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			use:{
				loader:'babel-loader',
				options:{
					presets:['react','es2015']
				}
			}
			
		}
		]
	},
	,
	devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
}
	
	
}
