<template>
    <div class="main">
        <!-- 当前课表内容开始 -->
            <div class="line_bar">
                <hr> <span class="settings_title">当前课表</span> <hr>
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
    </div>
</template>

<script>
export default {
    props: {

    },
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
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.line_bar{
    margin: 1em auto;
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
                border: 1px solid;
                border-radius: 5px;
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
</style>
