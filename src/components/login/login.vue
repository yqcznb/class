<template>
    <div id="login">
        <span class="record_info" v-text="record_info"></span>
        <div class="login_box">
            <div class="login_img_box">
                <div id="img_box_up">
                    <transition 
                     enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
                        <div class="up_show" v-show="!login_img_click">
                            <el-tooltip class="item" effect="dark" :content="login_content_ul" placement="left">
                                <img :src="login_img_ul" class="img_choose" @click="change_login_profess(login_img_ul)">
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :content="login_content_ur" placement="right">
                                <img :src="login_img_ur" class="img_choose" @click="change_login_profess(login_img_ur)">
                            </el-tooltip>
                        </div>
                    </transition>
                    <div class="up_hide" v-show="login_img_click">
                        <img :src="login_img_ul" class="img_hide img_choose" >
                        <img :src="login_img_ur" class="img_hide img_choose" >
                    </div>
                </div>
                <div id="img_box_down">
                    <transition 
                     enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <el-tooltip class="item" effect="dark" :content="login_content_down" placement="right" hide-after=0 value=true>
                            <img :src="login_img_down" class="img_choose" @click="login_img_click = !login_img_click">
                        </el-tooltip>
                    </transition>
                </div>
            </div>
            <div class="login_input_box">
                <div class="login_input_count">
                    <input readonly onfocus="this.removeAttribute('readonly');" type="text" name="" autocomplete="off" placeholder="用户账号" id="input_count">
                </div>
                <div class="login_input_pass">
                    <input readonly onfocus="this.removeAttribute('readonly');" type="password" name="" autocomplete="off" placeholder="用户密码" id="input_pass"> <button class="input_pass_right" @click="login_page_skip"><span class="iconfont iconenter"></span></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            record_info: '备案信息',
            // 职业选择
            login_img_ul: 'https://upload-images.jianshu.io/upload_images/19325457-cb8e32f88e62ad95.png',
            login_img_ur: 'https://upload-images.jianshu.io/upload_images/19325457-ced61ba4e3cf881c.png',
            login_img_down: 'https://upload-images.jianshu.io/upload_images/19325457-326cefd8fc8139db.png',
            login_content_ul: '我是老师',
            login_content_ur: '我是学生',
            login_content_down: '我是管理员',

            login_img_click: true,
            skip_link: '/gzujian',
        }
    },
    // mounted() {
        
    // },
    // watch: {

    // },
    methods: {
        change_login_profess(url) {
            let login_img_ul = this.login_img_ul;
            let login_img_ur = this.login_img_ur;
            let login_img_down = this.login_img_down;

            let login_content_ul = this.login_content_ul;
            let login_content_ur = this.login_content_ur;
            let login_content_down = this.login_content_down;

            if(url == login_img_ul) {
                // 图片切换
                this.login_img_down = url;
                this.login_img_ul = login_img_ur;
                this.login_img_ur = login_img_down;
                // 职称切换
                this.login_content_down = login_content_ul;
                this.login_content_ul = login_content_ur;
                this.login_content_ur = login_content_down;

                this.skip_link = '/tch_index';
            }
            else if(url == login_img_ur) {
                // 图片切换
                this.login_img_down = url;
                this.login_img_ur = login_img_ul;
                this.login_img_ul = login_img_down;
                // 职称切换
                this.login_content_down = login_content_ur;
                this.login_content_ur = login_content_ul;
                this.login_content_ul = login_content_down;

                this.skip_link = '/stu_index';
            }
            else {}
            this.login_img_click = !this.login_img_click;
        },
        login_page_skip() {
            this.$router.push({
                path: this.skip_link
            })
        }
    }
}
</script>
<style scoped>
    #login {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
    }
    img {
        cursor: pointer;
    }
    .record_info {
        width: 10em;
        line-height: 4ex;
        display: inline-block;
        border-radius: 0 0 3ex 3ex;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
    }
    .login_box {
        width: 45.5ex;
        margin: 0 auto;
    }
    .login_img_box {
        width: 100%;
        height: 37ex;
        margin: 3ex auto 4em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* border: 1px solid red; */
    }
    #img_box_up,#img_box_down {
        width: 100%;
        height: 10em;
        margin: 0 auto;
    }
    .up_show,.up_hide {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .img_choose {
        width: 10em;
    }
    img.img_hide {
        visibility: hidden;
    }
    .login_input_box {
        width: 75%;
        /* height: 10em; */
        margin: 0 auto;
    }
    .login_input_count,.login_input_pass {
        width: 100%;
        height: 5ex;
        border: 2px solid rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }
    #input_count,#input_pass {
        height: 100%;
        border: 0;
        margin: 0;
        text-indent: 1em;
        background-color: rgba(255, 255, 255, 0.7);
    }
    #input_count::-webkit-input-placeholder,#input_pass::-webkit-input-placeholder {
        font-family: '造字工房力黑（非商用）';
        color: rgba(0, 0, 0, 0.8);
        font-size: 3ex;
        text-indent: 9ex;
    }
    #input_count:-ms-input-placeholder,#input_pass:-ms-input-placeholder {
        font-family: '造字工房力黑（非商用）';
        color: rgba(0, 0, 0, 0.8);
        font-size: 3ex;
        text-indent: 9ex;
    }
    #input_count {
        width: 100%;
    }
    #input_pass {
        width: 85%;
    }
    .input_pass_right {
        width: 15%;
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background-color: rgba(109, 107, 107, 0.6);        
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    .iconenter {
        font-size: 5ex;
    }
</style>
