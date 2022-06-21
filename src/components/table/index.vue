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
    <template v-for="item in column">
      <el-table-column
        v-if="item.type === 'function'"
        :key="item.prop + 1"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="item.type === 'slot'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <!-- 注意info自定义名称，但不能跟key有所重复 -->
          <slot
            :name="item.slot_name"
            :info="scope.row"
          />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
    </template>
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
    index: Boolean,
    url: {
      type: String,
      default: '',
      require: true
    },
    methos: {
      type: String,
      default: 'get',
      require: true
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  beforeMount() {
    this.getTableList()
  },
  methods: {
    getTableList() {
      const url = this.url
      if (!url) {
        console.log('请求地址不存在')
        return false
      }
      this.$axios({
        url: url,
        methos: this.methos
      }).then(res => {
        this.tableData = res.data.result.list
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>