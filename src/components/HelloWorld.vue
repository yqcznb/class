<template>
  <div class="hello">
        <div>{{msg}}</div>
        <button @click="userLogin('true')">点击改变userLogin:{{$store.state.isLogin}}</button>
        <button @click="yh('22')">点击改变yhid:{{$store.state.yhid}}</button>
        <h3>{{yhid}}</h3>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>        
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: true
    }
  },
  computed:{
    ...mapState([
     'yhid'
    ])
  },
  methods:{
    // userLogin(){
    //   this.$store.dispatch("userLogin",true)
    // },
    // yh(){
    //   this.$store.dispatch("yh",77)
    // },
   ...mapActions([
                'userLogin',
                'yh'
             
            ]),
    
  }
}
</script>


<style scoped>

</style>
