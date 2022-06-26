<template>
  <div class="relative">
    <el-input
      v-model="val"
      @input="inputEnter"
    />
    <div
      class="code-button"
      v-if="config.value_type === 'sendcode'"
      @click="getSms"
    >
      <i-button
        size="mini"
        type="primary"
      >获取验证码</i-button>
    </div>
  </div>
</template>

<script>
import { props } from '../basis'
export default {
  name: 'inputComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ...props
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
      // 判断是否有回调函数
      if (this.config.callback && Object.prototype.toString.call(this.config.callback) === '[object Function]') {
        this.config.callback(this.val)
      }
    },
    getSms() {
      console.log(this.config.send_account)
      if (!this.config.send_account) {
        alert('请输入手机号')
        return false
      }
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