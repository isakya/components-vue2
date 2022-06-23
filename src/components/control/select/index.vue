<template>
  <el-select
    v-model="val"
    @change="handlerChange"
    :remote-method="keywordRequest"
    :filterable="fetchSearch"
    :remote="fetchSearch"
    :multiple="multiple"
    :collapse-tags="multiple"
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
    // 远程搜索 
    fetchSearch() {
      return this.config?.fetch_search
    },
    // 搜索字段
    keyword() {
      return this.config?.keyword || 'keyword'
    },
    // 多选
    multiple() {
      return this.config?.multiple

    }
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
    // 异步关键字请求
    keywordRequest(query) {
      // this.fetchSearch 为true则需要远程搜索
      if (query && this.fetchSearch) {
        this.getOption(query)
      }
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