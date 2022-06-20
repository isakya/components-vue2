<template>
  <div style="padding: 30px;">
    <h2>主题样式</h2>
    <i-button>默认按钮</i-button>
    <!-- 主题颜色 -->
    <i-button type="primary">izumi</i-button>
    <!-- 边框 -->
    <i-button
      type="warning"
      border
    >izumi</i-button>
    <!-- 圆角 -->
    <i-button
      type="success"
      round
    >izumi</i-button>
    <!-- 禁用 -->
    <i-button
      type="error"
      disabled
    >izumi</i-button>
    <h2>尺寸</h2>
    <i-button
      type="error"
      size="mini"
    >izumi</i-button>
    <i-button
      type="error"
      size="small"
    >izumi</i-button>
    <i-button
      type="error"
      size="medium"
    >izumi</i-button>
    <i-button
      type="error"
      disabled
    >izumi</i-button>
    <h2>固定大小</h2>
    <i-button
      type="error"
      min-width="160px"
    >izumi</i-button>
    <h2>添加图标</h2>
    <i-button
      perfix="add-circle"
      type="primary"
    >按钮</i-button>
    <i-button
      suffix="arrow-right"
      type="primary"
    >按钮</i-button>
    <i-button
      suffix="arrow-right"
      type="primary"
      size="medium"
    >按钮</i-button>
    <i-button
      suffix="arrow-right"
      type="primary"
      size="small"
    >按钮</i-button>
    <i-button
      suffix="arrow-right"
      type="primary"
      size="mini"
    >按钮</i-button>
    <h2>块级按钮</h2>
    <i-button
      suffix="arrow-right"
      block
      type="primary"
    >按钮</i-button>
    <span>我是span</span>
    <h2>加载效果</h2>
    <i-button
      type="primary"
      :loading="true"
    >按钮</i-button>
    <h2>点击事件</h2>
    <i-button
      :loading="flag"
      type="primary"
      @click="handleClick"
    >click事件</i-button>
    <h2>before-change 异步处理</h2>
    <i-button
      :before-change="asyncFunction"
      type="primary"
    >异步处理</i-button>
    <div class="test">2123123</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    'i-button': () => import('@/components/button')
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    handleClick() {
      this.flag = true
      setTimeout(() => {
        alert('hello world!')
        this.flag = false
      }, 1000)
    },
    asyncFunction() {
      return new Promise((resolve, reject) => {
        console.log(reject)
        setTimeout(() => {
          alert('hello world!')
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
<style scoped>
.test {
  color: red;
}
</style>
