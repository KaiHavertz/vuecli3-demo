import axios from 'axios'
// 创建axios
const service = axios.create({
  //baseURL: 'http://localhost:8080/api',
  baseURL: 'http://localhost:8080/wardemo', //这里8080必须要跟 vu.config.js中代理服务器一样，localhost是为了避免跨域访问异常
  timeout: 10000,
})
// 设置axios请求拦截器
// 拦截器中，可以对请求进行一些统一化的操作
service.interceptors.request.use(
  config => {
    // 统一设置请求头
    config.headers['token'] = '12345'
    return config
  },
  err => {
    return Promise.reject('请求异常！' + err)
  }
)
// 设置响应拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    const code = response.status
    if (code === 200) {
      return res
    } else {
      console.log('请求失败！')
      return Promise.reject('请求异常！')
    }
  },
  err => {
    console.log('请求失败！')
    return Promise.reject('请求异常！')
  }
)
// 把service导出
export default service