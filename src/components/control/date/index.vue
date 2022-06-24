<template>
  <el-date-picker
    v-model="val"
    :type="config.model || 'datetime'"
    placeholder="选择日期时间"
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