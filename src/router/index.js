import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import stu_index from '@/components/stu_index/stu_index'
import tch_index from '@/components/teacher/tch_index'
import Administrator from '@/components/Administrator/Administrator'
import adminSettings from '@/components/Administrator/adminSettings'
import Display_one from '@/components/Administrator/Display_one'
import adminadd from '@/components/Administrator/adminadd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/stu_index',
      name: 'stu_index',
      component: stu_index,
      meta: { stuLogin: true },
    },
    {
      path: '/tch_index',
      name: 'tch_index',
      component: tch_index,
      meta: { tchLogin: true },
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator,
      meta: { adminLogin: true },
      children: [
        {
          path: 'adminSettings',
          name: 'adminSettings',
          component: adminSettings,
          meta: { adminLogin: true },
        },
        {
          path: 'Display_one',
          name: 'Display_one',
          component: Display_one,
          meta: { adminLogin: true },
        },
        {
          path: 'adminadd',
          name: 'adminadd',
          component: adminadd,
          meta: { adminLogin: true },
        },
      ],
    }
    
  ]
})
