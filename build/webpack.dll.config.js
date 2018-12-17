var path=require('path')
var webpack=require('webpack')
const UglifyJSPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    entry:{
        vendor:[
            'vue/dist/vue.esm.js'
        ]
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
            path:path.join(__dirname,'../static/js'),
            filename:'[name].dll.js',
            library:'[name]_library'
        },
        plugins:[
            new webpack.DllPlugin({
                path:path.resolve(__dirname,'.','[name]-manifest.json'),
                name:'[name]_library'
            })
        ]
}