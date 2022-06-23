<template>
  <el-checkbox-group
    v-model="val"
    @change="handlerChange"
  >
    <el-checkbox
      :label="item[props.value]"
      v-for="item in option"
      :key="item[props.value]"
    >{{item[props.label]}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>

import { props } from '../basis'
export default {
  name: 'CheckboxComponent',
  props: {
    ...props
  },
  data() {
    return {
      val: '',
      option: [],
      // 默认值
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  watch: {
    config: {
      handler(newValue) {
        this.initOptions()
        this.initProps()
      },
      immediate: true
    },
    // 监听传进来的初始值
    value: {
      handler(newValue) {
        this.val = newValue
      },
      immediate: true
    },
  },
  computed: {
    // 拿到url
    url() {
      return this.config?.url
    },
    initRequest() {
      return this.config?.init_request
    },
    method() {
      return this.config?.method || 'get'
    },
  },
  methods: {
    handlerChange(value) {
      // 同步更新父组件所绑定的字段的值
      this.$emit('update:value', value)
      // 如果是插槽，则把选项数据传出去
      if (this.config.callback) {
        this.config.callback(value)
      }
    },
    // label 和 value 的初始化
    initProps() {
      const option = this.config.props
      // 默认值的key
      const keys = Object.keys(this.props)
      if (option && Object.prototype.toString.call(option) === '[object Object]') {
        // 如果默认的key跟传进来的key不一样 则 替换掉默认的key
        for (const key in option) {
          if (keys.includes(key)) {
            this.props[key] = option[key]
          }
        }
      }
    },
    // 初始化下拉数据
    initOptions() {
      // 判断是否需要异步请求数据
      if (this.url) {
        this.fetchOption()
        return false
      }
      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    },
    // 异步请求列表方法
    fetchOption() {
      if (!this.initRequest) return false
      this.getOption()
    },
    // 获取option列表
    getOption(value) {
      const request_data = {
        url: this.url,
        method: this.method
      }
      // 参数处理
      if (this.method === 'get') {
        request_data.params = value ? { [this.keyword]: value } : {}
      }
      if (this.method === 'post') {
        request_data.data = value ? { [this.keyword]: value } : {}
      }
      // 接口请求
      this.$axios(request_data).then(res => {
        this.option = res.data.result.list
      })
    }
  }
}
</script>

<style>
</style>