import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'


Vue.config.productionTip = false

create(App).mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
