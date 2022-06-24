<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
  >
    <el-button
      size="small"
      type="primary"
    >点击上传</el-button>
  </el-upload>
</template>

<script>

import { props, mixin } from '../basis'
export default {
  name: 'UploadComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data() {
    return {
      val: '',
    }
  },
  methods: {
  }
}
</script>

<style>
</style>