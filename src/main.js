import Vue from 'vue'
import App from './App.vue'

// 引用elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



Vue.config.productionTip = false

import router from '@/routes/index.js'
import store from '@/store/index.js'
import "@/assets/common.css";
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
