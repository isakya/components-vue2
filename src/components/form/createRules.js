const createRules = (data) => {
  data.forEach(item => {
    // 检测规则是一个数组类型
    const rules_arr = []
    if (item.required) {
      const rule = { required: true, message: item.message || createMessage(item) }
      rules_arr.push(rule)
      item.rules = rules_arr
    }
    console.log(item)
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