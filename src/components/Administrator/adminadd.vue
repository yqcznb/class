<template>
    <div class="container">
        <div class="main">
        <span class="hr-inline"></span>2<span class="hr-inline"></span>
            <div class="main-title" v-if="showtable">
                <p>授课日设置</p>
            </div>
            <div class="choose-table" v-if="showtable">
                <table>
                    <thead>
                        <tr>
                            <td>授课日</td>
                            <td>选择</td>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>星期一</tr>
                            <tr>星期二</tr>
                            <tr>星期三</tr>
                            <tr>星期四</tr>
                            <tr>星期五</tr>
                            <tr>星期六</tr>
                            <tr>星期日</tr>     
                    </tbody>
                </table>
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
                        <tr>
                            <td class="table-time">
                                06:30<br>~07:20
                                08:25<br>~10:05
                                10:20<br>~12:00
                                14:00<br>~15:40
                                15:50<br>~17:30
                                18:30<br>~20:10
                            </td>
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
        </div>
    </div>
</template>

<script>
import tabbar from '../Common/gzujian'
export default {
    props: {

    },
    data() {
        return {
            showtable:true
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
        line-height: 30px;
        text-decoration: none;
    }
    .choose-table{
        display:flex;
        margin-right:auto;
        color: rgb(81, 69, 69);
    }
    .main-table{
        display: flex;
        margin-left:auto;
        color: rgb(81, 69, 69);
        margin-top: 8%;
        width: 60%;
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
}
</style>
