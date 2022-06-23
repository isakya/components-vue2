<template>
  <i-form
    :item="form_item"
    :field="form_field"
    :button="form_button"
    :beforeSubmit="submitForm"
  ></i-form>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'i-form': () => import('@/components/form')
  },
  data() {
    return {
      form_item: [
        {
          type: 'input',
          value_type: 'phone',
          prop: 'phone',
          label: '手机号',
          required: true
        },
        {
          type: 'input',
          value_type: 'email',
          prop: 'email',
          label: '邮箱',
          required: true,
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          required: true
        }
      ],
      // 表单提交按钮
      form_button: [
        // 确定按钮、取消按钮、其他按钮
        { label: '确定', key: 'submit', type: 'primary' },
        {
          label: '重置', key: 'cancel', type: 'error', callback: (data) => {
            this.cancel(data)
          }
        },
        {
          label: '下一步', key: 'next', type: 'primary', callback: (data) => {
            this.next(data)
          }
        }
      ],
      form_field: {
        name: '',
        gender: ''
      }
    }
  },
  methods: {
    submitForm() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
        // this.$axios.post().then(res => {
        //   resolve()
        // }).catch(() => {
        //   reject()
        // })
      })
    },
    next(data) {
      console.log('下一步', data)
    },
    cancel(data) {
      console.log('取消', data)
    }
  }
}
</script>

<style>
</style>