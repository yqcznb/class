import Vue from 'vue'
import Router from 'vue-router'
import stu_index from '@/components/stu_index/stu_index'
import login from '@/components/login/login'
import zujian from '@/components/Common/zujian'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/stu_index',
      name: 'stu_index',
      component: stu_index

    },
    {
      path: '/zujian',
      name: 'zujian',
      component: zujian

    }
  ]
})
