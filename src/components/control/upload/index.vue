<template>
  <div class="upload-box">
    <el-upload
      class="avatar-uploader"
      action="http://www.baidu.com"
      :show-file-list="config.show_file"
      :on-remove="handlerRemove"
      :before-remove="handlerBeforeRemove"
      :on-preview="handlerPerview"
      :http-request="handlerUpload"
      :accept="config.accept"
      :multiple="multiple"
      :limit="config.limit || 1"
      :on-exceed="handlerExceed"
      :before-upload="handlerBeforeUpload"
    >
      <i
        v-if="imageUrl"
        class="el-icon-delete"
        @click.stop="clear"
      ></i>
      <el-button
        v-if="model === 'button'"
        size="small"
        type="primary"
      >点击上传</el-button>
      <div
        v-if="model === 'card'"
        class="upload-wrap"
        :class="{'is-round':isRound}"
        :style="[sizeStyle]"
      >
        <img
          width="100%"
          height="100%"
          v-if="imageUrl"
          :src="imageUrl"
        >
        <i
          v-else
          class="el-icon-plus avatar-uploader-icon"
        ></i>
      </div>
    </el-upload>
  </div>
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
      imageUrl: '111'
    }
  },
  computed: {
    model() {
      return this.config?.model
    },
    sizeStyle() {
      const width = this.config?.width || '100px'
      const height = this.config?.height || '100px'
      return { width, height }
    },
    isRound() {
      return this.config?.round || false
    }
  },
  methods: {
    handlerUpload(data) {
      const file = data.file
      // form
      const form = new FormData()
      form.append('file', file)
      const request_data = {
        url: this.url,
        method: this.method,
        headers: {
          'Content-Type': 'mutipart/form-data'
        },
        data: form
      }
      // 接口请求
      this.$axios(request_data).then(res => {
        // 将图片回显至选择框
        this.imageUrl = res.data.data.img_url
      })
    },
    clear() {
      this.imageUrl = ''
    },
    // 超出选择数量
    handlerExceed() {
      console.log('超出数量')
    },
    // 限制文件大小
    handlerBeforeUpload(file) {
      // 判断文件是否小于2M
      const isLt2M = file.size / 1024 / 1024 < this.config.max_size
      !isLt2M && this.$message.error(`请上传小于${this.config.max_size}M的文件`)
      return isLt2M
    },
    // 选择文件列表
    handlerPerview(file) {
      console.log(file)
    },
    // 删除动作
    // 删除文件列表之前要做的事
    handlerBeforeRemove() {
      return new Promise((resolve, reject) => {
        this.$confirm('是否删除文件', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          resolve()
        }).catch(() => {
          reject()
        })
      })

      // 返回false 或 reject则不会向下执行删除操作
      // return false
    },
    // 删除文件列表时要做的事
    handlerRemove() {
      console.log(123)
    }
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
.upload-box {
  display: inline-block;
  position: relative;
}
.el-icon-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000;
  cursor: pointer;
  &:hover {
    color: #409eff;
  }
}
.is-round {
  border-radius: 50%;
}
</style>