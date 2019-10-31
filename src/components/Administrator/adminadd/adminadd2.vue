<template>
    <div class="admin_settings">
        <STEP :stepData='stepData'></STEP>
    </div>
</template>
<script>
import STEP from '@/components/Common/step.vue'
export default {
        name:'settings',
        components:{STEP},
    data () {
        return {
          stepData:{
          list:[{index:1,to:'/Administrator/adminadd/adminadd1'},{index:2,to:'/Administrator/adminadd/adminadd2'},{index:3,to:'/Administrator/adminadd/adminadd3'}],
          msg:'课 时 设 置',
          active:2
        }
        }
    },
    // created() {
        
    // },
    // mounted() {
        
    // },
    // watch: {
        
    // },
    methods: {
        
        },
        
}
</script>
<style lang="scss">
@import "../../../assets/css/admin";
  .do_step_bar {
    @extend %step_bar;
  }
</style>
