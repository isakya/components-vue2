<template>
  <el-select
    v-model="val"
    @change="handlerChange"
  >
    <el-option
      v-for="item in option"
      :key="item.value"
      :value="item.value"
      :label="item.label"
    >
      {{item.label}}
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
      option: []
    }
  },
  watch: {
    config: {
      handler(newValue) {
        this.initOptions()
      },
      immediate: true
    },
    // 监听传进来的input初始值
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
    // 初始化下拉数据
    initOptions() {
      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    }
  }
}
</script>

<style>
</style>