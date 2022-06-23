<template>
  <el-form
    ref="form"
    :model="field"
    label-width="80px"
  >
    <template v-for="item in item">
      <el-form-item
        v-if="item.type === 'input'"
        :key="item.prop"
        :label="item.label"
        :rules="item.rules"
        :prop="item.prop"
      >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
      <el-form-item
        v-if="item.type === 'select'"
        :key="item.prop"
        :rules="item.rules"
        :label="item.label"
        :prop="item.prop"
      >
        <el-select v-model="field[item.prop]"></el-select>
      </el-form-item>
    </template>
    <el-form-item>
      <i-button
        :loading="item.loading"
        v-for="item in button"
        :key="item.key"
        :type="item.type"
        @click="handlerBtn(item)"
      >
        {{item.label}}
      </i-button>
    </el-form-item>
  </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'Form',
  components: {
    'i-button': () => import('@/components/button/index.vue')
  },
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    },
    beforeSubmit: Function
  },
  data() {
    return {
    }
  },
  beforeMount() {
    this.form_item = createRules(this.item)
  },
  methods: {
    handlerBtn(data) {
      if (data.key === 'submit') {
        this.submit(data)
        return false
      }
      if (data.key === 'cancel') {
        this.cancel(data)
        return false
      }
      // 其他按钮
      data.callback && data.callback(data)
    },
    submit(data) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (typeof this.beforeSubmit === 'function') {
            this.$set(data, 'loading', true)
            this.beforeSubmit().then(response => {
              console.log('成功')
              this.$set(data, 'loading', false)
            }).catch(() => {
              console.log('失败')
              this.$set(data, 'loading', false)
            })
          }
          this.$set(data, 'loading', true)
          console.log('提交')
        }
      })
    },
    cancel(data) {
      // 重置表单
      this.$refs['form'].resetFields()
      // 取消时需要执行的事件
      data.callback && data.callback(data)
      console.log('取消')
    }
  }
}
</script>

<style>
</style>