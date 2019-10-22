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
<style lang="scss" scoped>
.admin_change_pass {
    position: relative;
    width: 100%;
    height: 100%;
    .line_bar, {
        min-width: 330px;
        width: 55%;
        display: flex;
        margin: 2em auto;
        margin-bottom: 7em;
        justify-content: space-between;
        align-items: center;
        hr {
            width: 35%;
            height: 2px;
            background-color: white;
        }
        .settings_title {
            font-size: 2em;
            color: white;
        }
        
    }
    .change_pass_box {
        border: 3px solid white;
        border-radius: 15px;
        width: 11em;
        // min-width: 230px;
        margin: 0 auto;
        padding: 1em 3ex 0;
        .pass_line {
            display: flex;
            justify-content: space-around;
            margin-bottom: 1em;
            .pass_line_btn {
                display: flex;
                justify-content: space-between;
            }
            
        }
    }
}
</style>
