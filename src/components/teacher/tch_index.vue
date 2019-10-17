<template>
    <div class="container">
        <tabbar :showtable="showtable" :setting="setting"></tabbar>
        <div class="main">
            <!-- 课表内容开始 -->
            <div class="main-title" v-if="showtable">
                <span class="hr-inline"></span>当前课表<span class="hr-inline"></span>
            </div>
            <div class="main-table" v-if="showtable">
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
            <!-- 课表内容结束 -->

            <!-- 设置开始 -->
            <div class="main-title" v-if="setting">
                <span class="hr-inline"></span>设置<span class="hr-inline"></span>
            </div>
            <div class="main-setting" v-if="setting">
                <div class="main-setting-item">
                    <i class="iconfont iconxiugaimima"></i>
                    <span class="main-setting-item-title">修改密码</span>
                </div>
                <div class="main-setting-item">
                    <i class="iconfont icontuichudenglu"></i>
                    <span class="main-setting-item-title">退出登录</span>
                </div>
            </div>
            <!-- 设置结束 -->
            <button @click="change">切换显示</button>
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
            showtable:false,
            setting:true,
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
        change(){
            this.showtable = !this.showtable
            this.setting = !this.setting
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
    width: 86%;
    height: 80%;
    left: 7%;
    top: 5%;
    background: rgba(0,0,0, 0.7);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.7);
    .main-title{
        font-weight: bold;
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        margin-top: 3%;
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
    .main-table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 2%;
        width: 90%;
        .table-time{
            background-color: #cccccc;
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
                background-color: rgb(122, 196, 225);
            }    
        }
    }
    .main-setting{
        display: flex;
            justify-content: center;
        margin-top: 5%;
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
