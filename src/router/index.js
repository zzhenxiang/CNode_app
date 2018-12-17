import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Gzh from '@/components/Gzh'
import Me from '@/components/Me'
// 引入主题相关的组件
import All from '@/components/topics/All'
import Ask from '@/components/topics/Ask'
import Good from '@/components/topics/Good'
import Job from '@/components/topics/Job'
import Share from '@/components/topics/Share'

// 引入主题详情
import Show from '@/components/Show'
import Art from '@/components/Art'
import HelloWorld from '@/components/HelloWorld';


// import ArticleDetail from '@/components/ArticleDetail';





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/index',
          redirect: '/index/all'
        },
        {
          path: '/index/all',
          component:All
        },
        {
          path: '/index/good',
          component:Good
        },
        {
          path: '/index/share',
          component:Share
        },
        {
          path: '/index/ask',
          component:Ask
        },
        {
          path: '/index/job',
          component:Job
        },
        {
          path: '/index/show/:id',
          component:Show
        },
         {
          path: '/index/HelloWorld',
          component:HelloWorld
        }
      ]
    },
    {
   		path: '/gzh',
   		name: 'Gzh',
   		component: Gzh
    },
    {
   		path: '/me',
   		name: 'Me',
   		component: Me
    },
    {
      path: '/art',
      name: 'Art',
      component: Art
    }

  ]
})
