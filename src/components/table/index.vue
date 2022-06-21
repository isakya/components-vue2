<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @sort-change="sortChange"
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
        :render-header="item.render_header"
        :sortable="item.sort"
        :sort-by="item.sort_by"
        :key="item.prop +1"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <!-- 动态生成不同类型的组件 -->
          <component
            :data="scope.row"
            :config="item"
            :prop="item.prop"
            :is="!item.type ? 'com-text' : `com-${item.type}`"
          />
        </template>
      </el-table-column>
      <!-- <el-table-column
        :render-header="item.render_header"
        :sortable="item.sort"
        :sort-by="item.sort_by"
        v-else-if="item.type === 'slot'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope"> -->
      <!-- 注意info自定义名称，但不能跟key有所重复 -->
      <!-- <slot
            :name="item.slot_name"
            :info="scope.row"
          />
        </template>
      </el-table-column>
      <el-table-column
        :render-header="item.render_header"
        :sort-by="item.sort_by"
        :sortable="item.sort"
        v-else
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column> -->
    </template>
  </el-table>
</template>

<script>
// 自动化的规则，通过type属性，自动读取目录组件
// true 是读取子目录
// 参数3 是指定读取某个文件
const files = require.context('../control', true, /\index.vue$/)
const modules = {}
files.keys().forEach(item => {
  const key = item.split('/')
  const name = key[1]
  // 组件集成
  modules[`com-${name}`] = files(item).default
})

export default {
  name: 'Table',
  components: {
    ...modules
  },
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    onLoad: Boolean,
    format: Function, // 格式化数据函数
    initRequest: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: '',
      require: true
    },
    method: {
      type: String,
      default: 'get',
      require: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  beforeMount() {
    this.initRequest && this.getTableList()
  },
  methods: {
    getTableList() {
      const url = this.url
      if (!url) {
        console.log('请求地址不存在')
        return false
      }
      const request_data = {
        url: url,
        method: this.method
      }
      // 参数处理
      if (JSON.stringify(this.data) !== '{}') {
        request_data.data = this.data
      }
      if (JSON.stringify(this.params) !== '{}') {
        request_data.params = this.params
      }
      // 接口请求
      this.$axios(request_data).then(res => {
        let request_data = res.data.result.list
        // 判断格式化数据的函数是否存在
        if (this.format && typeof this.format === 'function') {
          // 数据格式化
          request_data = this.format(request_data)
        }
        this.tableData = request_data
        // 将请求数据返回给父组件
        this.onLoad && this.$emit('onLoad', res.data.result.list, 9999)
      })
    },
    handlerRequest() {
      this.getTableList()
    },
    // 远程排序
    sortChange({ column, prop, order }) {
      console.log(column, prop, order)
      // 根据后端给的条件进行排序
      // sort_by 是后端所需要排序的一些关键字
      const sort_by = column.sortBy
      // 根据条件调用接口拉取数据
      console.log(sort_by, order)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>