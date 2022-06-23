<template>
  <i-form
    :item="form_item"
    :field="form_field"
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