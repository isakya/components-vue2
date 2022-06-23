<template>
  <button
    type="button"
    @click="change"
    :style="[minWidthCss]"
    class="i-button"
    :class="[theme,isBorder,isRound,sizes,isBlock]"
    :disabled="disabled || loading || load"
  >
    <span>
      <i
        v-if="loading || load"
        class="iconfont icon-prefix icon-loading"
      ></i>
      <i
        v-if="iconPerfix"
        class="iconfont icon-prefix"
        :class="iconPerfix"
      ></i>
      <slot />
      <i
        v-if="iconSuffix"
        class="iconfont icon-suffix"
        :class="iconSuffix"
      ></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'IButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    perfix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    border: Boolean, // 默认false
    round: Boolean, // 默认false
    disabled: Boolean, // 默认false
    block: Boolean, // 默认false
    loading: Boolean, // 默认false
    beforeChange: Function

  },
  computed: {
    theme() {
      return this.type ? `i-button-${this.type}` : ''
    },
    sizes() {
      return this.size ? `i-button-${this.size}` : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isBlock() {
      return this.block ? 'is-block' : ''
    },

    minWidthCss() {
      if (!this.minWidth) {
        return ''
      }
      return { 'min-width': this.minWidth }
    },
    iconPerfix() {
      return this.perfix ? `icon-${this.perfix}` : ''
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : ''
    }
  },
  data() {
    return {
      load: false
    }
  },
  methods: {
    change() {
      if (typeof this.beforeChange === 'function') {
        this.load = true
        this.beforeChange().then(() => {
          this.load = false
        }).catch(() => {
          this.load = false
        })
      }
      // 事件回调
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@import './button.scss';
</style>
