<template>
  <div class="zujian">
       <el-col :span="12"> 
        <el-menu
          default-active="4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
         >
          <el-menu-item index="1">
            <el-tooltip class="item" effect="dark" content="设置" placement="right">
             <i class="iconfont iconshezhi"></i>
            </el-tooltip>
          </el-menu-item>
          <el-menu-item index="2">
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
          <el-menu-item index="4">
            <el-tooltip class="item" effect="dark" content="主页" placement="right">
               <i class="iconfont iconzhuye1"></i>
            </el-tooltip>
          </el-menu-item>
        </el-menu>
  </el-col>
   <el-footer>Footer</el-footer>
  </div>
</template>

<script>
export default {
  name: 'zujain',
  data () {
    return {
     
    }
  },
  computed:{
    
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
 .zujian{
  width: 120px;
  position:fixed;
  bottom:0;
  left:0;
 }
 .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0;
    min-width: 50px;
    padding-left: 0px;
 }
 .el-menu-item.is-active{
    background-color:lightcyan;
    color:#fff;
    padding-left: 0px;
 }
 .element.style{
   padding-left: 0px;
 }
</style>
