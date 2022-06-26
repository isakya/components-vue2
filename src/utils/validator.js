const phone_reg = /^1[3456789]\d{9}$/
const email_reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const pwd_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export function phone(rule, value, callback) {
  if (phone_reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入11位数字的手机号'))
  }
}

export function email(rule, value, callback) {
  if (email_reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮箱地址'))
  }
}

export function validatorPwd(value) {
  return pwd_reg.test(value)
}