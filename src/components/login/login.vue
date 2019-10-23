<template>
    <div id="login">
        <transition
         leave-active-class="animated rotateOutDownRight">
            <div class="login_default" v-show="login_default">
                <div class="login_timer">
                    <span v-text="login_clock" class="login_clock"></span>
                    <span v-text="login_calendar" class="login_calendar"></span>
                </div>
            </div>
        </transition>
        <transition
         enter-active-class="animated fadeIn" leave-active-class="animated slideOutUp">
            <span v-show="!login_default">
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
                                <el-tooltip class="item" effect="dark" :content="login_content_down" placement="right" :value="!login_default">
                                    <img :src="login_img_down" class="img_choose" @click="login_img_click = !login_img_click">
                                </el-tooltip>
                            </transition>
                        </div>
                    </div>
                    <div class="login_input_box">
                        <div class="login_input_count">
                            <input readonly onfocus="this.removeAttribute('readonly');" type="text" name="" autocomplete="off" placeholder="用户账号" id="input_count" v-model="input_count">
                        </div>
                        <div class="login_input_pass">
                            <input readonly onfocus="this.removeAttribute('readonly');" type="password" name="" autocomplete="off" placeholder="用户密码" id="input_pass" v-model="input_pass"> <button class="input_pass_right" @click="login_page_skip"><span class="iconfont iconenter"></span></button>
                        </div>
                    </div>
                </div>
            </span>
        </transition>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'login',
    data () {
        return {
            login_default: true,
            record_info: '备案信息',
            login_clock: '',
            login_calendar: '',
            // 职业选择
            login_img_ul: 'https://upload-images.jianshu.io/upload_images/19325457-cb8e32f88e62ad95.png',
            login_img_ur: 'https://upload-images.jianshu.io/upload_images/19325457-ced61ba4e3cf881c.png',
            login_img_down: 'https://upload-images.jianshu.io/upload_images/19325457-326cefd8fc8139db.png',
            login_content_ul: '我是老师',
            login_content_ur: '我是学生',
            login_content_down: '我是管理员',
            stateFlag: 'adminLogin',
            login_img_click: true,
            input_count: '15611111111',
            input_pass: '123',
            skip_link: '/Administrator',
        }
    },
    created() {
        if(localStorage.getItem("loginState")) {
            this.$router.push({
                path: localStorage.getItem("indexPage")
            })
        }
    },
    mounted() {
        setInterval(this.login_timer,1000);
        setTimeout(() => {
            this.login_default = !this.login_default;
        },3300);
    },
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

                this.stateFlag = 'tchLogin';

                this.skip_link = '/teacher';
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

                this.stateFlag = 'stuLogin';

                this.skip_link = '/stu_index';
            }
            else {}
            this.login_img_click = !this.login_img_click;
        },
        login_page_skip() {
            if (this.input_count == '' || this.input_pass =='') {
                alert('请输入用户名或密码');
            }
            else{
                axios.get('http://no37.store:8080/AK/denglu1',{
                    params: {
                        yhzh:this.input_count,
                        yhmm:this.input_pass,
                    }
                }).then(response=>{
                    let returnState = response.data.jg;
                    if(returnState == 1){
                        this.$message({
                            type: 'success',
                            message: '登录成功!'
                        });
                        //设置Vuex登录标志为true，默认userLogin为false
                        this.$store.dispatch(this.stateFlag, true);
                        //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                        //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                        localStorage.setItem("Flag", this.stateFlag);
                        localStorage.setItem("loginState",1);
                        localStorage.setItem("indexPage",this.skip_link);
                        this.$router.push({
                            path: this.skip_link
                        })
                    }else if(returnState == 0){
                        alert("账号或密码错误")
                    }
                })      //获取失败
                .catch(error=>{
                    // console.log(error);
                    alert('网络错误，不能访问');
                })
            }
            
        },
        login_timer() {
            let date = new Date();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            if(hour.toString().length == 1 ) {
                hour = "0" + hour;
            }
            if(minute.toString().length == 1 ) {
                minute = "0" + minute;
            }
            this.login_clock = hour + ":" + minute;
            this.login_calendar = month + "月" + day +"日";
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
    .login_default {
        width: 100%;
        height: 100%;
        position: fixed;
        background: transparent;
    }
    .login_timer {
        position: absolute;
        bottom: 2em;
        right: 3em;
        display: flex;
        flex-direction: column;
        color: white;
    }
    .login_clock {
        font-size: 4em;
    }
    .login_calendar {
        margin-top: 0.6ex;
        font-size: 6ex;
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
    /* .el-tooltip__popper {
        font-family: '造字工房力黑（非商用）';
    } */
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
