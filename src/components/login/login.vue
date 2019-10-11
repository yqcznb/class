<template>
    <div id="login">
        <div class="login_box">
            <div class="login_img_box">
                <div id="img_box_up">
                    <img src="https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/19325457-cb8e32f88e62ad95.png" alt="stu" class="img_choose">
                    <img src="https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/19325457-ced61ba4e3cf881c.png" alt="stu" class="img_choose">
                </div>
                <div id="img_box_down">
                    <img src="https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/19325457-326cefd8fc8139db.png" alt="stu" class="img_choose">
                </div>
            </div>
            <div class="login_input_box">
                <div class="login_input_count">
                    <input type="text" name="" autocomplete="off" placeholder="用户账号" id="input_count">
                </div>
                <div class="login_input_pass">
                    <input type="password" name="" autocomplete="off" placeholder="用户密码" id="input_pass"> <span class="iconfont iconenter"></span>
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

        }
    },
    // mounted() {
        
    // },
    // watch: {

    // },
    methods: {

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
        /* border: 1px solid blue; */
        width: 100%;
        margin: 0 auto;
    }
    #img_box_up {
        display: flex;
        justify-content: space-between;
    }
    .img_choose {
        width: 10em;
    }
    .login_input_box {
        width: 75%;
        /* height: 10em; */
        margin: 0 auto;
    }
    .login_input_count,.login_input_pass {
        width: 100%;
        height: 5ex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }
    #input_count,#input_pass {
        height: 100%;
        border: 2px solid rgba(255, 255, 255, 0.2);
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
    #input_count {
        width: 100%;
    }
    #input_pass {
        width: 85%;
    }
    .iconenter {
        background-color: rgba(0, 0, 0, 0.5);
        width: 15%;
        height: 100%;
        border: 2px solid rgba(255, 255, 255, 0.2);
        font-size: 5ex;
    }
</style>
