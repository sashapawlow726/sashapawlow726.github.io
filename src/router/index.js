import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../store'
import Home from '@/components/Home'
import Task from '@/components/Task'
import Registration from '@/components/Auth/Registration'
import Login from '@/components/Auth/Login'


Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEach(to, from , next) {
			  store.getters.checkUser ? next() : next('/login')
      }
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      beforeEach(to, from , next) {
			  store.getters.checkUser ? next() : next('/login')
      }
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
    ,
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
