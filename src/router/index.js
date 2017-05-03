import Vue from 'vue';
import Router from 'vue-router';
import home from 'components/home/home';
import order from 'components/order/order';
import news from 'components/news/news';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
});
