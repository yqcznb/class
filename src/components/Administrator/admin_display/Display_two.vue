<template>
  <div id="app">
    <div class="admin_dlarea">
      <div class="dtwo_step_bar">
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
      <div style="float: left;">
        <div style="width: 50px; height: 260px; border: solid 3px white; border-radius: 10px; float: left; position: relative; top: 30px; left: 50px; padding: 10px 0px;">
          <el-tooltip effect="dark" content="选择" placement="right">
            <div class="xuanze" @click="xuanze">
              <i id="icon_xuanze" class="iconfont iconxuanze" style="color: #FFF; font-size: 30px;"></i>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="交换" placement="right">
            <div class="jiaohuan" @click="jiaohuan">
              <i id="icon_jiaohuan" class="iconfont iconjiaohuan2" style="color: #AAA; font-size: 30px;"></i>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="移动" placement="right">
            <div class="yidong" @click="yidong">
              <i id="icon_yidong" class="iconfont iconyidong" style="color: #AAA; font-size: 30px;"></i>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="删除" placement="right">
            <div class="shanchu" @click="shanchu">
              <i id="icon_shanchu" class="iconfont icondelete" style="color: #9a0000; font-size: 30px;"></i>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="撤销" placement="right">
            <div class="chexiao" @click="chexiao">
              <i id="icon_chexiao" class="iconfont iconchexiao" style="color: #AAA; font-size: 30px;"></i>
            </div>
          </el-tooltip>

        </div>
        <div style="width: 3px; height: 450px; background: white; float: left; position: relative; left: 100px;"></div>
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
                <td id="td1" ondrop="drop(event)" ondragover="allowDrop(event)"><span id="span1" draggable="true" ondragstart="drag(event)">课程A</span><div style="position: relative; left:17%; top:50%; cursor: pointer;" @click="vm.showDialog=true"><i class="iconfont iconbi" style="color: #FFF; font-size: 20px;"></i></div></td>
                <td id="td2" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                <td id="td3" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                <td id="td4" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                <td id="td5" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                <td id="td6" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                <td id="td7" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
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
        <router-link to="/Administrator/Display_three" tag="span"><i><img src="https://upload-images.jianshu.io/upload_images/19325457-b0eba5387a8299b9.png" width="70" height="70"></i></router-link>
      </div>
      <!-- /下一步按钮 -->
      <!-- 上一页按钮 -->
      <div class="shangyiye">
        <i class="iconfont iconshangyiye" style="color: #FFF; font-size:160px;"></i>
      </div>
      <!-- /上一页按钮 -->
      <!-- 下一页按钮 -->
      <div class="xiayiye">
        <i class="iconfont iconfenyexiayiye" style="color: #FFF; font-size:160px;"></i>
      </div>
      <!-- /下一页按钮 -->
      <!-- 修改内容界面 -->
      <users
        @closeDialog="close"
        v-if="vm.showDialog"
      ></users>
      <!-- /修改内容界面 -->
    </div>
  </div>
