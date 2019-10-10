import Vue from 'vue'
import Router from 'vue-router'
import stu_index from '@/components/stu_index/stu_index'
import login from '@/components/login/login'


Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/',
      name: 'login',
      component: login
    },
    {
      

    }
  ]
})
