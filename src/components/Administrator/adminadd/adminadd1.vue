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
                <div class="data">
                  <table>
                    <tbody>
                      <tr>
                        <td>星期一</td>
                      </tr>
                      <tr>
                        <td>星期二</td>
                      </tr>
                      <tr>
                        <td>星期三</td>
                      </tr>
                      <tr>
                        <td>星期四</td>
                      </tr>
                      <tr>
                        <td>星期五</td>
                      </tr>
                      <tr>
                        <td>星期六</td>
                      </tr>
                      <tr>
                        <td>星期日</td>
                      </tr>                    
                    </tbody>
                  </table>                      
                </div>
              <div class="left-btn">
                <div class="next" @click="nextMove">
                  <i><img src="https://upload-images.jianshu.io/upload_images/19325457-b0eba5387a8299b9.png" width="70px" height="70px"></i>
                </div>
              </div>
              </div>
            </div>  
          </div>
        </div>
        <div class="line"></div>
        <div class="right">
          <div class="main-table">
                <table>
                    <thead>
                        <tr>
                            <td>时间</td>
                            <td>周一</td>
                            <td>周二</td>
                            <td>周三</td>
                            <td>周四</td>
                            <td>周五</td>
                            <td>周六</td>
                            <td>周日</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in 6" :key="item">
                            <td class="table-time">06:30<br>~07:20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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
<style scoped lang="scss">
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
    height: 60px;
    line-height: 250px;
    cursor: pointer;
  }
  .left-main{
    width: 200px;
    padding: 20px 20px;
    margin-top:15%;
    border:1px solid #fff;
    border-radius: 4px;
    height: 65%;
    display: flex;
    flex-direction: column;
  }
  .left-main2{
    width: 180px;
    padding: 15px 15px;
    margin:auto;
    border:1px solid #fff;
    border-radius: 4px;
    height: 60%;
    display: flex;
    flex-direction: column;
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
.data{
  float: left;
}
.data td{
  font-family: 'fzchsjt';
  background-color: rgb(122, 196, 225);
  line-height: 32px;
  text-align: center;
  cursor: default;
  width: 90px;
  height: 43px;
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
.main-table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 2%;
        width: 90%;
        .table-time{
            background-color: #cccccc;
            font-family: 'zzgflh';
            color: white;
        }
        table{
            display: flex;
            flex-direction: column;
            width: 100%;
            tr,td{
                display: inline-flex;
                justify-content: center;
                width: 100%;
            }
            td{
                line-height: 2em;
                margin: 5px 5px;
                flex-grow: 1;
                border: 1px solid;
                border-radius: 5px;
            }
            thead td{
                background-color: rgb(239, 193, 115);   
            }
            tbody td{
                font-family: 'fzchsjt';
                background-color: rgb(122, 196, 225);
            }    
        }
    }
</style>