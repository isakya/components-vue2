<template>
  <div>
    <el-input
      v-model="val"
      @input="inputEnter"
    />
  </div>
</template>

<script>
export default {
  name: 'inputComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      val: ''
    }
  },
  watch: {
    // 监听传进来的input初始值
    value: {
      handler(newValue) {
        this.val = newValue
        console.log(newValue, 999)
      },
      immediate: true
    },
  },
  methods: {
    inputEnter() {
      // 同步更新父组件所绑定的字段的值
      this.$emit('update:value', this.val)
    }
  }
}
</script>

<style>
</style>