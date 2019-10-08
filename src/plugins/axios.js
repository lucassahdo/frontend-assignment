import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://intricately-api.sahdo.me/';

Vue.use(axios);

Vue.prototype.$http = axios;