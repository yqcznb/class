// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/fonts/zzgflh.otf"
import "@/assets/fonts/fzchsjt.ttf"
import App from './App'
import router from './router'
import store from './store'
// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {

  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if( getFlag === "adminLogin" || getFlag === "stuLogin" || getFlag === "tchLogin" ){

    //设置vuex登录状态为已登录
    store.state.getFlag = true
    next()

    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.getFlag) {
      next({
        path: localStorage.getItem("indexPage")
      })
    }
  
  //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.getFlag){
      next({
        path: '/'
      })
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});