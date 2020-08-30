import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {
  Button,
  Popup
} from 'vant';

Vue.use(Popup);
Vue.use(Button)
new Vue({
  render: h => h(App),
}).$mount('#app')