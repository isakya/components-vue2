<template>
  <div>
    <!-- <i-table
      ref="table"
      :column="column"
      :checkbox="false"
      :index="true"
      url="https://api.apiopen.top/api/getImages?page=0&size=5"
      method="get"
      :data="data_1"
      :params="params_1"
      :init-request="false"
    >
      <template v-slot:operation="slot">
        <i-button
          type="primary"
          @click="jump(slot.info.id)"
        >编辑</i-button>
        <i-button>删除</i-button>
      </template>
    </i-table> -->
    <i-table
      :column="column_data"
      :checkbox="false"
      onLoad
      @onLoad="onLoad"
      :format="formatData"
      :index="true"
      url="https://api.apiopen.top/api/getImages?page=0&size=5"
    >
      <template v-slot:operation="slot">
        <i-button
          type="primary"
          @click="jump(slot.info.id)"
        >编辑</i-button>
        <i-button>删除</i-button>
      </template>
      <img
        src=""
        alt=""
      >
    </i-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'i-table': () => import('@/components/table'),
    'i-button': () => import('@/components/button')
  },
  data() {
    return {
      // column: [
      //   {
      //     type: 'function',
      //     label: 'URL地址',
      //     prop: 'data',
      //     callback: (data) => {
      //       return `<a href="http://www.baidu.com">${data.name}</a>`
      //     },
      //   },
      //   { label: '日期', prop: 'date', width: 500 },
      //   { label: '名称', prop: 'name', sort: true },
      //   { label: '地址', prop: 'address' },
      //   {
      //     type: 'slot',
      //     label: '操作',
      //     prop: 'operation',
      //     slot_name: 'operation',
      //   },
      // ],
      column_data: [
        {
          label: 'id', prop: 'id', sort: 'custom', sort_by: 'aaaaa',
          render_header: (h, { column, $index }) => {
            return (
              <div>自定义渲染表头id</div>
            )
          }
        },
        { label: 'title', prop: 'title', sort: true },
        {
          type: 'function',
          label: '图片',
          prop: 'url',
          callback: (data) => {
            console.log(data, 111)
            return `<a href="${data.url}">点击</a>`
          },
        },
        {
          type: 'slot',
          label: '操作',
          prop: 'operation',
          slot_name: 'operation'
        },
      ],
      data_1: {
        name: 'zs',
        age: 120
      },
      params_1: {
        name: 'lisi'
      }
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.$refs.table.handlerRequest()
  //   }, 2000)
  // },
  methods: {
    // 拿到子组件请求接口的数据
    onLoad(data) {
      console.log(data)
    },
    // 数据格式化方法
    formatData(data) {
      // const first_data = [data[0]]
      const first_data = data
      return first_data
    },
    jump(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>