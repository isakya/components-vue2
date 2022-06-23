export const props = {
  config: {
    type: Object,
    default: () => ({})
  },
  value: {
    type: [String, Number, Array],
    default: ''
  }
}