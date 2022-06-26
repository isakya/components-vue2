<template>
  <div class="relative">
    <el-input
      v-model="val"
      @input="inputEnter"
    />
    <div class="code-button">
      <i-button
        size="mini"
        type="primary"
      >获取验证码</i-button>
    </div>
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
  components: {
    'i-button': () => import('@/components/button')
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

<style lang="scss" scoped>
.code-button {
  position: absolute;
  right: 10px;
  top: 0;
}
</style>