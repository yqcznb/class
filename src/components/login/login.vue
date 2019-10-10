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
                    <input type="text" name="" id="input_count">
                </div>
                <div class="login_input_pass">

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
        border: 1px solid red;
        width: 40.5ex;
        margin: 0 auto;
    }
    .login_img_box {
        width: 100%;
        height: 37ex;
        margin: 3ex auto;
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
        border: 1px solid blue;
    }
    .login_input_count {
        width: 100%;
        height: 2em;
    }
    #input_count {
        width: 100%;
        height: 100%;
        border: 0;
        margin: 0;
    }
</style>
