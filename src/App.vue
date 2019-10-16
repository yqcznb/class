<template>
  <div id="app">
    <img :src="backimg_src" alt="" class="login_backimg" ref="login_backimg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // 背景图片自适应
      backimg_src: 'https://images.weserv.nl/?url=https://c-ssl.duitang.com/uploads/item/201910/10/2019101092532_kinVR.png',
      wind_width: window.innerWidth,
      wind_heigt: window.innerHeight,
      wind_size: window.innerWidth+window.innerHeight,
      backimg_width: '',
      backimg_height: '',
    }
  },
  created() {
      let img = new Image();
      let _this = this;
      img.src = _this.backimg_src;
      if(img.complete){
        _this.backimg_width = img.width;
        _this.backimg_height = img.height;
      }
      else{
        img.onload = function(){
          _this.backimg_width = img.width;
          _this.backimg_height = img.height;
          img.onload=null;//避免重复加载
        }
      }
  },
  mounted() {
    // 背景图片自适应
    this.backimg_load();
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
    setTimeout(()=>{
      if((this.backimg_width / this.backimg_height) > (this.wind_width / this.wind_heigt)) {
        this.$refs.login_backimg.style.height = '100%';
      }
      else if((this.backimg_width / this.backimg_height) < (this.wind_width / this.wind_heigt)) {
        this.$refs.login_backimg.style.width = '100%';
      }
    },500);
    
    
  },
  watch: {
    // 背景图片自适应
    'wind_size':function(val) {
      this.wind_size = val;
      let backimg_dom = this.$refs.login_backimg;
      backimg_dom.style.width = 'auto';
      backimg_dom.style.height = 'auto';
      if((this.backimg_width / this.backimg_height) > (this.wind_width / this.wind_heigt)) {
        backimg_dom.style.height = '100%';
      }
      else if((this.backimg_width / this.backimg_height) < (this.wind_width / this.wind_heigt)) {
        backimg_dom.style.width = '100%';
      }
    },
  },
  methods: {
    backimg_load() {
      let backimg_dom = this.$refs.login_backimg;

      if((this.backimg_width / this.backimg_height) < (this.wind_width / this.wind_heigt)) {
        backimg_dom.style.width = '100%';
      }
      else {
        backimg_dom.style.height = '100%';
      }
    },
    
  }
}
</script>

<style>
body{
  overflow: hidden;
  padding: 0;
  margin: 0;
}
#app {
  font-family: '造字工房力黑（非商用）';
  text-align: center;
}
.login_backimg {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
}
</style>
