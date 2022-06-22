const createRules = (data) => {
  data.forEach(item => {
    // 检测规则是一个数组类型
    const rules_arr = []
    if (item.required) {
      const rule = { required: true, message: '必填' }
      rules_arr.push(rule)
      item.rules = rules_arr
    }
    console.log(item)
  })

  return data
}

export default createRules