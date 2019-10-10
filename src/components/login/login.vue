<template>
    <div id="login">
        <img src="https://images.weserv.nl/?url=https://c-ssl.duitang.com/uploads/item/201910/10/2019101092532_kinVR.png" alt="" class="login_backimg" ref="login_backimg">
        <div class="login_box">
            <img src="https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/19325457-ced61ba4e3cf881c.png" alt="stu">
            <div class="img_box">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            wind_width: window.innerWidth,
            wind_heigt: window.innerHeight,
            wind_size: window.innerWidth+window.innerHeight,
            backimg_width: '',
            backimg_height: '',

        }
    },
    mounted() {
        let backimg_dom = this.$refs.login_backimg;
        this.backimg_width = backimg_dom.offsetWidth;
        this.backimg_height= backimg_dom.offsetHeight;

        if((this.backimg_width / this.backimg_height) > (this.wind_width / this.wind_heigt)) {
            backimg_dom.style.height = '100%';
        }
        else {
            backimg_dom.style.width = '100%';
        }
        
        window.onresize = () => {
            return(() => {
                window.wind_size = window.innerWidth + window.innerHeight;
                window.wind_width = window.innerWidth;
                window.wind_heigt = window.innerHeight;
                this.wind_size = window.wind_size;
                this.wind_width = window.wind_width;
                this.wind_heigt = window.wind_heigt;
            })()
        };

    },
    watch: {
        'wind_size':function(val) {
            this.wind_size = val;
            let backimg_dom = this.$refs.login_backimg;
            backimg_dom.style.width = 'auto';
            backimg_dom.style.height = 'auto';
            if((this.backimg_width / this.backimg_height) > (this.wind_width / this.wind_heigt)) {
                backimg_dom.style.height = '100%';
            }
            else {
                backimg_dom.style.width = '100%';
            }
        },

    },
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
    .login_backimg {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -1;
    }
</style>
