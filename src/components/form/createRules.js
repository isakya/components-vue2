import { phone, email, validatorPwd } from '@/utils/validator'
const createRules = (data, field) => {
  data.forEach(item => {
    // 检测规则是一个数组类型
    let rules_arr = []
    if (item.required) {
      const rule = { required: true, message: item.message || createMessage(item) }
      rules_arr.push(rule)
    }
    // 校验手机号
    if (item.value_type && item.value_type === 'phone') {
      const rule = { validator: phone, trigger: 'change' }
      rules_arr.push(rule)
    }
    // 校验email
    if (item.value_type && item.value_type === 'email') {
      const rule = { validator: email, trigger: 'blur' }
      rules_arr.push(rule)
    }
    // 校验密码
    if (item.value_type && item.value_type === 'password') {
      const validatorPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'))
        } else if (!validatorPwd(value)) {
          callback(new Error('请输入长度至少为8，且至少有一个数字 并同时包含大小写字母'))
        } else {
          callback()
        }
      }
      const rule = { validator: validatorPassword, trigger: 'change' }
      rules_arr.push(rule)
    }
    // 校验确认密码
    if (item.value_type && item.value_type === 'passwords') {
      // 获取密码配置
      const p1 = data.filter(item => item.value_type === 'password')[0]
      const validatorPassword = (rule, value, callback) => {
        // 拿到密码值
        const p1_value = field[p1.prop]
        console.log(p1_value)
        if (!value) {
          callback(new Error('请输入密码'))
        } else if (!validatorPwd(value)) {
          callback(new Error('请输入长度至少为8，且至少有一个数字 并同时包含大小写字母'))
        } else if (p1_value && p1_value !== value) {
          callback(new Error('确认密码不一致'))
        }
        else {
          callback()
        }
      }
      const rule = { validator: validatorPassword, trigger: 'change' }
      rules_arr.push(rule)
    }
    // 是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rules_arr = rules_arr.concat(item.rules)
    }
    item.rules = rules_arr
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type === 'slot' ? data.slot_type : data.type) {
    case 'input':
      msg = '请输入'
      break
    case 'select':
    case 'checkbox':
    case 'radio':
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules