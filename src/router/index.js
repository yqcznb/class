import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import stu_index from '@/components/stu_index/stu_index'
import zujian from '@/components/Common/zujian'
import tch_index from '@/components/teacher/tch_index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {

      path: '/zujian',
      name: 'zujian',
      component: zujian
    },
    {

      path: '/stu_index',
      name: 'stu_index',
      component: stu_index
    },
    {
      path: '/tch_index',
      name: 'tch_index',
      component: tch_index
    }
    
  ]
})
