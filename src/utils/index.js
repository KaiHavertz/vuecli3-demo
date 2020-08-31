/** 分装 axios */
import axios from 'axios'
//创建 一个 axios 服务
const service = axios.create({
  //这里先配置成本地，后面在 vue.config.js 中配置代理
  baseURL: 'http://localhost:8080/wardemo',
  timeout: 10000, //超时时间10秒
})

//设置 axios 请求拦截器
//在拦截器中，可以对请求做一些统一化的处理
service.interceptors.request.use(
  config => {
    //统一设置请求头
    config.headers['token'] = 'jnr235'
    return config
  },
  err => {
    return Promise.reject('请求异常' + err)
  }
)

//设置 axios 响应拦截器
service.interceptors.response.use(
  response => {
    let res = response.data //响应数据，根据实际情况返回的json段处理
    const code = response.status // 返回状态码，根据实际情况处理，有的可能是 code
    if (code == 200) { //与后台返回的 保持一致，
      return res //放行
    } else {
      console.log('请求失败', code)
      return Promise.reject('请求异常 ' + code)
    }
  },
  err => {
    console.log('请求失败!');
    return Promise.reject('请求异常!')
  }
)

//导出 service
export default service