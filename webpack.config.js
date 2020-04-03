/*
 * @Author       : yuanxin42@xdf.cn
 * @Date         : 2020-04-03 10:05:55
 * @LastEditors  : yuanxin42@xdf.cn
 * @LastEditTime : 2020-04-03 15:20:21
 * @Description  : 描述信息
 */
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: "8888",
    open: true,
    hot: true
  },
  // compiler模式
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js',
    }
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
}