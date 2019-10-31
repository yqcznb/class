<template>
  <div class="format_Box">
    <el-table
    :data="tableData"
    style="width: 80%"
    height="400">
    <el-table-column
      fixed
      prop="date"
      label="时间"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="周一"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="周二"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="周三"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="周四"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="周五"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="周六"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="周日"
      width="120">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import TCHDATA from '@/assets/data/tchData'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        tableData: [{
          date: '06:30~07:20',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '08:25~09:10',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '09:20~10:05',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '10:20~11:05',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '11:15~12:00',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '14:00~14:45',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '14:55~15:40',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '15:50~16:35',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        }, {
          date: '16:45~17:30',
          name: 'JavaScript程序设计',
          province: 'JavaScript程序设计',
          city: 'JavaScript程序设计',
          address: 'JavaScript程序设计',
          zip: 'JavaScript程序设计'
        },
        ],
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
.format_Box{
  width: 80%;
  display: inline-flex;
  justify-content: center;
  >>>.el-table{
    background: transparent;
  }
  >>>.el-table th {
    background-color: rgb(239, 193, 115);
  }
  >>>.el-table tr {
    font-family: 'fzchsjt';
    background-color: rgb(122, 196, 225);
  }
}
</style>
