<template>
    <div class="stu_interface">
        <stubar @transferShow='show_stubar' @transferSetting='show_set' @transferXuan='xuanze'></stubar>
        <div class="interface" >

            <!-- 标题 -->
            <div class="interface_title" v-if="classTable">
                <span class="hr-inline"></span>课表显示<span class="hr-inline"></span>
            </div>

            <!-- 格式栏 -->
            <div class="table_bar" v-if="show_Bar">
                <el-tooltip class="item" effect="dark" content="按时间排列" placement="right">
                    <button class="bar_one">格式一</button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="按教师排列" placement="right">
                    <button class="bar_two">格式二</button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="按教室排列" placement="right">
                    <button class="bar_three">格式三</button>
                </el-tooltip>
            </div>
            
           <!-- 课表 -->
            <div class="interface_table" v-if="classTable">
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
                    </thead>
                    <tbody>
                        <tr v-for="item in 6">
                            <td class="tab_firstCol">06:30<br>~<br>07:20</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                            <td>计算机组成原理</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 下载 -->
            <div class="download" v-if="show_Download">
                <el-tooltip class="item" effect="dark" content="点击下载课表" placement="right-start">
                    <i class="iconfont iconxiazai"></i>
                </el-tooltip>
            </div>

            <!-- 设置 -->
            <div class="admin_settings" v-if="setting">
                <div class="line_bar">
                    <hr> <span class="settings_title">设置</span> <hr>
                </div>
                <div class="settings_choose">
                    <div class="settings_update_pass" @click = "change">
                        <span class="iconfont iconxiugaimima"></span> <span class="set_up_pass_title">修改密码</span>
                    </div>
                    <div class="settings_signout" @click="output">
                        <span class="iconfont icontuichudenglu"></span> <span class="set_sign_title">退出登录</span>
                    </div>
                </div>
            </div>

            <!-- 修改密码 -->
            <div class="admin_change_pass" v-if="changePass">
                <div class="interface_title">
                    <span class="hr-inline"></span>修改密码<span class="hr-inline"></span>
                </div>
                <div class="change_pass_box">
                    <span class="pass_line before_change_pass">
                        <el-input placeholder="请输入原始密码" v-model="before_change_pass" show-password clearable></el-input>
                    </span>
                    <span class="pass_line after_change_pass">
                        <el-input placeholder="请输入新密码" v-model="after_change_pass" show-password clearable></el-input>
                    </span>
                    <span class="pass_line confirm_change_pass">
                        <el-input placeholder="确认密码" v-model="confirm_change_pass" show-password clearable></el-input>
                    </span>
                    <span class="pass_line pass_line_btn">
                        <el-button type="info" @click="cancel_change_pass">取消</el-button>
                        <el-button type="success">确认</el-button>
                    </span>
                </div>
                <div></div>
            </div>

        </div>
    </div>
</template>

