<template>
  <div>
    <div class="dth_step_bar">
      <STEP :stepData='stepData'></STEP>
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
</style>