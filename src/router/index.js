import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import stu_index from '@/components/stu_index/stu_index'
import tch_index from '@/components/teacher/tch_index'
import Administrator from '@/components/Administrator/Administrator'
import adminSettings from '@/components/Administrator/adminSettings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { isLogin: false },
    },
    {
      path: '/stu_index',
      name: 'stu_index',
      component: stu_index,
      meta: { isLogin: true },
    },
    {
      path: '/tch_index',
      name: 'tch_index',
      component: tch_index,
      meta: { isLogin: true },
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator,
      meta: { isLogin: true },
      children: [
        {
          path: 'adminSettings',
          name: 'adminSettings',
          component: adminSettings,
          meta: { isLogin: true },
        },
      ],
    }
    
  ]
})
