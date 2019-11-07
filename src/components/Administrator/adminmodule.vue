<template>
    <div class="admin_settings">
        <div class="line_bar">
            <hr> <span class="settings_title">上传专业分方向信息表</span> <hr>
        </div>
        <div class="settings_choose">
            <div class="settings_download_pass" @click = "set_up_pass_confirm">
                <span class="iconfont iconiconfontxiazai"></span> <span class="set_up_pass_title">下载模块</span>
            </div>
            <div class="settings_upload" @click="set_sign_confirm">
                <span class="iconfont iconiconfontshangchuan"></span> <span class="set_sign_title">上传信息</span>
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
        
        },
        
}
</script>
<style lang="scss" scoped>
.admin_settings{
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 7ex;
    .line_bar,.settings_choose {
        min-width: 200px;
        display: flex;
        margin: 2em auto;
        margin-bottom: 10em;
        justify-content: space-between;
        align-items: center;
        hr{
            border:none;
            background-color: rgba(0,0,0,0);
        }
        .settings_title {
            font-size: 3em;
            color: white;
            letter-spacing: 5px;
        }
        .settings_download_pass,.settings_upload {
            display: flex;
            cursor: pointer;
            flex-direction: column;
            align-items: center;
            color: white;
            .iconiconfontshangchuan,.iconiconfontxiazai {
                font-size: 20em;
            }
            .set_up_pass_title,.set_sign_title {
                font-size: 4ex;
                color:white;
            }
        }
    }
    .line_bar {
        width: 55%;
    }
    .settings_choose {
        width: 47%;
    }
   
}
</style>
