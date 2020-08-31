'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = 8080
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, // 改为false可一定程度上解决浏览器f12查看到源码的问题
  devServer: {
    disableHostCheck: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    },
    //配置代理，所有  */api 走 http://47.102.115.146:8080/ 即 '/api/ 代替baseUrl
    /** /配置代理，所有  /wardemo 走 http://101.37.32.181:8081/ */
    /**不使用 代理会导致跨域无法访问问题 */
    /**vue axios 请求本地接口端口不一致出现跨域,需要设置changeOrigin = true */
    /*   proxy: {
         '/wardemo': {
           target: `http://101.37.32.181:8080/`,
           changeOrigin: true, //是否允许跨域
           pathRewrite: {
             '^/wardemo': ''
           }
         }
       }*/
    proxy: {
      //请求路径 带有 /wardemo的走代理 http://101.37.32.181:8080/
      '/wardemo': {
        target: 'http://101.37.32.181:8080/', //代理为什么 ip:端口
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/wardemo': '' //表示将路径重写为 http://101.37.32.181:8080/
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src') // 别名。开启后@表示src下目录
      }
    }
  },
}