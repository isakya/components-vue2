<template>
  <i-form
    :item="form_item"
    :field="form_field"
    :button="form_button"
    :beforeSubmit="submitForm"
  >
    <template v-slot:classroom>
      <i-select :config="select_classroom">
        <template v-slot:select="slot">
          <div style="font-size: 20px;">{{slot.data.title}}</div>
        </template>
      </i-select>
    </template>
  </i-form>
</template>

<script>
export default {
  name: 'Form',
  components: {
    'i-form': () => import('@/components/form'),
    'i-select': () => import('@/components/control/select')
  },
  data() {
    return {
      form_item: [
        {
          type: 'input',
          prop: 'a',
          label: '手机号',
          required: true,
          message: '请输入手机号'
        },
        {
          type: 'input',
          prop: 'b',
          label: '手机号',
          required: true,
          message: '请输入手机号'
        },
        {
          type: 'input',
          prop: 'c',
          label: '手机号',
          required: true,
          message: '请输入手机号'
        },
        {
          type: 'input',
          prop: 'd',
          label: '手机号',
          required: true,
          message: '请输入手机号'
        },
        {
          type: 'input',
          prop: 'e',
          label: '手机号',
          required: true,
          message: '请输入手机号'
        },
      ],
      // 表单提交按钮
      form_button: [
        // 确定按钮、取消按钮、其他按钮
        { label: '确定', key: 'submit', type: 'primary' }
      ],
      form_field: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
      }
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style>
</style>