<template>
  <div class="relative">
    <el-input
      :type=" type"
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
        :loading="loading"
        :disabled="disabled"
      >{{text}}</i-button>
    </div>
    <div
      class="eye-wrap"
      v-if="config.value_type=== 'password'"
    >
      <i class="iconfont icon-eye-close"></i>
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
      val: '',
      // 验证码规则
      text: '获取验证码',
      type: 'text',
      loading: false,
      s: 60,
      disabled: false,
      // 定时器
      timer: null
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
    'config.value_type': {
      handler(value) {
        if (value === 'password') {
          this.type = value
        }
      },
      immediate: true
    }
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
    // 调用接口获取验证码
    getSms() {
      if (!this.config.send_account) {
        alert('请输入手机号')
        return false
      }
      if (this.config.beforeChange && Object.prototype.toString.call(this.config.beforeChange) === '[object Function]') {
        this.text = '发送中'
        this.loading = true
        this.config.beforeChange(this.val).then(() => {
          this.text = `倒计时${this.s}秒`
          this.loading = true
          this.disabled = true
          // 倒计时函数
          this.countDown()
        }).catch(() => {
          this.text = `重新获取`
          this.disabled = false
        })
      }
    },
    countDown() {
      // 定时器存在先清除
      if (this.timer) {
        clearInterval(this.timer)
      }
      setInterval(() => {
        this.text = `倒计时${this.s}秒`
        if (this.s <= 0) {
          clearInterval(this.timer)
          this.timer = null
          this.text = `重新获取`
          this.disabled = false
          this.s = 60
        }
      }, 1000)
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
.eye-wrap {
  position: absolute;
  right: 10px;
  top: 0;
  cursor: pointer;
  > i {
    font-size: 18px;
  }
}
</style>