<template>
    <div class="container">
        <tabbar @show-setting="ShowSetting" @show-currenttable="ShowCurrenttable" @show-showtable="ShowShowtable"></tabbar>
        <div class="main">
            <!-- 当前课表内容开始 -->
            <div class="main-title" v-if="show_currenttable">
                <span class="hr-inline"></span>当前课表<span class="hr-inline"></span>
            </div>
            <div class="main-table" v-if="show_currenttable">
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
                        <tr v-for="item in 6" :key="item">
                            <td class="table-time">06:30<br>~07:20</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 当前课表内容结束 -->

            <!-- 设置开始 -->
            <div class="main-title" v-if="show_setting">
                <span class="hr-inline"></span>设置<span class="hr-inline"></span>
            </div>
            <div class="main-setting" v-if="show_setting">
                <div class="main-setting-item">
                    <i class="iconfont iconxiugaimima"></i>
                    <span class="main-setting-item-title">修改密码</span>
                </div>
                <div class="main-setting-item" @click="tch_signout">
                    <i class="iconfont icontuichudenglu"></i>
                    <span class="main-setting-item-title">退出登录</span>
                </div>
            </div>
            <!-- 设置结束 -->

            <!-- 显示课表开始 -->
            <div class="main-title" v-if="show_showtable">
                <span class="hr-inline"></span>课表显示<span class="hr-inline"></span>
            </div>
            <!-- 格式栏 -->
            <div class="table_bar" v-if="show_showtable">
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
            <div class="main-table" v-if="show_showtable">
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
                        <tr v-for="item in 6" :key="item">
                            <td class="table-time">06:30<br>~07:20</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                            <td>JavaScript课程设计</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 显示课表结束 -->
        </div>
    </div>
</template>

<script>
import tabbar from '../Common/tzujian'
export default {
    props: {

    },
    data() {
        return {
            show_currenttable: true, // 当前课表
            show_setting: false,    // 设置
            show_showtable: false,   // 显示课表
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        // 显示设置按钮
        ShowSetting: function(){
            this.show_currenttable = this.show_showtable = false;
            this.show_setting = true;
        },
        // 显示当前课表
        ShowCurrenttable: function(){
            this.show_setting = this.show_showtable = false;
            this.show_currenttable = true;
        },
        // 显示多种格式课表
        ShowShowtable: function(){
            this.show_setting = this.show_currenttable = false;
            this.show_showtable = true;
        },
        tch_signout() {
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
        }
    },
    components: {
        tabbar,
    },
};
</script>

<style scoped lang="scss">
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.main{
    position: absolute;
    // width: 80%;
    height: 80%;
    left: 0;
    right: 0;
    margin-top: 3em;
    margin-right: 9ex;
    margin-left: 6em;
    background: rgba(0,0,0, 0.7);
    box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.71);
    .main-title{
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        // margin-top: 3%;
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
    .main-table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 2%;
        width: 90%;
        .table-time{
            background-color: #cccccc;
            font-family: 'zzgflh';
            color: white;
        }
        table{
            display: flex;
            flex-direction: column;
            width: 100%;
            tr,td{
                display: inline-flex;
                justify-content: center;
                width: 100%;
            }
            td{
                line-height: 2em;
                margin: 5px 5px;
                flex-grow: 1;
            }
            thead td{
                background-color: rgb(239, 193, 115);   
            }
            tbody td{
                font-family: 'fzchsjt';
                background-color: rgb(122, 196, 225);
            }    
        }
    }
    .main-setting{
        display: flex;
            justify-content: center;
        margin-top: 8%;
        .iconfont{
            font-size: 160px;
            color: #fff;
        }
        .main-setting-item{
            display: inline-flex;
            flex-direction: column;
            width: 30%;
            .main-setting-item-title{
                font-size: 30px;
                color: #fff;
            }
        }
    }
}
</style>
