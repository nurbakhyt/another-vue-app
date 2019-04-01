import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './pages/MainPage';
import PostsList from './pages/posts/List';
import PostItem from './pages/posts/Item';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: MainPage,
      name: 'main-page',
      props: true
    },
    {
      path: '/posts',
      component: PostsList,
      name: 'posts-list',
      props: true
    },
    {
      path: '/posts/:id',
      component: PostItem,
      name: 'post-item'
    }
  ]
});

export default router;