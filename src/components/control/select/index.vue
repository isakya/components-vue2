<template>
  <el-select
    v-model="val"
    @change="handlerChange"
  >
    <el-option
      v-for="item in option"
      :key="item.value"
      :value="item[props.value]"
      :label="item[props.label]"
    >
      {{item[props.label]}}
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number],
      default: ''
    }
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
  methods: {
    handlerChange(value) {
      // 同步更新父组件所绑定的字段的值
      this.$emit('update:value', value)
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
      const url = this.config.url
      if (url) {
        this.fetchOption()
        return false
      }



      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    },
    // 异步请求
    fetchOption() {
      const init_request = this.config.init_request
      const url = this.config.url
      const method = this.config.method
      console.log(init_request, url, method)
    },
  }
}
</script>

<style>
</style>