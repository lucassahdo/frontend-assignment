// vue.js
import Vue from 'vue';
// styles
import './styles/dashboard/main.scss';
// router
import router from './router/router';

// Plugins
import './plugins/axios';
import loading from './plugins/loading';
import vuelidate from './plugins/vuelidate';

// State
import store from './store/store';

// Mixins
import helper from './mixins/helperMixin';
Vue.mixin(helper);

// alerts
global.swal = require('sweetalert2');

// main component
import App from './App.vue';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  loading,
  vuelidate
});
