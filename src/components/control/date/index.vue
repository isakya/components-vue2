<template>
  <el-date-picker
    v-model="val"
    :type="config.model || 'datetime'"
    :placeholder="config.placeholder || '请选择日期'"
    :start-placeholder="config.start_placeholder || '请选择开始日期'"
    :end-placeholder="config.end_placeholder || '请选择结束日期'"
    :range-separator="config.range || '-'"
    @change="handlerChange"
  >
  </el-date-picker>
</template>

<script>

import { props, mixin } from '../basis'
export default {
  name: 'DateComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data() {
    return {
      val: '',
    }
  },

}
</script>

<style>
</style>