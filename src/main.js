// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import axios from 'common/js/axios';
import 'mint-ui/lib/style.css';
import 'common/stylus/index.styl';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Mint);
Vue.use(axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  data: {
    eventHub: new Vue()
  }
});

