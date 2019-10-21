<template lang="html">
  <div id="step">
    <div class="item-body">
      <template  v-for="e in stepData.list">
        <div class="line"></div>
        <div class="items">
          <router-link :to="e.to" tag="div" :class="e.index == stepData.active?'inside active':'inside'">
              {{e.index}}
          </router-link>
        </div>
        <div class="line"></div>
      </template>
    </div>
    <div class="msg">
      {{stepData.msg}}
    </div>
  </div>
</template>

<script>
export default {
  props:['stepData'],
  data(){
    return {
      name:'step'

    }
  },

}
</script>

<style lang="css">
#step{
  width: 80%;
  margin:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#step .line{
  height: 3px;
  width: 100%;
  background: #fff;
}
#step .item-body{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
#step .item-body .items{
  width: 30px;
  height: 30px;
  margin:0 10px;
}
#step .item-body .items .inside{
  width: 26px;
  height: 26px;
  border-radius: 30px;
  line-height: 26px;
  font-size: 24px;
  cursor: pointer;
  margin: auto;
  color:#fff;
  text-align: center;
  border:2px solid #fff;
  font-weight: 600;
}
#step .item-body .items .inside.active{
  color:#7ac4e1;
  border-color: #7ac4e1;
}
#step .msg{
  margin: 30px auto;
  width: 180px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  cursor: default;
}
/* 修改上传css */
.el-upload--picture-card:hover, .el-upload:focus{
  color:#fff
}
</style>
