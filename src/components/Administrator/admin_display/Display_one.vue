<template>
  <div>
    <div class="admin_dlarea">
      <div class="do_step_bar">
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
      <div class="schedual_table">
        <!-- 课表内容 -->
        <div class="main-table">
          <table>
            <thead>
              <tr>
                <td>时间</td>
                <td>周一</td>
                <td>周二</td>
                <td>周三</td>
                <td>周四</td>
                <td>周五</td>
                <td>周六</td>
                <td>周日</td>
              </tr>
              <br><br>
            </thead>
            <tbody>
              <tr>
                <td class="table-time1">06:30<br>~07:20</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="table-time2">08:25<br>~10:05</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="table-time3">10:20<br>~12:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <br><br>
              <tr>
                <td class="table-time4">14:00<br>~15:40</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="table-time5">15:50<br>~17:30</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="table-time6">18:30<br>~20:10</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /课表内容 -->
      </div>
      <!-- 下一步按钮 -->
      <div class="next" title="下一步">
        <router-link to="/Administrator/Display_two" tag="span"><i><img src="https://upload-images.jianshu.io/upload_images/19325457-b0eba5387a8299b9.png" width="70" height="70"></i></router-link>
      </div>
      <!-- /下一步按钮 -->
      <!-- 上一页按钮 -->
      <div class="shangyiye">
        <i class="iconfont iconshangyiye" style="color: #FFF; font-size:200px;"></i>
      </div>
      <!-- /上一页按钮 -->
      <!-- 下一页按钮 -->
      <div class="xiayiye">
        <i class="iconfont iconfenyexiayiye" style="color: #FFF; font-size:200px;"></i>
      </div>
      <!-- /下一页按钮 -->
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
          msg:'课  表  预  览',
          active:1
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


  .admin_dlarea {
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .do_step_bar {
    @extend %step_bar;
    height: 20%;
    // border: 1px solid red;
  }
  .admin_dl_area {
    position: relative;
    width: 100%;
    height: auto;
    // border: 1px solid red;
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
  .schedual_table {
    position: relative;
    width: 80%;
    height: 65%;
    left: 0;
    right: 0;
    margin: 1em auto;
    // border: 1px solid black;
    // background-color: white;
  }
  .iconxiazai {
    position: absolute;
    font-size: 40px;
    right: 1ex;
    bottom: 1ex;
    color: #87c488;
  }
}

</style>

<style scoped lang="scss">
.line_bar {
  margin: 1em auto;
}
.main-table {
  display: flex;
  color: rgb(81, 69, 69);
  margin: 0 auto;
  margin-top: 0%;
  width: 80%;
  .table-time {
    background-color: #cccccc;
    font-family: 'zzgflh';
    color: white;
  }
  table {
    display: flex;
    flex-direction: column;
    width: 100%;
    tr,td {
      display: inline-flex;
      justify-content: center;
      width: 100%;
    }
    td {
      line-height: 1.3em;
      margin: 5px 5px;
      flex-grow: 1;
      border: 1px solid;
      border-radius: 5px;
    }
    thead td {
      background-color: rgb(239, 193, 115);   
    }
    tbody td {
      font-family: 'fzchsjt';
      background-color: rgb(122, 196, 225);
    }    
  }
}
</style>

<style scoped>
  .next {
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .shangyiye {
    position: absolute;
    left: 0px;
    top: 260px;
    cursor: pointer;
  }
  .xiayiye {
    position: absolute;
    right: 0px;
    top: 260px;
    cursor: pointer;
  }
</style>