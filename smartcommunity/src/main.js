import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入vant组件库*/
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
// 引入饿了么的组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'vant/lib/index.css';
import { Popup,Uploader,Dialog,Sticky,DatetimePicker, DropdownMenu, DropdownItem,Checkbox, CheckboxGroup} from 'vant';
 

// find发现页面的六张logo图
import find7 from './assets/timg.jpg'
import find2 from './assets/meirong.jpg'
import find3 from './assets/caichang.jpg'
import find4 from './assets/baihuo.jpg'
import find5 from './assets/meihsi.jpg'
import find6 from './assets/yule.jpg'
// axios 改写为 Vue 的原型属性  首先在主入口文件main.js中引用，之后挂在vue的原型链上
import axios from 'axios'
Vue.prototype.$ajax= axios



Vue.use(ElementUI);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(Sticky);
Vue.use(DatetimePicker);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Checkbox).use(CheckboxGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
