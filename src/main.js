import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {
  Button
} from 'vant';
import {
  Popup
} from 'vant';

Vue.use(Popup);
Vue.use(Button)
new Vue({
  render: h => h(App),
}).$mount('#app')