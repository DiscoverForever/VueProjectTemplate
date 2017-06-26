// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import axios from 'common/js/axios';
import AV from 'leancloud-storage';
import 'mint-ui/lib/style.css';
import 'common/stylus/index.styl';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Mint);
Vue.use(axios);
const APP_ID = '0yMcke4M4YaWdl9I32MNEM7f-gzGzoHsz';
const APP_KEY = 'J2sIDkQYOK1yeNs1JkJ4Y1d1';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

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

