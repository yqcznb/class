<template>
<div>
  <div class="szujian">
        <el-menu
          default-active="4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="transparent"
          text-color="#fff"
         >
          <el-menu-item index="1" style='padding-left:20px!important;margin-top:3em;' @click="showSetting">
            <el-tooltip class="item" effect="dark" content="设置" placement="right" >
             <i class="iconfont iconshezhi"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="2" style='padding-left:20px!important;' @click="xuanze">
             <el-tooltip class="item" effect="dark" content="xx同学201702505xxx" placement="right">
                <i class="iconfont iconxinxi1"></i>
            </el-tooltip>
          </el-menu-item>
           <el-submenu index="3">
            <template slot="title">
              <el-tooltip class="item" effect="dark" content="课程表" placement="right">
                <div @click="xuanze"><i class="iconfont iconkechengbiao"></i></div>
            </el-tooltip>
            </template>
            <el-menu-item-group>
               <el-menu-item index="1-1" style='padding-left:0px!important;' @click="show">
                  <el-tooltip class="item" effect="dark" content="显示" placement="right">
                  <i class="iconfont iconxianshi"></i>
                  </el-tooltip>
              </el-menu-item>
               <el-menu-item index="1-2" style='padding-left:0px!important;' @click="xuanze">
                  <el-tooltip class="item" effect="dark" content="选择" placement="right">
                  <i class="iconfont iconxuanze"></i>
                  </el-tooltip>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" style='padding-left:20px!important;' @click="xuanze">
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
  name: 'szujian',
  data () {
    return {
      str: 1,
    }
  },
  components:{
    but,
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      show: function(){
        if(this.str%2==0)
          this.$emit('transferShow',false);
        this.$emit('transferShow',true);
        this.str += 1;
      },
      hidden: function(){
        this.$emit('transferShow',false);
      },
      showSetting: function(){
        this.$emit('transferSetting',false);
      },
      xuanze: function(){
        this.$emit('transferXuan',true);
      }
  }
}
</script>


<style lang="scss">
 @import "../../assets/css/yy";
 .szujian{
   @extend %gg;
 }

 
</style>
