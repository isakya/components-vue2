import { phone, email } from '@/utils/validator'
const createRules = (data) => {
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
  switch (data.type) {
    case 'input':
      msg = '请输入'
      break
    case 'select':
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules