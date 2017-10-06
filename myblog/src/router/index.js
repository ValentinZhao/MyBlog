import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import posts from '@/components/common/posts'
import article from '@/components/common/article'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
    redirect: '/posts',
    children: [{
      path: '/posts',
      name: 'posts',
      component: posts
    }, {
      path: 'articles/:id',
      name: 'articles',
      component: article
    }]
  }]
})
