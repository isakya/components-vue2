<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
  >
    <el-button
      v-if="model === 'button'"
      size="small"
      type="primary"
    >点击上传</el-button>
    <div
      v-if="model === 'card'"
      class="upload-wrap"
      :style="[sizeStyle]"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
      >
      <i
        v-else
        class="el-icon-plus avatar-uploader-icon"
      ></i>
    </div>
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
  computed: {
    model() {
      return this.config?.model
    },
    sizeStyle() {
      const width = this.config?.width || '100px'
      const height = this.config?.height || '100px'
      return { width, height, }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.upload-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    border-color: #409eff;
  }
}
</style>