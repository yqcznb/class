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


             <div class="interface_title" v-if="setting">
                <span class="hr-inline"></span>设置<span class="hr-inline"></span>
            </div>
            <div class="interface_setting" v-if="setting">
                <div class="setting_part">
                    <i class="iconfont iconxiugaimima"></i>
                    <span class="setting_name">修改密码</span>
                </div>
                <div class="setting_part" @click="output">
                    <i class="iconfont icontuichudenglu"></i>
                    <span class="setting_name">退出登录</span>
                </div>
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

            setting: false,
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
                this.$store.dispatch("adminLogin", false);
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
                this.$router.push('/');
                
            })
        }
    },
    components: {
        // 注册公共学生组件
        stubar,
    },
};
</script>

<style scoped lang='scss'>
*{margin: 0;padding: 0;list-style: none;}
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.interface{
    position: absolute;
    width: 86%;
    height: 80%;
    left: 7%;
    top: 5%;
    background: rgba(0,0,0, 0.7);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.7);
}
    /* 标题 */
    .interface_title{
        // font-weight: bold;
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
       
    }
        .hr-inline{
            display: inline-block;
            height: 5px;
            width: 15%;
            background-color: rgb(255, 255, 255);
            background-repeat:no-repeat;
            position: relative;
            top: -10px;
            margin: 0 10px;
        }
    /* 格式栏 */
    .table_bar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
        .table_bar button{
            display: inline-block;
            height: 30px;
            width: 50px;
            border-radius: 5px;
            border: 1px rgb(204, 204, 204) solid;
            margin-top: 1%;
        }
     /*课表界面*/
    .interface_table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 1%;
        width: 72%;
    }
        table{
            width: 100%;
        }
            tr,td{
                border: 0;
            }
            thead td{
                background-color: rgb(239, 193, 115);
                height: 40px;
                width: 50px;
            }
            .tab_firstCol{
                background-color: rgb(204, 204, 204);
                color: rgb(255, 255, 255);
                font-size: 14px;
            }
            tbody td{
                background-color: rgb(122, 196, 225);
                font-family: 'fzchsjt';
                font-size: 12px;
            }
        /* 下载按钮 */
        .download{
            position: absolute;
            top: 425px;
            left: 1025px;
            color: rgba(17, 170, 137, 0.733);
        }
        // 设置界面
         .interface_setting{
            display: flex;
            justify-content: center;
            margin-top: 8%;
         }
        
        .setting_part{
            display: inline-flex;
            flex-direction: column;
            width: 30%;
        }
            .setting_part i{
                font-size: 160px;
                color: rgb(255, 255, 255);
            }
            .setting_name{
                font-size: 30px;
                color: rgb(255, 255, 255);
            }
        
</style>
