import Vue from 'vue'
import App from './App.vue'

import TreeSelect from "../packages/index";

Vue.config.productionTip = false

Vue.use(TreeSelect);

new Vue({
  render: h => h(App),
}).$mount('#app')
