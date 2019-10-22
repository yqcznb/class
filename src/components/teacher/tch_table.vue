<template>
    <div class="main">
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
        <router-view></router-view>
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
/* 格式栏 */
.table_bar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}
    .table_bar button{
        font-family: 'fzchsjt';
        font-size: 1em;
        display: inline-flex;
        justify-content: center;
        line-height: 35px;
        height: 35px;
        width: 6%;
        border-radius: 5px;
        border: 1px rgb(204, 204, 204) solid;
        margin-top: 1%;
        background-color: rgba(122, 196, 225, 0.91);
        color: white;
    }
</style>
