<template>
    <div class="main">
    <!-- 显示课表开始 -->
            <div class="main-title">
                <span class="hr-inline"></span>课表显示<span class="hr-inline"></span>
            </div>
            <!-- 格式栏 -->
            <div class="table_bar">
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
            <!-- 显示课表结束 -->
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

</style>
