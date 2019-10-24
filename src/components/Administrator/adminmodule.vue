<template>
    <div class="admin_module">
        <div class="line_bar">
            <hr> <span class="module_title">上传专业分方向信息表</span><hr>
        </div>
        <div class="module_download">
            <div class="module_update_pass" @click = "set_up_pass_confirm">
                <span class="iconfont iconxiazaimokuai"></span> <span class="set_up_pass_title">下载模块</span>
            </div>
            <div class="module_upload" @click="set_sign_confirm">
                <span class="iconfont iconshangchuanxinxi"></span> <span class="set_sign_title">上传信息</span>
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
.admin_module{
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 7ex;
    .line_bar,.module_choose {
        min-width: 330px;
        display: flex;
        margin: 2em auto;
        margin-bottom: 10em;
        justify-content: space-between;
        align-items: center;
        .module_title {
            font-size: 2em;
            color: white;
        }
        .module_update_pass,.module_upload {
            display: flex;
            cursor: pointer;
            flex-direction: column;
            align-items: center;
            color: white;
            .iconxiazaimokuai,.iconshangchuanxinxi{
                font-size: 11em;
            }
            .set_up_pass_title,.set_sign_title {
                font-size: 4ex;
            }
        }
    }
    .line_bar {
        width: 55%;
    }
    .module_choose {
        width: 47%;
    }
   
}
</style>
