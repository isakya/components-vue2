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
          prop: 'name',
          label: '姓名',
          required: true,
          message: '请输入姓名',
          rules: [
            { min: 3, max: 10, message: '请输入3~10个字符', trigger: 'blur' }
          ]
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