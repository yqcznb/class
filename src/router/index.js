import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import stu_index from '@/components/stu_index/stu_index'
import teacher from '@/components/teacher/tch_index'
import tch_setting from '@/components/teacher/tch_setting'
import tch_information from '@/components/teacher/tch_information'
import tch_table from '@/components/teacher/tch_table'
import tch_change_pass from '@/components/teacher/change_pass'
import Administrator from '@/components/Administrator/Administrator'
import adminSettings from '@/components/Administrator/adminSettings'
import change_pass from '@/components/Administrator/change_pass'

import Display_one from '@/components/Administrator/Display_one'
import Display_two from '@/components/Administrator/Display_two'
import Display_three from '@/components/Administrator/Display_three'
import profess_c_dl from '@/components/Administrator/admin_schedual_dl/profess_c_dl'
import teacher_n_dl from '@/components/Administrator/admin_schedual_dl/teacher_n_dl'

// guize相关
import Guize1 from '@/components/updata/guize1'
import Guize2 from '@/components/updata/guize2'
import Guize3 from '@/components/updata/guize3'

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
      path: '/teacher',
      name: 'teacher',
      component: teacher,
      meta: { tchLogin: true },
      children: [
        {
          path: 'tch_setting',
            name: 'tch_setting',
            component: tch_setting,
            meta: { 
              tchLogin: true
            },
        },
        {
          path: 'tch_information',
          name: 'tch_information',
          component: tch_information,
          meta: {
            tchLogin: true
          },
        },
        {
          path: 'tch_table',
          name: 'tch_table',
          component: tch_table,
          meta: {
            tchLogin: true
          },
        },
        {
          path: 'tch_change_pass',
          name: 'tch_change_pass',
          component: tch_change_pass,
          meta: {
            tchLogin: true
          },
        },
      ]
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
          path: 'change_pass',
          name: 'change_pass',
          component: change_pass,
          meta: { adminLogin: true },
        },
        {
          path: 'Display_one',
          name: 'Display_one',
          component: Display_one,
          meta: { adminLogin: true },
        },
        {
          path: 'Display_two',
          name: 'Display_two',
          component: Display_two,
          meta: { adminLogin: true },
        },
        {
          path: 'Display_three',
          name: 'Display_three',
          component: Display_three,
          meta: { adminLogin: true },
          children: [
            {
              path: 'profess_c_dl',
              name: 'profess_c_dl',
              component: profess_c_dl,
              meta: { adminLogin: true },
            },
            {
              path: 'teacher_n_dl',
              name: 'teacher_n_dl',
              component: teacher_n_dl,
              meta: { adminLogin: true },
            },
          ]
        },
        {
          path: 'guize1',
          name: 'guize1',
          component: Guize1,
          meta: { adminLogin: true },
        },
        {
          path: 'guize2',
          name: 'guize2',
          component: Guize2,
          meta: { adminLogin: true },
        },
        {
          path: 'guize3',
          name: 'guize3',
          component: Guize3,
          meta: { adminLogin: true },
        },
      ],
    },

  ]
})
