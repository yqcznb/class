<template>
    <div class="admin_settings">
        <div class="line_bar">
            <hr> <span class="settings_title">设置</span> <hr>
        </div>
        <div class="settings_choose">
            <div class="settings_update_pass">
                <span class="iconfont iconxiugaimima"></span> <span class="set_up_pass_title">修改密码</span>
            </div>
            <div class="settings_signout">
                <span class="iconfont icontuichudenglu"></span> <span class="set_sign_title">退出登录</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.admin_settings{
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 7ex;
    .line_bar,.settings_choose {
        min-width: 330px;
        display: flex;
        margin: 2em auto;
        margin-bottom: 10em;
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
        .settings_update_pass,.settings_signout {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            .iconxiugaimima,.icontuichudenglu {
                font-size: 11em;
            }
            .set_up_pass_title,.set_sign_title {
                font-size: 3ex;
            }
        }
    }
    .line_bar {
        width: 40%;
    }
    .settings_choose {
        width: 55%;
    }
   
}
</style>
