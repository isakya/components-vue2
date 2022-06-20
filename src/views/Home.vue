<template>
  <div>
    <i-table
      :column="column"
      :checkbox="false"
      :index="true"
    >
      <template v-slot:operation="slot">
        {{slot.info.id}}
        <i-button
          type="primary"
          @click="jump(slot.info.id)"
        >编辑</i-button>
        <i-button>删除</i-button>
      </template>
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
      ]
    }
  },
  methods: {
    jump(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>