//import Vue from 'vue'
//import App from './App.vue'

//Vue.config.productionTip = false

//new Vue({
  //render: h => h(App),
//}).$mount('#app')
import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app');