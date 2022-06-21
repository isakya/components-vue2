<template>
  <div>
    <i-table
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
    </i-table>
    <i-table
      :column="column_data"
      :checkbox="false"
      onLoad
      @onLoad="onLoad"
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
      column: [
        {
          type: 'function',
          label: 'URL地址',
          prop: 'data',
          callback: (data) => {
            return `<a href="http://www.baidu.com">${data.name}</a>`
          },
        },
        { label: '日期', prop: 'date', width: 500 },
        { label: '名称', prop: 'name' },
        { label: '地址', prop: 'address' },
        {
          type: 'slot',
          label: '操作',
          prop: 'operation',
          slot_name: 'operation'
        },
      ],
      column_data: [
        { label: 'id', prop: 'id' },
        { label: 'title', prop: 'title' },
        {
          type: 'function',
          label: '图片',
          prop: 'url',
          callback: (data) => {
            console.log(data)
            return `<img src="${data.url}" alt="">`
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
  mounted() {
    setTimeout(() => {
      this.$refs.table.handlerRequest()
    }, 2000)
  },
  methods: {
    // 拿到子组件请求接口的数据
    onLoad(data) {
      console.log(data)
    },
    jump(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>