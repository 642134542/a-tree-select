import Vue from 'vue'
import App from './App.vue'

import aTreeSelect from "../packages/index";

Vue.config.productionTip = false;
Vue.use(aTreeSelect);

new Vue({
  render: h => h(App),
}).$mount('#app');
