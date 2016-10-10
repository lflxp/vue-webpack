/**
 * Created by xiajing on 2016/10/10.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry:{
        index: './src/index.js'
    },
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: '../',
        filename:'js/[name].js',
        chunkFilename: "js/[id].chunk.js"
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},//把样式独立出来
            {test: /\.js[x]?$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,loader: 'babel'},
            {test: /\.(jpg|png|gif)$/,loader: 'url?limit=25000&name=image/[hash].[ext]'},
            //将bootstarp的字体打包如果项目中没有使用bootstarpUI就不用加载次字体的格式
            {test: /\.woff[2]?$/, loader: "url?limit=10000&minetype=application/font-woff&name=fonts/[hash].[ext]"},
            {test: /\.ttf$/, loader: "url?limit=10000&name=fonts/[hash].[ext]"},
            {test: /\.eot$/, loader: "url?limit=10000&name=fonts/[hash].[ext]"},
            {test: /\.svg$/, loader: "url?limit=10000&name=fonts/[hash].[ext]"},
            {test: /\.vue$/, loader: 'vue'},
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css"),//生成的css样式文件
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            filename:'/view/index.html',    //生成的html存放路径，相对于 path
            template:'./src/index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true,  //删除空白符与换行符
                //collapseInlineTagWhitespace:true
            },
        }),
        new webpack.optimize.UglifyJsPlugin({	//压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
    ]
}
module.exports = config;