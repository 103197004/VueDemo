import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/menu/Account'
import Set from '@/components/menu/Set'
import List from '@/components/menu/List'
import System from '@/components/menu/System'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home/system',
      children: [{
        path: '/home/system',
        name: 'System',
        component: System
      },
      {
        path: '/home/account',
        name: 'Account',
        component: Account
      },
      {
        path: '/home/set',
        name: 'Set',
        component: Set
      },
      {
        path: '/home/list',
        name: 'List',
        component: List
      }]
    }
  ]
})
