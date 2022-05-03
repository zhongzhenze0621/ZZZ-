import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project/project'

import Test from '@/components/Test'
import { test } from 'shelljs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
