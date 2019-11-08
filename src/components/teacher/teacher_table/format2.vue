<template>
  <div class="format_Box1">
    <table class="table" cellspacing="0" cellpadding="0" border="1">
      <tr class="row">
        <td class="col"><span class="col-item"><span class="col-item">课程A</span></span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
      </tr>
      <tr class="row">
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
      </tr>
      <tr class="row">
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
      </tr>
      <tr class="row">
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
      </tr>
      <tr class="row">
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
        <td class="col"><span class="col-item">课程A</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.format_Box1{
  width: 80%;
  display: flex;
  justify-content: center;
  .table{
    margin-top: 2%;
    display: flex;
    border: 2px solid #fff;
    border-radius: 8px;
    width: 60%;
    .row{
      display: inline-flex;
      flex-direction: column;
      // border: 1px solid #fff;
      flex: 1;
      .col{
        display: inline-flex;
        justify-content: space-evenly;
        flex: 1;
        // border: 1px solid #fff;
        padding: 10%;
        // margin: 5%;
        color: #fff;
        line-height: 200%;
        .col-item{
          background: rgb(122,196,225);
          border-radius: 2px; 
          width: 80%;
          line-height: 400%;
          cursor: pointer;
        }
      }
    }
  }
}

</style>