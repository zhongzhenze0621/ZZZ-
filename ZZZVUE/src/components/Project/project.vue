<template>
  
  <div>
     <el-button>新增项目</el-button>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="发版日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="版本名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="重大模块">
    </el-table-column>
      <el-table-column
      prop="persion"
      label="负责人">
    </el-table-column>
      <el-table-column
      label="操作">
      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
