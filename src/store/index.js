import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.store({
  //全局变量
  state: {
    count: 1
  },
  //getters
  getters: {
    getCount(state) {
      return state.count
    }
  },
  //方法
  mutations: {
    decrement(state) {
      state.count--
    },
    increment(state) {
      state.count++
    }
  },
  //异步请求
  actions: {
    decrement(context) {
      //返回 Promise
      return new Promise((resolve, reject) => {
        //执行异步请求
        context.commit('increment')
        resolve('执行完毕')
        reject('有异常')

      })
    }
  }
})

//导出模块
export default store