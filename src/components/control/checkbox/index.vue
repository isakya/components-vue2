<template>
  <el-checkbox-group
    v-model="val"
    @change="handlerChange"
  >
    <el-checkbox
      :label="item[props.value]"
      v-for="item in option"
      :key="item[props.value]"
    >{{item[props.label]}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>

import { props, mixin } from '../basis'
export default {
  name: 'CheckboxComponent',
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