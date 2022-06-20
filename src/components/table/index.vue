<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      v-if="index"
      type="index"
      width="40"
    >
    </el-table-column>
    <el-table-column
      v-if="checkbox"
      type="selection"
      width="40"
    >
    </el-table-column>
    <el-table-column
      v-for="item in column"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>