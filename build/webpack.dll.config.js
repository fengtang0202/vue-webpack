var path=require('path')
var webpack=require('webpack')
const UglifyJSPlugin=require('uglifyjs-webpack-plugin')
const cleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
    entry:{
        vendor: ['vue', 'axios', 'vue-router', 'fastclick', 'vuex', 'vuex-persistedstate', 'lib-flexible']
    },
    optimization:{
        minimizer:[
            new UglifyJSPlugin({
                uglifyOptions:{
                    output:{
                        comments:false
                    },
                    compress:{
                        warnings:false,
                        drop_debugger:true,
                        drop_console:true
                    }
                }
            })
        ]
    },
        mode:'production',
        output:{
            path:path.join(__dirname,'../static/commonJS'),
            filename:'[name][contenthash:7].dll.js',
            library:'[name]_library'
        },
        plugins:[
            new cleanWebpackPlugin(
                ['../static/commonJS'],{root: path.resolve(__dirname, '../static')}
            ),
            new webpack.DllPlugin({
                path:path.resolve(__dirname,'.','[name]-manifest.json'),
                name:'[name]_library'
            })
        ]
}