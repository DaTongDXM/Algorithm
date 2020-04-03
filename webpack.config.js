const path = require('path')
const Htmlwebpackplugin=require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'src/app.js'),
    output:{
        filename:'[name]-[chunkhash].js',
        path:path.join(__dirname,'dist')
    },
    module:{},
    plugins:[
        new Htmlwebpackplugin()
    ]
}