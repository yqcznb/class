<template>
  <div>
    <div class="dth_step_bar">
      <STEP :stepData='stepData'></STEP>
    </div>
    <div class="admin_dl_area">
      <div class="admin_dl_btn_bar">
        <button></button> <button></button> 
      </div>
      <router-view></router-view>
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
          list:[{index:1,to:'/Administrator/Display_one'},{index:2,to:'/Administrator/Display_two'},{index:3,to:'/Administrator/Display_three'}],
          msg:'课  表  下  载',
          active:3
        }
      }
    },
    methods:{
      
    }
}
</script>
<style lang="scss">
@import "../../assets/css/admin";
  .dth_step_bar {
    @extend %step_bar;
  }
  .admin_dl_area {
    position: absolute;
    width: 100%;
    height: 75%;
    border: 1px solid red;
    .admin_dl_btn_bar {
      border: 1px solid black;
      button {
        margin: 0;
      }
    }
  }
</style>