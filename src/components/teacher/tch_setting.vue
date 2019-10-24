<template>
    <div class="main">
        <!-- 设置开始 -->
            <div class="main-title">
                <span class="hr-inline"></span>设置<span class="hr-inline"></span>
            </div>
            <div class="main-setting">
                <div class="main-setting-item" @click="changePass">
                    <i class="iconfont iconxiugaimima"></i>
                    <span class="main-setting-item-title">修改密码</span>
                </div>
                <div class="main-setting-item" @click="tch_signout">
                    <i class="iconfont icontuichudenglu"></i>
                    <span class="main-setting-item-title">退出登录</span>
                </div>
            </div>
            <!-- 设置结束 -->
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
        },
        changePass(){
            this.$router.push('/teacher/tch_change_pass')
        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
