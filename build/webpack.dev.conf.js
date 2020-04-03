/*
 * @Author       : yuanxin42@xdf.cn
 * @Date         : 2020-04-03 15:13:47
 * @LastEditors  : yuanxin42@xdf.cn
 * @LastEditTime : 2020-04-03 15:14:53
 * @Description  : 描述信息
 */
var path = require('path')
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: "8888",
        open: true,
        hot: true
    },
}; 