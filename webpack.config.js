/**
* @Author: callback
* @Date:   2016-09-23T10:53:55+08:00
* @Email:  heuuLZP@gmail.com
* @Last modified by:   callback
* @Last modified time: 2016-09-23T11:52:04+08:00
*/
var path = require('path')

//定义一些文件夹的路径·
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'src');
var BUILD_PATH = path.resolve(ROOT_PATH,'dist');

module.exports = {
  entry:APP_PATH + '/main.js',
  output:{
    path:BUILD_PATH,
    publicPath:'dist/',
    filename:'build.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel',
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:'vue'
      }
    ]
  }
}
