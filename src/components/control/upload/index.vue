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
    <template v-if="model === 'card'">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="avatar"
      >
      <i
        v-else
        class="el-icon-plus avatar-uploader-icon"
      ></i>
    </template>
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
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>