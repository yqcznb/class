<template>
    <div class="admin_settings">
        <div class="line_bar">
            <hr> <span class="settings_title">设置</span> <hr>
        </div>
        <div class="settings_choose">
            <div class="settings_update_pass" @click = "set_up_pass_confirm">
                <span class="iconfont iconxiugaimima"></span> <span class="set_up_pass_title">修改密码</span>
            </div>
            <div class="settings_signout" @click="set_sign_confirm">
                <span class="iconfont icontuichudenglu"></span> <span class="set_sign_title">退出登录</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
        
        }
    },
    // created() {
        
    // },
    // mounted() {
        
    // },
    // watch: {
        
    // },
    methods: {
        // 设置
        set_up_pass_confirm() {
            this.$router.push('/Administrator/change_pass');
        },
        set_sign_confirm() {
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
        
    }
}
</script>
<style lang="scss">
@import "../../assets/css/common_scss/settings";
.admin_settings{
    @extend %settings;
}
</style>
