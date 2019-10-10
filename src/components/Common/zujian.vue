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
          active-text-color="#ffd04b"
         >
          <el-menu-item index="1">
            <i class="iconfont iconshezhi"></i>
            <span slot="title">设置</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="iconfont iconxinxi1"></i>
            <span slot="title">信息</span>
          </el-menu-item>
           <el-submenu index="3">
            <template slot="title">
              <i class="iconfont iconkechengbiao"></i>
              <span>课程表</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>   
          </el-submenu>
          <el-menu-item index="4">
            <i class="iconfont iconzhuye1"></i>
            <span slot="title">主页</span>
          </el-menu-item>
        </el-menu>
  </el-col>
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
   
  }
}
</script>


<style scoped>
 
</style>
