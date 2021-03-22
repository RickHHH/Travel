import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css' 


Vue.config.productionTip = false
fastClick.attach(document.body)

//runtime

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")


//路由就是根据网址的不同，返回不桶的内容给用户
