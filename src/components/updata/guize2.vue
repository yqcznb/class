<template>
<div>
    <div class='guize2 upload'>
      <STEP :stepData='stepData'></STEP>
      <div class="icon-img">
        <div class="img-item">
          <el-upload class="upload-demo"  ref="upload" :action="action" :show-file-list='false' :multiple='true'>
            <div slot="trigger">
              <i class="iconfont iconkechengbiao" @click="fnOne"></i>
              <div class="text">已有课表</div>
            </div>
          </el-upload>
        </div>
        <div class="img-item">
          <el-upload class="upload-demo"  ref="upload" :action="action" :show-file-list='false' :multiple='true'>
            <div slot="trigger">
              <i class="iconfont iconiconfontshangchuan" @click="fnOne"></i>
              <div class="text">课程数据</div>
            </div>
          </el-upload>

        </div>
        <div class="img-item">
          <el-upload class="upload-demo"  ref="upload" :action="action" :show-file-list='false' :multiple='true'>
            <div slot="trigger">
              <i class="iconfont iconjiaoshi" @click="fnOne"></i>
              <div class="text">教室信息</div>
            </div>
          </el-upload>
        </div>
      </div>

      <div class="next" title="下一步">
        <router-link to="/Administrator/guize3" tag="span"><i><img src="https://upload-images.jianshu.io/upload_images/19325457-b0eba5387a8299b9.png" width="70px" height="70px"></i></router-link>
      </div>
    </div>
</div>
</template>
<script>
import STEP from '@/components/Common/step.vue'
export default {
    name:'guize2',
    components:{STEP},
    data(){
        return{
          // 步骤条参数 index:圈内文字 ， to：路由跳转地址  msg 底部显示文字 active 激活的index
          stepData:{
            list:[{index:1,to:'/Administrator/guize1'},{index:2,to:'/Administrator/guize2'},{index:3,to:'/Administrator/guize3'}],
            msg:'上传课程数据&教室信息',
            active:2
          },
          // 上传地址
          action:""
        }
    },
    methods:{
      fnOne(){

      },
      fnTwo(){

      },
      fnThree(){

      }
    }
}
</script>
<style scoped>
.icon-img{
  width: 60%;
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  color: #fff!important;
}
.icon-img .iconfont{
  font-size: 180px;
}
.icon-img .text{
  margin-top:10px;
  font-size: 24px;
}
.upload{
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  padding:50px 0;
  position: relative;
}
.next{
  font-size: 50px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
