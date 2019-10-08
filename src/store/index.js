import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      //需要保存的数据xie在这里
        isLogin: false,
        yhid:""
      },  
      getters: { 
        //Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，
        //且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，
        //Getters 可以用于监听、state中的值的变化，返回计算后的结果
        isLogin: state => state.isLogin,
        yhid: state => state.yhid,
      },
      mutations: {
        //相当于methods,在这里面定义函数；
        userStatus(state, flag) {
          state.isLogin = flag
        },
        yhid(state,aa){
            state.yhid = aa
        }
      },  
     // 应用mutations,在actions中提交从页面传过来的mutation再去修改状态值
      actions: {  
        userLogin({commit}, flag) {
          commit("userStatus", flag)
        },
        yh({commit},aa){
        commit("yhid",aa)
        }
    }
})

export default store