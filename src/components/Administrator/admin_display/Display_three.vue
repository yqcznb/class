<template>
  <div>
    <div class="dth_step_bar">
      <STEP :stepData='stepData'></STEP>
    </div>
    <div class="admin_dl_area">
      <div class="admin_dl_btn_bar">
        <el-button @click="p_c_show = true" :autofocus = 'autofocus' type="primary" size="small" plain>按专业班级</el-button>
        <el-button @click="p_c_show = false" type="primary" size="small" plain>按教师名称</el-button>
        <el-select v-show="p_c_show" v-model="profess_c_dl" size="small" filterable placeholder="请选择专业班级">
          <el-option
            v-for="item in pcdl_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-show="!p_c_show" v-model="teacher_n_dl" size="small" filterable placeholder="请选择教师名称">
          <el-option
            v-for="item in tndl_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        
      </div>
    </div>
  </div>
</template>
<script>
import STEP from '@/components/Common/step.vue'
export default {
    name:'dth_step_bar',
    components:{STEP},
    data(){
      return{
        // 步骤条参数 index:圈内文字 ， to：路由跳转地址  msg 底部显示文字 active 激活的index
        stepData:{
          list:[{index:1,to:'/Administrator/Display_one'},{index:2,to:'/Administrator/Display_two'},{index:3,to:'/Administrator/Display_three'}],
          msg:'课  表  下  载',
          active:3
        },
        p_c_show: true,
        autofocus: true,
        profess_c_dl: '',
        teacher_n_dl: '',
        pcdl_options: '',
        tndl_options: '',
      }
    },
    methods:{
      
    }
}
</script>
<style lang="scss">
@import "../../../assets/css/admin";
  .dth_step_bar {
    @extend %step_bar;
  }
  .admin_dl_area {
    position: absolute;
    width: 100%;
    height: 75%;
    .admin_dl_btn_bar {
      width: 80%;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      button {
        margin: 0;
      }
    }
  }
</style>