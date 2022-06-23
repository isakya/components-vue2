<template>
  <el-radio-group
    v-model="val"
    @change="handlerChange"
  >
    <el-radio
      :label="item[props.value]"
      v-for="item in option"
      :key="item[props.value]"
    >{{item[props.label]}}</el-radio>
  </el-radio-group>
</template>

<script>

import { props, mixin } from '../basis'
export default {
  name: 'RadioComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data() {
    return {
      val: '',
    }
  },

}
</script>

<style>
</style>