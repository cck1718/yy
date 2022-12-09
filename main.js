
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import { $http } from '@escook/request-miniprogram'

uni.$http = $http


//请求拦截器
$http.beforeRequest = function (options) {
  // uni.showLoading({
  // 	title:'加载中...'
  // });
}
//响应拦截器
$http.afterRequest = function(){
	
}



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif