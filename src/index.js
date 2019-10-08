// vue.js
import Vue from 'vue';
// styles
import './styles/dashboard/main.scss';
// router
import router from './router/router';
// vue validate
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

// main component
import App from './App.vue';

new Vue({
  el: '#app',
  // store,
  render: h => h(App),
  router
});
