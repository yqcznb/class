<template>
  <div id="users">
    <div class="border">
      <div @click="close" class="closeImg">
        <i class="iconfont iconguanbi" style="color: #FFF; font-size: 90px;"></i>
      </div>
      <div class="main-table">
        <table>
          <thead>
            <tr>
              <td>序号</td>
              <td>课程名</td>
              <td>课程编号</td>
              <td>任课教师</td>
              <td>课程性质</td>
              <td>授课时间</td>
              <td>教师类型</td>
              <td>授课教师</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>①</td>
              <td>课程A</td>
              <td>KCA</td>
              <td>
                <el-select v-model="value" placeholder="请选择" style="width:110px; height:10%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-select v-model="value" placeholder="请选择" style="width:110px; height:10%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-select v-model="value" placeholder="请选择" style="width:110px; height:10%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-select v-model="value" placeholder="请选择" style="width:110px; height:10%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-select v-model="value" placeholder="请选择" style="width:110px; height:10%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'users',
  data () {
    return {  }
  },
  methods: {
    // closeDialog(){
    //   this.$emit('closeDialog',false)
    // },
    // close1(){
    //   this.$emit('closeDialog',false)
    // },
    close () {
      this.$confirm('修改内容尚未提交，是否修改', '', {
        confirmButtonText: '立即提交',
        cancelButtonText: '放弃修改',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功',
          options: [
            this.$emit('closeDialog',false)
          ]
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '放弃修改'
        });          
        options: [
          this.$emit('closeDialog',false)
        ]
      });
    }
  }
}
</script>

<style scoped>
  #users {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
  }
  .message{
    text-align: center;
    position: absolute;
    top: 50%;
  }
  .closeImg{
    /* width: 20px; */
    /* height: 20px; */
    float: right;
    margin-right: 30px;
    margin-top: 5px;
    cursor: pointer;
    /* background-image: url(../assets/close.png); */
    background-size: cover;
    background-repeat: no-repeat;
  }
  .border{
    text-align: center;
    /* background-color: ; */
    border-radius: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>

<style scoped lang="scss">
.line_bar {
  margin: 1em auto;
}
.main-table {
  display: flex;
  color: rgb(81, 69, 69);
  margin: 0 auto;
  margin-top: 7%;
  width: 80%;
  font-size: 22px;
  .table-time {
    background-color: #cccccc;
    font-family: 'zzgflh';
    color: white;
  }
  table {
    display: flex;
    flex-direction: column;
    width: 100%;
    tr,td {
      display: inline-flex;
      justify-content: center;
      width: 100%;
    }
    td {
      line-height: 2em;
      margin: 5px 5px;
      flex-grow: 1;
      border: 1px solid;
      border-radius: 5px;
    }
    thead td {
      background-color: rgb(239, 193, 115);   
    }
    tbody td {
      font-family: 'fzchsjt';
      background-color: rgb(122, 196, 225);
    }    
  }
}
</style>