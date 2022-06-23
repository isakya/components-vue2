<template>
  <i-form
    :item="form_item"
    :field="form_field"
    :button="form_button"
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
        { label: '取消', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'primary' }
      ],
      form_field: {
        name: '',
        gender: ' '
      }
    }
  },
  methods: {

  }
}
</script>

<style>
</style>