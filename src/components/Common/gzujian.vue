<template>
<div>
  <div class="gzujian">
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
           <el-submenu index="3">
            <template slot="title">
              <el-tooltip class="item" effect="dark" content="课程表" placement="right">
                <i class="iconfont iconkechengbiao"></i>
            </el-tooltip>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="上传" placement="right">
                  <i class="iconfont iconiconfontshangchuan"></i>
                  </el-tooltip>
              </el-menu-item>
               <el-menu-item index="1-2" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="显示" placement="right">
                  <i class="iconfont iconxianshi"></i>
                  </el-tooltip>
              </el-menu-item>
               <el-menu-item index="1-3" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="模板上传下载" placement="right">
                  <i class="iconfont iconmobanshangchuanxiazai"></i>
                  </el-tooltip>
              </el-menu-item>
               <el-menu-item index="1-4" style='padding-left:0px!important;'>
                  <el-tooltip class="item" effect="dark" content="添加" placement="right">
                  <i class="iconfont icontianjia"></i>
                  </el-tooltip>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
  name: 'gzujian',
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


<style>
 .gzujian{
  z-index: 130;
  width: 66px;
  position:fixed;
  bottom:0;
  left:0;
  background-color: #222;
  opacity:0.99
 }
 .el-menu {
    border-right: solid 0px #222;
    }
 .el-submenu .el-menu-item {
    height: 66px;
    line-height: 66px;
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
