import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import theheader from '../components/theheader'
import home from '../components/home'
import propsexp from '../components/propsexp'
import productdata from '../components/productdata'
import login from '../components/login'
import thefooter from '@/components/thefooter'
import cafepage from '@/components/cafepage'
import winepage from '@/components/winepage'
import cartproduct from '@/components/cartproduct'
import 'bootstrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/theheader',
      name: 'theheader',
      component: theheader
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/propsexp',
      name: 'propsexp',
      component: propsexp
    },
    {
      path: '/productdata',
      name: 'productdata',
      component: productdata
    },
    {
      path: '/cafepage',
      name: 'cafe',
      component: cafepage
    },
    {
      path: '/winepage',
      name: 'wine',
      component: winepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/thefooter',
      name: 'thefooter',
      component: thefooter
    },
    {
      path: '/cartproduct',
      name: '',
      component: cartproduct
    },

  ]
})
