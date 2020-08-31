/**每个控制器对应 一个 文件 */
//导入刚刚封装的 axios 全局配置文件
import request from '../../utils/index'
//类上的 @RequestMapping 路径
const classMapping = 'student'
//导出模块
export default {
  queryAllStudent() { //控制器对应方法
    return new request({
      //queryAllStudent:是控制器方法上的 @RequestMapping 路径
      url: `${classMapping}/queryAllStudent`,
      method: 'get'
    })
  }
}

//以后访问直接 导入该文件之后 使用该方法