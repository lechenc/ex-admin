/*
 * @Author: your name
 * @Date: 2020-05-18 18:56:31
 * @LastEditTime: 2020-08-17 20:04:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\store\index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import common from './modules/common'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    common
  },
  getters,
  plugins: [createPersistedState()],
})

export default store
