<template>
    <div class="admin_change_pass">
        <div class="line_bar">
            <hr> <span class="settings_title">修改密码</span> <hr>
        </div>
        <div class="change_pass_box">
            <span class="pass_line before_change_pass">
                <el-input placeholder="请输入原始密码" v-model="before_change_pass" show-password clearable></el-input>
            </span>
            <span class="pass_line after_change_pass">
                <el-input placeholder="请输入新密码" v-model="after_change_pass" show-password clearable></el-input>
            </span>
            <span class="pass_line confirm_change_pass">
                <el-input placeholder="确认密码" v-model="confirm_change_pass" show-password clearable></el-input>
            </span>
            <span class="pass_line pass_line_btn">
                <el-button type="info" @click="cancel_change_pass">取消</el-button>
                <el-button type="success">确认</el-button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            before_change_pass: '',
            after_change_pass: '',
            confirm_change_pass: '',
        }
    },
    // created() {
        
    // },
    // mounted() {
        
    // },
    // watch: {
        
    // },
    methods: {
        cancel_change_pass() {
            this.$router.push('/Administrator/adminSettings');
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/css/common_scss/settings";
.admin_change_pass {
    @extend %settings;
    .change_pass_box {
        @extend %change_pass_box;
    }
}
</style>
