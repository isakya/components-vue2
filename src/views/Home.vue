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
          required: true,
          callback: (data) => this.phoneEnter(data)
        },
        // 密码
        {
          type: 'input',
          value_type: 'password',
          prop: 'pwd',
          label: '密码',
          required: true,
        },
        // 确认密码
        {
          type: 'input',
          value_type: 'passwords',
          prop: 'ps',
          label: '确认密码',
          required: true,
        },
        // 验证码
        {
          type: 'input',
          value_type: 'sendcode',
          send_account: '', // 传入输入的账号
          prop: 'code',
          label: '验证码',
          required: true,
          beforeChange: () => {
            return this.apiGetSms()
          }
        },
        {
          type: 'upload',
          prop: 'file',
          label: '文件',
          model: 'card',
          width: '150px',
          height: '150px',
          url: '/api/upload',
          method: 'post',
          accept: '.zip, .rar, .jpg',
          multiple: true, // 是否上传多个文件
          limit: 3, // 限制文件数量
          max_size: 2, // 限制文件大小
          show_file: true, // 是否显示上传文件列表
          round: true, // 是否为圆形
        },
        // {
        //   type: 'date',
        //   prop: 'createDate',
        //   model: 'datetimerange', //日期模式
        //   required: true,
        //   // disabled_data: true, // 只选择今天以及之后的日期
        //   // disabled_today: true, // 只能选择今天之后的日期
        //   disabled_rule: (time) => { // 自定义禁用日期配置
        //     return time.getTime() > new Date()
        //   },
        //   format: 'yyyy/MM/dd HH:mm:ss', // 日期展示格式 默认为 -
        //   start_placeholder: '请选择开始创建日期',
        //   end_placeholder: '请选择结束创建日期',
        //   range: '至', // 中间间隔 默认为 '-'
        //   label: '日期',
        // },
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
          type: 'checkbox',
          prop: 'food',
          required: true,
          label: '食物',
          options: [
            { label: '鸡蛋', value: 1 },
            { label: '苹果', value: 2 },
            { label: '胡萝卜', value: 3 },
          ]
        },
        {
          type: 'radio',
          prop: 'car',
          required: true,
          label: '交通工具',
          options: [
            { label: '公交车', value: 1 },
            { label: '高铁', value: 2 },
            { label: '飞机', value: 3 },
          ]
        },
        {
          type: 'slot',
          slot_name: 'classroom',
          slot_type: 'select',
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
        class_room: '',
        class_room1: '',
        food: [1, 2],
        car: 1,
        createDate: '',
        file: '',
        code: '',
        pwd: ''
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
        method: 'get',
        callback: (data) => {
          return this.selectClassRoom(data)
        }
      }
    }
  },
  // watch: {
  //   'form_field.phone': {
  //     handler(value) {
  //       this.form_item[1].send_account = value
  //       console.log(value)
  //     },
  //     immediate: true
  //   }
  // },
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
    },
    selectClassRoom(data) {
      this.form_field.class_room1 = data
      console.log(data)
    },
    phoneEnter(val) {
      this.form_item[1].send_account = val
    },
    apiGetSms() {
      return new Promise((resolve, reject) => {
        this.$axios('/api/code/').then(response => {
          this.$message.success(response.data)
          resolve()
        })
      })
    }
  }
}
</script>

<style>
</style>