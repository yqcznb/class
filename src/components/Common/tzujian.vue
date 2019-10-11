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
  // 页面加载完后显示当前时间
  this.realTime = this.dealWithTime(new Date())
  // 定时刷新时间
  let _this = this
  // 定时器
  this.timer = setInterval(function () {
    _this.realTime = _this.dealWithTime(new Date()) // 修改数据date
  }, 1000)
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
      dealWithTime (data) {
      let formatDateTime
      let Y = data.getFullYear()
      let M = data.getMonth() + 1
      let D = data.getDate()
      let H = data.getHours()
      let Min = data.getMinutes()
      let S = data.getSeconds()
      let W = data.getDay()
      H = H < 10 ? ('0' + H) : H
      Min = Min < 10 ? ('0' + Min) : Min
      S = S < 10 ? ('0' + S) : S
      switch (W) {
        case 0:
          W = '天'
          break
        case 1:
          W = '一'
          break
        case 2:
          W = '二'
          break
        case 3:
          W = '三'
          break
        case 4:
          W = '四'
          break
        case 5:
          W = '五'
          break
        case 6:
          W = '六'
          break
        default:
          break
      }
      formatDateTime =   + H + ':' + Min +' '+ M + '月' + D + '日 ' + ' 星期' + W
      return formatDateTime
  }
  }
}
</script>


<style>
 .tzujian{
   z-index: 120;
  width: 66px;
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