<script>
// 引入公共学生组件
import stubar from '../Common/szujian'
export default {
    data() {
        return {
            // 格式栏
            show_Bar: false,
            // 下载按钮
            show_Download: false,
            // 课表
            classTable: true,
            // 设置
            setting: false,
            // 修改密码
            changePass: false,
            // 原始密码
            before_change_pass: '',
            // 新密码
            after_change_pass: '',
            // 确认密码
            confirm_change_pass: '',
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        // 点击公共学生组件显示按钮触发
        show_stubar: function(msg){
            this.setting = false;
            // 显示格式栏 下载按钮
            this.show_Bar = this.show_Download = msg;
            // 保证课表的显示
            this.classTable = msg;
        },
        // 点击公共学生组件设置按钮触发
        show_set: function(msg){
            // 隐藏课表 格式栏 下载按钮
            this.classTable = this.show_Bar = this.show_Download = msg;
            this.setting = true;
        },
        // 点击公共学生组件选择按钮触发
        xuanze: function(msg){
            // 保证课表显示
            this.classTable = msg;
            // 隐藏格式栏 下载按钮
            this.show_Bar = this.show_Download = false;
            // 保证设置界面隐藏
            this.setting = false;
        },
        // 退出登录
        output: function(){
            this.$confirm('即将退出登录，是否确认退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                localStorage.removeItem("Flag");
                localStorage.removeItem("loginState");
                localStorage.removeItem("indexPage");
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
                this.$router.push('/');
                
            })
        },
        // 修改密码
        change: function(){
            this.setting = false;
            this.changePass = true;
        },
        // 取消修改
        cancel_change_pass: function() {
            // 隐藏修改密码界面
            this.changePass = false;
            // 显示设置界面
            this.setting = true;
        }

    },
    components: {
        // 注册公共学生组件
        stubar,
    },
};
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.stu_interface {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;

    .interface {
        position: absolute;
        // width: 80%;
        height: 80%;
        left: 0;
        right: 0;
        margin-top: 3em;
        margin-right: 9ex;
        margin-left: 6em;
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.71);
    
        /* 标题 */
        .interface_title {
            font-size: 2em;
            color: rgb(255, 255, 255);
            font-style: inherit;
            letter-spacing: 6.8px;
            line-height: 43px;
            text-decoration: none;
            margin-top: 2em;

            .hr-inline {
                display: inline-block;
                height: 3px;
                width: 15%;
                background-color: rgb(255, 255, 255);
                background-repeat: no-repeat;
                position: relative;
                top: -10px;
                margin: 0 10px;
            }
        }
    }
}
/* 格式栏 */
.table_bar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  font-family: 'fzchsjt';

  button {
    display: inline-block;
    height: 40px;
    width: 80px;
    border-radius: 5px;
    border: 1px rgb(204, 204, 204) solid;
    margin-top: 1.5%;
  }
}
/*课表界面*/
.interface_table {
  display: flex;
  color: rgb(81, 69, 69);
  margin: 0 auto;
  margin-top: 2%;
  width: 72%;

  table {
    width: 100%;
    thead{
    td {
    background-color: rgb(239, 193, 115);
    height: 50px;
    width: 70px;
    border-radius: 8px;
    }
    }
  }
}

tr,td {
  border: 0;
}
.tab_firstCol {
  background-color: rgb(204, 204, 204);
  color: rgb(255, 255, 255);
  font-size: 14px;
}
tbody {
  td {
    background-color: rgb(122, 196, 225);
    font-family: 'fzchsjt';
    font-size: 12px;
    border-radius: 8px;
  }
}
/* 下载按钮 */
.download {
  position: absolute;
  top: 536px;
  left: 1450px;
  color: rgba(17, 170, 137, 0.733);

  .iconfont {
    &.iconxiazai {
        font-size: 150px;
    }
  }
}
/* 设置界面 */
.admin_settings{
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 7ex;
    .line_bar,.settings_choose {
        min-width: 330px;
        display: flex;
        margin: 2em auto;
        margin-bottom: 10em;
        justify-content: space-between;
        align-items: center;
        hr {
            width: 35%;
            height: 2px;
            background-color: rgb(255, 255, 255);
        }
        .settings_title {
            font-size: 2em;
            color: rgb(255, 255, 255);
        }
        .settings_update_pass,.settings_signout {
            display: flex;
            cursor: pointer;
            flex-direction: column;
            align-items: center;
            color: rgb(255, 255, 255);
            .iconxiugaimima,.icontuichudenglu {
                font-size: 11em;
            }
            .set_up_pass_title,.set_sign_title {
                font-size: 4ex;
            }
        }
    }
    .line_bar {
        width: 55%;
    }
    .settings_choose {
        width: 47%;
    }
   
}
/* 修改密码 */
.admin_change_pass {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .change_pass_box {
    border: 3px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 13em;
    margin: 0 auto;
    padding: 1em 3ex 0;
    
    .pass_line {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
    
    .pass_line_btn {
        display: flex;
        justify-content: space-between;
    }
    }
  }
}
</style>
