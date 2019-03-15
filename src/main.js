import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.component('icon', Icon)

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')