<template>
    <div class="main">
        <!-- 设置开始 -->
            <div class="line_bar">
                <hr> <span class="settings_title">设置</span> <hr>
            </div>
            <div class="settings_choose">
                <div class="settings_update_pass" @click="changePass">
                    <i class="iconfont iconxiugaimima"></i>
                    <span class="set_up_pass_title">修改密码</span>
                </div>
                <div class="settings_signout" @click="tch_signout">
                    <i class="iconfont icontuichudenglu"></i>
                    <span class="set_sign_title">退出登录</span>
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

<style lang="scss">
@import "../../assets/css/common_scss/settings";;
.main{
    @extend %settings;
}
</style>
