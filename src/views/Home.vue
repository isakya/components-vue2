<template>
  <i-form
    :item="form_item"
    :field="form_field"
    :rules="form_rules"
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
        { type: 'input', prop: 'name', label: '姓名' },
        { type: 'select', prop: 'gender', label: '性别' }
      ],
      form_field: {
        name: '',
        gender: ' '
      },
      form_rules: {
        name: [
          { required: true, message: '必填' }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style>
</style>