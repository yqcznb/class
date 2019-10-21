<template>
<div>
    <div class='guize1 upload'>
      <STEP :stepData='stepData'></STEP>
      <div class="icon-img">
        <i class="iconfont iconiconfontxiazai" title="点击下载模板" @click="downloadTemp"></i>
      </div>

      <div class="next" title="下一步">
        <router-link to="/Administrator/guize2" tag="span"><i class="el-icon-right"></i></router-link>
      </div>
    </div>

</div>
</template>
<script>
import STEP from '@/components/Common/step.vue'
export default {
    name:'guize1',
    components:{STEP},
    data(){
        return{
          // 步骤条参数 index:圈内文字 ， to：路由跳转地址  msg 底部显示文字 active 激活的index
          stepData:{
            list:[{index:1,to:'/Administrator/guize1'},{index:2,to:'/Administrator/guize2'},{index:3,to:'/Administrator/guize3'}],
            msg:'模  板  下  载',
            active:1
          }
        }
    },
    methods:{
      // 下载模板方法
      downloadTemp(){

      }
    }
}
</script>
<style scoped>
  .icon-img{
    margin: 80px auto auto auto;
    width: 300px;
  }
  .iconfont.iconiconfontxiazai{
    font-size: 300px;
    color:#fff;
    cursor: pointer;
  }
  .upload{
    width: 100%;
    height: 80vh;
    box-sizing: border-box;
    padding:50px 0;
    position: relative;
  }
  .next{
    color: #fff;
    font-size: 50px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50px;
    line-height: 48px;
    cursor: pointer;
  }
</style>
