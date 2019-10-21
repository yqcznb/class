import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);




const store = new Vuex.Store({
  // 设置属性
  state: {
    adminLogin: false,
    tchLogin: false,
    stuLogin: false,
  },

  // 获取属性的状态
  getters: {
    //获取登录状态
    adminLogin: state => state.adminLogin,
    tchLogin: state => state.tchLogin,
    stuLogin: state => state.stuLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    adm_login_status(state, adminFlag) {
      state.adminLogin = adminFlag
    },
    tch_login_status(state, tchFlag) {
      state.tchLogin = tchFlag
    },
    stu_login_status(state, stuFlag) {
      state.stuLogin = stuFlag
    },
  },

  // 应用mutations
  actions: {
    //获取登录状态
    adminLogin({commit}, adminFlag) {
      commit("adm_login_status", adminFlag)
    },
    tchLogin({commit}, tchFlag) {
      commit("tch_login_status", tchFlag)
    },
    stuLogin({commit}, stuFlag) {
      commit("stu_login_status", stuFlag)
    },
  }
})

export default store