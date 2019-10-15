<template>
    <div class="stu_interface">
        <stubar></stubar>
        <div class="main">
            <div class="main-title">
                <span class="hr-inline"></span>当前课表<span class="hr-inline"></span>
            </div>
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
                    </thead>
                    <tbody>
                        <tr v-for="item in 6">
                            <td>06:30<br>~<br>07:20</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import stubar from '../Common/szujian'
export default {
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
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
    .main-title{
        font-family: "Helvetica Neue";
        font-weight: bold;
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        margin-top: 2%;
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
    
    .main-table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 2%;
        width: 60%;
    }
        table{
            width: 100%;
        }
            tr,td{
                border: 0;
            }
            thead td{
                background-color: rgb(239, 193, 115);
                height: 50px;
            }
            tbody td{
                background-color: rgb(122, 196, 225);
            } 
</style>
