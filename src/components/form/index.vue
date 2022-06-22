<template>
  <el-form
    ref="form"
    :model="field"
    :rules="rules"
    label-width="80px"
  >
    <template v-for="item in item">
      <el-form-item
        v-if="item.type === 'input'"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
      <el-form-item
        v-if="item.type === 'select'"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <el-select v-model="field[item.prop]"></el-select>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
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
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>