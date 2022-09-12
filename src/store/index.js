import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'
import user from './user_login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    tab,user
  }
})