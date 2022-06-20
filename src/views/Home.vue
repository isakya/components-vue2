<template>
  <div>
    <i-table
      :column="column"
      :checkbox="false"
      :index="true"
    ></i-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'i-table': () => import('@/components/table')
  },
  data() {
    return {
      column: [
        { label: '日期', prop: 'date', width: 500 },
        { label: '名称', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>