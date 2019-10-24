<template>
<div>
    <div class='guize3 upload'>
      <STEP :stepData='stepData'></STEP>
      <div class="main">
        <div class="left">
          <div class="left-main">
            <el-input  size="small" :placeholder="placeholder" v-model="searchKey">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="choice">
              <el-select v-model="choiceKey" size="small" placeholder="请选择" @change='choiceChange'>
               <el-option  v-for="item in options" :key="item.id"
                :label="item.value" :value="item.id">
                </el-option>
              </el-select>
              <div class="text">
                <div class="inner">
                  选择
                </div>
              </div>
            </div>
            <div class="list">
              <div class="list-item" v-for="e in listData" :key="e.id"  > 
                <el-popover v-if='e.join != undefined' placement="right" width="40" trigger="click">
                  <div>
                    <div :class="{classNum:true,active:e.join == 0}" @click="e.join = 0">不连</div>
                    <div :class="{classNum:true,active:e.join == 2}" @click="e.join = 2">2节</div>
                    <div :class="{classNum:true,active:e.join == 3}" @click="e.join = 3">3节</div>
                    <div :class="{classNum:true,active:e.join == 4}" @click="e.join = 4">4节</div>
                    <div :class="{classNum:true,active:e.join == 5}" @click="e.join = 5">5节</div>
                    <div :class="{classNum:true,active:e.join == 6}" @click="e.join = 6">6节</div>
                    <div :class="{classNum:true,active:e.join == 7}" @click="e.join = 7">7节</div>
                  </div>
                  <div class="names" slot="reference">
                    {{e.name}}
                      <div :class='{joinClass:true,active:e.join > 0}'>连堂</div>
                  </div>
                </el-popover>
                <div v-else class="names">
                  {{e.name}}
                </div>
                <div class="show" @click='choice(e.id)'>
                  <i class="el-icon-check" v-show='listChoice.indexOf(e.id) > -1'></i>
                </div>
              </div>
            </div>
          </div>
          <div class="left-btn">
            <div class="next" @click="nextMove">
              <i><img src="https://upload-images.jianshu.io/upload_images/19325457-b0eba5387a8299b9.png" width="70px" height="70px"></i>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="right">
          <div class="right-btns">
            <div class="text ">{{btnText}}</div>
            <div class="allowd btn"><i class="iconfont iconyunxu" @click='changeBtn(1)' style="font-size:32px;"></i></div>
            <div class="forbid btn"><i class="iconfont iconmsnui-forbid" @click='changeBtn(2)' style="font-size:40px;"></i></div>
          </div>
          <div class="right-line">
            <div class="right-item" v-for="e,index in tableData.times" :key='index'>{{e}}</div>
          </div>
          <div class="right-line line-d" v-for="e in tableData.lines">
            <div :class="ee.class" v-for="ee,index_ in tableData[e]" :key='index_'>
              <div v-if='ee.text != undefined' class="times">
                <div>{{ee.text[0]}}</div>
                <div>{{ee.text[1]}}</div>
                <div>{{ee.text[2]}}</div>
              </div>
              <div class="click" @click="clickNode(e,index_)">
                <i :class="{'iconfont':true,'iconmsnui-forbid':ee.type == '3','iconyunxu':ee.type == '2'}"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</div>
</template>
<script>
import TABLEDATA from '@/assets/data/guize3Data.js';
import STEP from '@/components/Common/step.vue'
export default {
    name:'guize3',
    components:{STEP},
    porps:['tableData'],
    data(){
        return{
          // 步骤条参数 index:圈内文字 ， to：路由跳转地址  msg 底部显示文字 active 激活的index
          stepData:{
            list:[{index:1,to:'/Administrator/guize1'},{index:2,to:'/Administrator/guize2'},{index:3,to:'/Administrator/guize3'}],
            msg:'规  则  设  置',
            active:3
          },
          // 搜索关键字
          searchKey:'',
          placeholder:'请输入教师名称',
          // 选择教师还是课程
          choiceKey:'1',
          options:[{id:'1',value:'按教师排课'},{id:'2',value:'按课程排课'}],
          // 列表数据
          listData:[],
          listDataMock:{
            listTeacher:[{id:'1',name:'李XX'},{id:'2',name:'王XX'},{id:'3',name:'周XX'}],
            listClass:[{id:'1',name:'C++',join:0},{id:'2',name:'JAVA',join:0},{id:'3',name:'PHP',join:0}]
          },
          liseKey:'listTeacher',
          // 左边所选列表
          listChoice:[],
          tableData:JSON.parse(JSON.stringify(TABLEDATA.tableData)),
          // 排课或者不排课
          btnText:'排课'
        }
    },
    created:function(){
      // 初始化数据
      this.listData = this.listDataMock['listTeacher'];
    },
    methods:{
      // 选择更改切换placeHolder
      choiceChange(){
        // 清空搜索词
        this.searchKey = '';
        this.tableData = JSON.parse(JSON.stringify(TABLEDATA.tableData));
        if(this.choiceKey == '1'){
          this.placeholder = '请输入教师名称';
          // 接受数据，模拟切换数据
          this.listData = this.listDataMock['listTeacher'];
        }else{
          this.placeholder = '请输入课程名称';
          // 模拟切换数据
          this.listData = this.listDataMock['listClass'];
        }
      },
      // 选择或反选
      choice(id){
        let index = this.listChoice.indexOf(id);
        if(index == -1){
          this.listChoice.push(id);
        }else{
          this.listChoice.splice(index,1);
        }
      },
      // 选择时间
      clickNode(key,index){
        if(this.btnText == '排课'){
          if(this.tableData[key][index].type == 3){
            return;
          }
          this.tableData[key][index].type = this.tableData[key][index].type == '1'?'2':'1';
        }else{
          if(this.tableData[key][index].type == 2){
            this.tableData[key][index].type = 3;
            return;
          }
          this.tableData[key][index].type = this.tableData[key][index].type == '1'?'3':'1';
        }
      },
      // 切换排课类型
      changeBtn(type){
        if(type == '1'){
          this.btnText = '排课';
        }else{
          this.btnText = '禁止排课';
        }
      },
      // 跳转下一步
      nextMove(){

      }
    }
}
</script>
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
  .main .left .left-btn{
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
  .main .left .left-main .choice .text .inner{
    width: 50px;
    height: 32px;
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