import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../modules/main/index'
import manage from '../modules/manage/manage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
    	path:'/',
    	name:'index',
    	component:index
    },{
    	path:'/manage',
    	name:'manage',
    	component:manage
    }
  ]
})
