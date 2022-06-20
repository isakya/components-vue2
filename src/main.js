import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iconfont
import './styles/icon/iconfont.css'
// import './style/lessconfig.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
