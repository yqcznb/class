<template>
<div>
  <div class="but">
      <div class="xx">备案信息</div> 
    <div class="data">
       <ul>
         <li v-for="aa in list" :key="aa.i">{{aa.id}}</li>
       </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'but',
  data () {
    return {
      realTime:[],
      list:[
        {id:0,i:0},
        {id:1,i:1}
      ]
    }
  },
  mounted () {
  // 页面加载完后显示当前时间
  this.dealWithTime(new Date())
  // 定时刷新时间
  let _this = this
  // 定时器
  this.timer = setInterval( () =>{
    this.dealWithTime(new Date()) // 修改数据date
  }, 1000)
   console.log( this.list)
},
  computed:{

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
     var daa= {id:H + ':' + Min,i:1}
      this.list.splice(0,1,daa)
      var da= {id:M + '月' + D + '日 ' + ' 星期' + W,i:2}
      this.list.splice(1,1,da)
       console.log( this.list)
  }
  }
}
</script>
<style  lang="scss">
.but{
  height: 65px;
  width: 100%;
  background-color: #222;
  opacity: 0.99;
  position:fixed;
  bottom:0;
  left:0;
  z-index: 100;
  color: #fff;
  line-height: 66px;
  div{
    display:inline-block;
  }
}
.xx{
  padding-left: 160px;
}
.data{
  float:right;
  line-height: 66px;
  padding-right: 20px;
  font-size: 10px;
  ul{
    padding: 0;
    margin: 0;
    li:first-child{
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: 30px;
      font-size: 18px;
      margin-top: 5px;
    }
    li:last-child{
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 13px;
      line-height: 25px;
    }
  }
}
</style>
