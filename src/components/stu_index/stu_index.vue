<template>
    <div class="stu_interface">
        <stubar @transferShow='show_stubar' @transferSetting='show_set'></stubar>
        <div class="main" >

            <!-- 标题 -->
            <div class="main-title" v-if="showTitle">
                <span class="hr-inline"></span>课表显示<span class="hr-inline"></span>
            </div>

            <!-- 格式栏 -->
            <div class="table_bar" v-if="show_Bar">
                <button class="bar_one">格式一</button>
                <button class="bar_two">格式二</button>
                <button class="bar_three">格式三</button>
            </div>
            
           <!-- 课表 -->
            <div class="main-table" v-if="classTable">
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
                <i class="iconfont iconxiazai"></i>
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
            // 标题
            showTitle: true,
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        // 收到公共学生组件transferShow事件传值触发  显示格式栏
        show_stubar: function(msg){
            this.show_Bar = this.show_Download = msg;
        },
        // 收到公共学生组件transferSetting事件传值触发  隐藏标题和课表
        show_set: function(msg){
            this.classTable = this.showTitle = msg;
        }
    },
    components: {
        // 注册公共学生组件
        stubar,
    },
};
</script>

<style scoped>
*{margin: 0;padding: 0;list-style: none;}
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.main{
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
    .main-title{
        /* font-family: "Helvetica Neue"; */
        font-weight: bold;
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
            background-color: #fff;
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
            border: 1px #ccc solid;
            margin-top: 1%;
        }
     /*课表  */
    .main-table{
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
</style>
