<template>
  <el-date-picker
    v-model="val"
    :type="config.model || 'datetime'"
    :placeholder="config.placeholder || '请选择日期'"
    :start-placeholder="config.start_placeholder || '请选择开始日期'"
    :end-placeholder="config.end_placeholder || '请选择结束日期'"
    :range-separator="config.range || '-'"
    :picker-options="pickerOptions()"
    :format="config.format"
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
  methods: {
    // 禁用日期配置
    pickerOptions() {
      const disabled_data = this.config.disabled_data
      const disabled_today = this.config.disabled_today
      // 自定义禁用日期
      const disabled_rule = this.config.disabled_rule && Object.prototype.toString.call(this.config.disabled_rule) === '[object Function]'
      return {
        disabledDate: (time) => {
          if (disabled_data) {
            return time.getTime() < new Date() - 8.64e7
          } else if (disabled_today) {
            return time.getTime() < new Date()
          } else if (disabled_rule) {
            return this.config.disabled_rule(time)
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>

<style>
</style>