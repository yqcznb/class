<template>
    <div class="admin_settings">
        <STEP :stepData='stepData'></STEP>
        <div class="main">
        <div class="left">
          <div class="left-main">
            <div class="letf-mian2">
              <div class="text">
                <div class="inner1">授课日</div>
                <div class="inner2">选择</div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import STEP from '@/components/Common/step.vue'
export default {
        name:'settings',
        components:{STEP},
    data () {
        return {
          stepData:{
          list:[{index:1,to:'/Administrator/adminadd/adminadd1'},{index:2,to:'/Administrator/adminadd/adminadd2'},{index:3,to:'/Administrator/adminadd/adminadd3'}],
          msg:'授 课 日 设 置',
          active:1
        }
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
<style lang="scss">
@import "../../../assets/css/admin";
  .do_step_bar {
    @extend %step_bar;
  }
</style>
<style scoped>
  .main{
    display: flex;
    flex:1;
    width: 90%;
    margin: auto;
  }
  .main .left{
    width: 300px;
  }
.left-btn{
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main .left .left-btn .next{
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 48px;
    cursor: pointer;
  }
  .main .left .left-main{
    width: 200px;
    padding: 20px 20px;
    margin:auto;
    border:1px solid #fff;
    border-radius: 4px;
    height: 70%;
    display: flex;
    flex-direction: column;
  }
  .main .left .left-mian .left-main2{
    width: 180px;
    padding: 15px 15px;
    margin:auto;
    border:1px solid #fff;
    border-radius: 4px;
    height: 60%;
    display: flex;
    flex-direction: column;
  }
  .main .left .left-main .el-input__icon{
    cursor: pointer;
  }

  .main .left .left-main .choice{
    display: flex;
    margin-top: 5px;
    border-bottom: 1px solid #fff;
    padding-bottom: 5px;
  }
  .main .left .left-main .choice .el-select{
    width: 130px;
  }
  .main .left .left-main .choice .text{
    flex:1;
    display: flex;
    justify-content:center;
  }
  .inner1{
    width: 90px;
    height: 32px;
    float:left;
    line-height: 32px;
    text-align: center;
    color:#564946;
    background: #efc173;
    cursor: default;
  }
  .inner2{
    width: 90px;
    height: 32px;
    float:right;
    line-height: 32px;
    text-align: center;
    color:#564946;
    background: #efc173;
    cursor: default;
  }

  .main .left .left-main .list{
    flex:1;
    overflow: auto;
  }
  .main .left .left-main .list .list-item{
    display: flex;
    border-bottom: 1px solid #fff;
    height: 50px;
    align-items: center;
    cursor: pointer;
  }
  .main .left .left-main .list .list-item .names{
    width: 100px;
    height: 30px;
    line-height: 30px;
    padding: 5px 15px;
    color: #000000;
    background: #efc173;
    border-radius: 4px;
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .classNum{
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  .classNum:hover{
    color:#7ac4e1;
  }
  .classNum.active{
    color:#7ac4e1;
  }
  .main .left .left-main .list .list-item .names .joinClass{
    position: absolute;
    transform:rotate(-45deg);
    background: #000;
    color: #fff;
    font-size: 12px;
    width: 66px;
    right: -22px;
    height: 30px;
    line-height: 21px;
    bottom: -7px;
  }
  .main .left .left-main .list .list-item .names .joinClass.active{
    color:#7ac4e1;
  }
  .main .left .left-main .list .list-item .show{
    width: 70px;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    color:#7ac4e1;
  }
  .main .line{
    width: 3px;
    height: 100%;
    background: #fff;
    margin:0px 10px;
  }

  .main .right{
    flex: 1;
    padding: 0px 20px;
    position: relative;
  }
  .main .right-btns{
    display: flex;
    position: absolute;
    height: 40px;
    line-height: 40px;
    right: 30px;
    top: -45px;
    color: #fff;
  }
  .main .right-btns .text{
    margin-right: 20px;
  }
  .main .right-btns .allowd{
    margin-right: 20px;
    font-size: 20px;
    color:#a0d5ab;
  }
  .main .right-btns .forbid{
    font-size: 20px;
    color:#d81e06;
  }
  .main .right .right-line{
    display: flex;
    margin-bottom: 5px;
  }
  .main .right .right-line:nth-child(1),
  .main .right .right-line:nth-child(2),
  .main .right .right-line:nth-child(6){
    margin-bottom: 10px;
  }
  .main .right .right-line:nth-child(4){
    margin-bottom: 20px;
  }
  .main .right .right-item{
    width: 10.5%;
    height: 65px;
    line-height: 65px;
    margin:0px 1%;
    color: #000000;
    background: #efc173;
    border-radius: 4px;
    cursor: default;
    font-size: 22px;
  }
  .main .right .line-d .right-item{
    background: #dcdada;
  }
  .main .right .right-item.bule{
    background: #7ac4e1;
  }
  .main .right .right-item .times{
    line-height: 20px;
    color:#fff;
    padding: 2.5px 0px;
    font-size: 18px;
  }
  .main .right .right-item .click{
    height: 100%;
  }
  .main .right .right-item .click .iconfont{
    font-size: 45px;
  }
  .main .right .right-item .click .iconfont.iconmsnui-forbid{
    color:#d81e06;
  }
  .main .right .right-item .click {
    color:#000;
  }
  .iconfont.iconyunxu{
    color:#17ab79
  }
  .upload{
    width: 100%;
    height: 80vh;
    box-sizing: border-box;
    padding:50px 0;
    display: flex;
    flex-direction: column;
  }
</style>
