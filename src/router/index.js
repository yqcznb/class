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

import Display_one from '@/components/Administrator/admin_display/Display_one'
import Display_two from '@/components/Administrator/admin_display/Display_two'
import Display_three from '@/components/Administrator/admin_display/Display_three'

import adminadd from '@/components/Administrator/adminadd'
import adminmodule from '@/components/Administrator/adminmodule'

import format1 from '@/components/teacher/teacher_table/format1'
import format2 from '@/components/teacher/teacher_table/format2'
import format3 from '@/components/teacher/teacher_table/format3'
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
          children:[
          {
            path: 'format1',
            name: 'format1',
            component: format1,
            meta: {
              tchLogin: true
            },
          },
          {
            path: 'format2',
            name: 'format2',
            component: format2,
            meta: {
              tchLogin: true
            },
          },
          {
            path: 'format3',
            name: 'format3',
            component: format3,
            meta: {
              tchLogin: true
            },
          },
          ]
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
        },
        {
          path: 'adminadd',
          name: 'adminadd',
          component: adminadd,
          meta: { adminLogin: true },
        },
        {
          path: 'adminmodule',
          name: 'adminmodule',
          component: adminmodule,
          meta: { adminLogin: true },
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
