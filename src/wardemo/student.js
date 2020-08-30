// 引入刚刚封装的request
import request from '@/utils/request'
const group_name = 'student'
export default {
  queryAllStudent() {
    return new request({
      url: `/${group_name}/queryAllStudent`,
      method: 'get'
    })
  }
}