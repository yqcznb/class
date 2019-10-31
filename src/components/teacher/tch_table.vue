<template>
    <div class="main">
        <div class="line_bar">
            <hr> <span class="settings_title">课表显示</span> <hr>
        </div>
        <!-- 格式栏 -->
        <div class="table_bar">
            <el-tooltip class="item" effect="dark" content="按时间排列" placement="right" @click.native="changePage('/teacher/tch_table/format1')">
                <button class="bar_one">格式一</button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="按教师排列" placement="right" @click.native="changePage('/teacher/tch_table/format2')">
                <button class="bar_two">格式二</button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="按教室排列" placement="right" @click.native="changePage('/teacher/tch_table/format3')">
                <button class="bar_three">格式三</button>
            </el-tooltip>
        </div>
        <div class="format">
            <router-view></router-view>
        </div>
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
        changePage(url) {
            this.$router.push({
                path: url
            })
        },        
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.format{
    display: flex;
    justify-content: center;
}
/* 格式栏 */
.table_bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    left: 30%;
    width: 40%;
}
    .table_bar button{
        font-family: 'fzchsjt';
        font-size: 1em;
        display: inline-flex;
        justify-content: center;
        line-height: 35px;
        height: 35px;
        border-radius: 5px;
        border: 1px rgb(204, 204, 204) solid;
        // margin-top: 1%;
        background-color: rgba(122, 196, 225, 0.91);
        color: white;
    }
</style>
