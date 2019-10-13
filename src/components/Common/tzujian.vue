<template>
<div>
  <div class="tzujian">
        <el-menu
          default-active="4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#222"
          text-color="#fff"
         >
          <el-menu-item index="1" style='padding-left:18px!important;'>
            <el-tooltip class="item" effect="dark" content="设置" placement="right" >
             <i class="iconfont iconshezhi"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="2" style='padding-left:18px!important;'>
             <el-tooltip class="item" effect="dark" content="信息" placement="right">
                <i class="iconfont iconxinxi1"></i>
            </el-tooltip>
          </el-menu-item>
            <el-menu-item index="3" style='padding-left:18px!important;'>
              <el-tooltip class="item" effect="dark" content="课程表" placement="right">
                <i class="iconfont iconkechengbiao"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="4" style='padding-left:18px!important;'>
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
  }
}
</script>


<style>
 .tzujian{
   z-index: 120;
  width: 62px;
  position:fixed;
  bottom:0;
  left:0;
  background-color: #222;
  opacity:0.99
 }
 .el-menu {
    border-right: solid 1px #222;
    }
 .el-submenu .el-menu-item {
    height: 60px;
    line-height: 60px;
    padding: 0;
    min-width: 50px;
    padding-left: 0px;
 }
  .el-menu-item {
    height: 70px;
    line-height: 70px;
  }
 .el-menu-item.is-active{
   
    color:#fff;
    padding-left: 0px;
 }
 .iconfont{
   font-size: 25px;
 }

 
</style>
