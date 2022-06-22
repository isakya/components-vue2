<template>
  <el-form
    ref="form"
    :model="field"
    label-width="80px"
  >
    <template v-for="item in item">
      <el-form-item
        v-if="item.type === 'input'"
        :key="item.prop"
        :label="item.label"
        :rules="item.rules"
        :prop="item.prop"
      >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
      <el-form-item
        v-if="item.type === 'select'"
        :key="item.prop"
        :rules="item.rules"
        :label="item.label"
        :prop="item.prop"
      >
        <el-select v-model="field[item.prop]"></el-select>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'Form',
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  beforeMount() {
    this.form_item = createRules(this.item)
  },
  methods: {
  }
}
</script>

<style>
</style>