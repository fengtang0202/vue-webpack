const path=require('path')
const webpack=require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin=require('html-webpack-plugin')
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
const MiniExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin')
const WebpackBundleAnalzyer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isDev=process.env.NODE_ENV==="production"
const config={
    entry:[
        path.join(__dirname,'../src/index.js')
    ],
    output:{
        filename:'js/[name].[hash:7].js',
        path:path.join(__dirname,'../dist'),
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
    },
    mode: isDev ? "production":"development",
    module:{
        rules:[
           {
               test: /\.vue$/,
               loader: 'vue-loader',
                exclude: /node_modules/
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
               exclude: /node_modules/,
                use:[
                    isDev?MiniExtractPlugin.loader:'style-loader', 
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:false
                        }
                    },
                    {
                        loader:'px2rem-loader',
                        options:{
                            remUnit: 37.5
                        }
                    },
                    'less-loader',
                ]
           },
           {
               test:/\.(gif|jpg|jpeg|png|svg)/,
               exclude: /node_modules/,
               use:[
                   {
                       loader: 'url-loader',
                       options:{
                           limit:10000,
                           name:'images/[name].[hash:5].[ext]'
                       }
                   }
               ]
           }
        ]
    },
    resolve:{
        extensions:['.js','.vue','.json']
    },
    plugins:[
        new VueLoaderPlugin(),
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
            filename: isDev ? 'css/[name].[contenthash:7].css' : '[name].css',
            chunkFilename: isDev ? '[id].[hash].css' : '[id].css'
        }),
        new HTMLPlugin({
            hash:true,
            template:'index.html'
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath:path.resolve(__dirname,'../static/commonJS/*.dll.js'),
            hash: true,
            includeSourcemap: false,
            publicPath: './js',
            outputPath: '../dist/js'
        })
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
if(!isDev){
    const devConfig={
        port:8080,
        host:'127.0.0.1'
    }
    config.devtool = 'cheap-module-eval-source-map'
    config.devServer={
        port:devConfig.port,
        host:devConfig.host,
        contentBase: path.join(__dirname, "dist"),
        overlay:true,
        compress: true,
        hot:true,
        quiet: true,
        open: true
    }
    config.plugins.push(...[new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo:{
            messages:[`在浏览器打开这个地址\n\http://${devConfig.host}:${devConfig.port}\n去吧可达鸭....`]
        }
    })],new webpack.HotModuleReplacementPlugin())

}
if(isDev){ 
    config.plugins.push(
         ...[new CleanWebpackPlugin(['dist'], {
             root: path.resolve(__dirname, '../')
        }), new WebpackBundleAnalzyer()]
    )
    config.module.rules[4].use.push({loader:'image-webpack-loader'})
}
module.exports=config