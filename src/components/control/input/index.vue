<template>
  <div>
    <el-input v-model="val" />
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
  }
}
</script>

<style>
</style>