import Vue from 'vue';
import App from './App';
import router from './router';
import './app.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});