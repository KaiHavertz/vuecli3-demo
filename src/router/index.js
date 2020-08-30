import Vue from 'vue'
import VueRouter from 'vue-router'
//注入插件
Vue.use(VueRouter)
//导入组件
import HelloWord from '../components/HelloWorld.vue'

//定义路由
const MyRoutes = [{
  path: '/helloWorld',
  name: 'helloWorld',
  component: HelloWord,
  meta: {
    title: 'hello world'
  }
}]

//创建router 实例
const router = new VueRouter({
  routes: MyRoutes, //定义的router
  mode: 'history' //不要带#号的默认 hash模式
})

//使用路由守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title //修改标题
  next() //放行
})
//导出路由
export default router