<template>
    <div class="main">
        <!-- 当前课表内容开始 -->
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

</style>
