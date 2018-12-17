const path=require('path')
const webpack=require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin=require('html-webpack-plugin')
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
const MiniExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const isDev=process.env.NODE_ENV==="production"
const config={
    entry:path.join(__dirname,'../src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'../dist'),
    },
    mode: isDev ? "production":"development",
    module:{
        rules:[
           {
               test: /\.vue$/,
               loader: 'vue-loader'
           },
           {
                test:/\.js$/,
                exclude: __dirname+'node_modules',
                loader:'babel-loader'
           },
           {
               test: /\.jsx$/,
               loader: 'babel-loader'
           },
           {
                test:/\.less/,
                use:[
                    isDev?MiniExtractPlugin.loader:'style-loader', 
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'less-loader'
                ]
           },
           {
               test:/\.(gif|jpg|jpeg|png|svg)/,
               use:[
                   {
                       loader:'url-loader',
                       options:{
                           limit:10000,
                           name:'[name].[ext]'
                       }
                   }
               ]
           }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'],{
            root:path.resolve(__dirname,'../')
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '../'),
            manifest: require('./vendor-manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"production"':'"development"'
            }
        }),
        new MiniExtractPlugin({
            filename: isDev ? '[name].[hash].css' : '[name].css',
            chunkFilename: isDev ? '[id].[hash].css' : '[id].css'
        }),
        new HTMLPlugin()
    ],
    optimization:{
        minimizer:[new UglifyJsPlugin({
            cache:true,
            parallel:true,
            sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    }
}
if(isDev){
    config.devServer={
        port:8080,
        host:'0.0.0.0',
        contentBase: path.join(__dirname, "dist"),
        overlay:true,
        hot:true,
        stats: "errors-only"
    }
}
module.exports=config