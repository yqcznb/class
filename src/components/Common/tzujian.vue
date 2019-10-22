<template>
<div>
  <div class="tzujian">
        <el-menu
          default-active="4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="transparent"
          text-color="#fff"
         >
          <el-menu-item index="1" style='padding-left:20px!important;margin-top:3em; text-align:center' @click="showSetting">
            <el-tooltip class="item" effect="dark" content="设置" placement="right" >
             <i class="iconfont iconshezhi"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="2" style='padding-left:20px!important;' @click="showCurrenttable">
             <el-tooltip class="item" effect="dark" content="信息" placement="right">
                <i class="iconfont iconxinxi1"></i>
            </el-tooltip>
          </el-menu-item>
            <el-menu-item index="3" style='padding-left:20px!important;' @click="showShowtable">
              <el-tooltip class="item" effect="dark" content="课程表" placement="right">
                <i class="iconfont iconkechengbiao"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="4" style='padding-left:20px!important;' @click="showCurrenttable">
            <el-tooltip class="item" effect="dark" content="主页" placement="right">
               <i class="iconfont iconzhuye1"></i>
            </el-tooltip>
          </el-menu-item>
        </el-menu>
  </div>
    <but></but>
  </div>
</template>

<script>
import but from '../Common/but'
export default {
  name: 'tzujain',
  data () {
    return {
      realTime:"",
    }
  },
  mounted () {
  
},
  components:{
      but,
  },
  destroyed () {
  if (this.timer) { 
    clearInterval(this.timer)
  }
},
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showSetting: function(){
        this.$emit('show-setting');
        console.log('aaa')
      },
      showCurrenttable: function(){
        this.$emit('show-currenttable');
        console.log('bbb')
      },
      showShowtable: function(){
        this.$emit('show-showtable');
        console.log('ccc')
      },
  }
}
</script>


<style lang="scss">
 @import "../../assets/css/yy";
 .tzujian{
   @extend %gg;
 }


 
</style>
