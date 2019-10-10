<template>
    <div id="stu_interface">
        <el-row>
          <el-col :span="3">时间</el-col>
          <el-col :span="3">周一</el-col>
          <el-col :span="3">周二</el-col>
          <el-col :span="3">周三</el-col>
          <el-col :span="3">周四</el-col>
          <el-col :span="3">周五</el-col>
          <el-col :span="3">周六</el-col>
          <el-col :span="3">周日</el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #stu_interface{
        width: 100%;
        background-color: #ccc;
    }
</style>