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
  name: 'Home',
  components: {
    'i-form': () => import('@/components/form'),
    'i-select': () => import('@/components/control/select')
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
          type: 'select',
          prop: 'class_room',
          label: '教室',
          required: true,
          props: {
            label: 'name',
            value: 'id'
          },
          options: [
            { name: '一班', id: 1 },
            { name: '二班', id: 2 },
            { name: '三班', id: 3 },
          ]
        },
        {
          type: 'slot',
          slot_name: 'classroom',
          prop: 'class_room1',
          label: '教室',
          required: true,
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
        phone: '13333333333',
        class_room: ''
      },
      select_classroom: {
        init_request: true,
        fetch_search: true, // 代表需要远程搜索
        keyword: 'title',
        multiple: true,
        props: {
          label: 'title',
          value: 'id'
        },
        url: 'https://api.apiopen.top/api/getImages?page=0&size=5',
        method: 'get'
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