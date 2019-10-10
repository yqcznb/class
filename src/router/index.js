import Vue from 'vue'
import Router from 'vue-router'
import stu_index from '@/components/stu_index/stu_index'
import index from '@/components/index'
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
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/stu_index',
      name: 'stu_index',
      component: stu_index
    }
  ]
})