</template>
<script>
import User from './User'
import STEP from '@/components/Common/step.vue'
export default {
    name:'app',
    components: {
      STEP,
      "users": User
    },
    data(){
      return{
        // 步骤条参数 index:圈内文字 ， to：路由跳转地址  msg 底部显示文字 active 激活的index
        stepData:{
          list:[{index:1,to:'/Administrator/Display_one'},{index:2,to:'/Administrator/Display_two'},{index:3,to:'/Administrator/Display_three'}],
          msg:'课  表  调  整',
          active:2
        },
        p_c_show: true,
        autofocus: true,
        profess_c_dl: '',
        teacher_n_dl: '',
        pcdl_options: '',
        tndl_options: '',
        vm: {
          showDialog: false,
        }
      }
    },
    methods:{
      close () {
        this.vm.showDialog = false;
      },
      xuanze () {
        var icon_xuanze = document.getElementById('icon_xuanze');
        var icon_jiaohuan = document.getElementById('icon_jiaohuan');
        var icon_yidong = document.getElementById('icon_yidong');
        var icon_shanchu = document.getElementById('icon_shanchu');
        var icon_chexiao = document.getElementById('icon_chexiao');
        icon_xuanze.style.color = "#FFF";
        icon_jiaohuan.style.color = "#AAA";
        icon_yidong.style.color = "#AAA";
        icon_shanchu.style.color = "#9a0000";
        icon_chexiao.style.color = "#AAA";
      },
      jiaohuan () {
        var icon_xuanze = document.getElementById('icon_xuanze');
        var icon_jiaohuan = document.getElementById('icon_jiaohuan');
        var icon_yidong = document.getElementById('icon_yidong');
        var icon_shanchu = document.getElementById('icon_shanchu');
        var icon_chexiao = document.getElementById('icon_chexiao');
        icon_xuanze.style.color = "#AAA";
        icon_jiaohuan.style.color = "#FFF";
        icon_yidong.style.color = "#AAA";
        icon_shanchu.style.color = "#9a0000";
        icon_chexiao.style.color = "#AAA";
      },
      yidong () {
        var icon_xuanze = document.getElementById('icon_xuanze');
        var icon_jiaohuan = document.getElementById('icon_jiaohuan');
        var icon_yidong = document.getElementById('icon_yidong');
        var icon_shanchu = document.getElementById('icon_shanchu');
        var icon_chexiao = document.getElementById('icon_chexiao');
        icon_xuanze.style.color = "#AAA";
        icon_jiaohuan.style.color = "#AAA";
        icon_yidong.style.color = "#FFF";
        icon_shanchu.style.color = "#9a0000";
        icon_chexiao.style.color = "#AAA";

      },
      shanchu () {
        var icon_xuanze = document.getElementById('icon_xuanze');
        var icon_jiaohuan = document.getElementById('icon_jiaohuan');
        var icon_yidong = document.getElementById('icon_yidong');
        var icon_shanchu = document.getElementById('icon_shanchu');
        var icon_chexiao = document.getElementById('icon_chexiao');
        icon_xuanze.style.color = "#AAA";
        icon_jiaohuan.style.color = "#AAA";
        icon_yidong.style.color = "#AAA";
        icon_shanchu.style.color = "red";
        icon_chexiao.style.color = "#AAA";
      },
      chexiao () {
        var icon_xuanze = document.getElementById('icon_xuanze');
        var icon_jiaohuan = document.getElementById('icon_jiaohuan');
        var icon_yidong = document.getElementById('icon_yidong');
        var icon_shanchu = document.getElementById('icon_shanchu');
        var icon_chexiao = document.getElementById('icon_chexiao');
        icon_xuanze.style.color = "#AAA";
        icon_jiaohuan.style.color = "#AAA";
        icon_yidong.style.color = "#AAA";
        icon_shanchu.style.color = "#9a0000";
        icon_chexiao.style.color = "#FFF";
      },
      allowDrop (ev) {
	      ev.preventDefault();
      },
      drag (ev) {
	      ev.dataTransfer.setData("Text",ev.target.id);
      },
      drop (ev) {
	      ev.preventDefault();
	      var data=ev.dataTransfer.getData("Text");
	      ev.target.appendChild(document.getElementById(data));
      }
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
  .dtwo_step_bar {
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
  margin-right: 2%;
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
    left: 170px;
    top: 260px;
    cursor: pointer;
  }
  .xiayiye {
    position: absolute;
    right: 0px;
    top: 260px;
    cursor: pointer;
  }
  .xuanze {
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    outline: none;
  }
  .xuanze:hover {
    background: #ccc;
  }
  .jiaohuan {
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    outline: none;
  }
  .jiaohuan:hover {
    background: #ccc;
  }
  .yidong {
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    outline: none;
  }
  .yidong:hover {
    background: #ccc;
  }
  .shanchu {
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    outline: none;
  }
  .shanchu:hover {
    background: #ccc;
  }
  .chexiao {
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    outline: none;
  }
  .chexiao:hover {
    background: #ccc;
  }
</style>