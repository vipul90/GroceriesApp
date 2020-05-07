const HtmlWebPackPlugin = require("html-webpack-plugin");
// const restPlugin = require("transform-object-rest-spread");
// import * as HtmlWebPackPlugin  from 'html-webpack-plugin'
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
    entry:["./src/index.js"],
    output:{
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              },
              {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
              },
              {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
             }
          ]
    },
    resolve:{
        extensions:['.js','.css']
    },
    plugins: [htmlPlugin],
    devServer: {
        port: 3005,
        historyApiFallback: true
      }
}