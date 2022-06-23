<template>
  <el-select
    v-model="val"
    @change="handlerChange"
    :remote-method="keywordRequest"
    :filterable="fetchSearch"
    :remote="fetchSearch"
    :multiple="multiple"
    :collapse-tags="multiple"
  >
    <el-option
      v-for="item in option"
      :key="item.value"
      :value="item[props.value]"
      :label="item[props.label]"
    >
      <slot
        name="select"
        :data="item"
      ></slot>
    </el-option>
  </el-select>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'SelectComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data() {
    return {
      val: '',
    }
  }
}
</script>

<style>
</style>