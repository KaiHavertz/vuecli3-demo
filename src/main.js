import Vue from 'vue'
import App from './App.vue'
import router from './router' //经测试：router 定义为大写 开头的 Router 会报错
Vue.config.productionTip = false
import {
  Button,
  Popup,
  DropdownMenu,
  DropdownItem
} from 'vant';

Vue.use(Popup)
Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')