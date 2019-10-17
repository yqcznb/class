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
          <el-menu-item index="1" style='padding-left:20px!important;margin-top:3em;'>
            <el-tooltip class="item" effect="dark" content="设置" placement="right" >
             <i class="iconfont iconshezhi"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="2" style='padding-left:20px!important;'>
             <el-tooltip class="item" effect="dark" content="xx同学201702505xxx" placement="right">
                <i class="iconfont iconxinxi1"></i>
            </el-tooltip>
          </el-menu-item>
           <el-submenu index="3">
            <template slot="title">
              <el-tooltip class="item" effect="dark" content="课程表" placement="right">
                <i class="iconfont iconkechengbiao"></i>
            </el-tooltip>
            </template>
            <el-menu-item-group>
               <el-menu-item index="1-1" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="显示" placement="right">
                  <i class="iconfont iconxianshi"></i>
                  </el-tooltip>
              </el-menu-item>
               <el-menu-item index="1-2" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="选择" placement="right">
                  <i class="iconfont iconxuanze"></i>
                  </el-tooltip>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" style='padding-left:20px!important;'>
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
      }
  }
}
</script>


<style lang="scss">
 @import "../../assets/css/yy";
 .szujian{
  z-index: 130;
  width: 65px;
  position:fixed;
  bottom:0;
  left:0;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.49) 15%, rgba(0,0,0,0.8) 25%, #000);
  opacity:0.99;
 }

 
</style>
