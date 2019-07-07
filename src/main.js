// 把vue引入进来
import Vue from 'vue'
// 引入进来Aoo.vue
import App from './App.vue'
import './assets/styles/reset.styl'
import "./assets/swiper/css/swiper.min.css"
import router from "./router/router"
import './mixins/scroll'
Vue.config.productionTip = false

new Vue({
    router,
  // 把App.vue里面的内容读取出来
  render: h => h(App)
}).$mount('#app')
