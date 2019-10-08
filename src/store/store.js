import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      'id': '1',
      'email': 'test@test.com',
      'logged': true
    }
  }
});
