<template>
  <div>
    <h2>上传 Upload</h2>
    <p>用以点击或拖拽上传文件。</p>
    <h3>点击上传</h3>
    <div class="demo">
      <zp-upload url="https://jsonplaceholder.typicode.com/posts" :before-upload="beforeUpload" :progress="handleProgress" :error="handleError" :success="handleSuccess" :exceed="handleExceed" :maxSize="1000">
        <button ref="uploadBtn">点击上传</button>
      </zp-upload>
      <zp-progress :proOption="proOption" v-show="visible === true" class="progress-short" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-upload
  url="https://jsonplaceholder.typicode.com/posts"
  :before-upload="beforeUpload"
  :progress="handleProgress"
  :error="handleError"
  :success="handleSuccess"
  :exceed="handleExceed"
  :maxSize="1000" &gt;
  &lt;button ref="uploadBtn"&gt;点击上传&lt;/button&gt;
&lt;/zp-upload&gt;
&lt;zp-progress :proOption="proOption" v-show="visible === true" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      proOption: {
        percentage: 0
      },
      visible: false
    }
  },
  methods: {
    // 上传前事件
    beforeUpload () {
      this.visible = true
      this.$refs.uploadBtn.disabled = true
    },
    // 上传中事件
    handleProgress (evt) {
      this.proOption.percentage = evt.percentComplete
      if (evt.percentComplete === 100) {
        setTimeout(() => {
          this.visible = false
          this.proOption.percentage = 0
        }, 600)
      }
    },
    // 上传失败事件
    handleError (ignore, file) {
      this.$message(`${file.name}上传失败！`, {
        type: 'error',
        position: 'top'
      }).then(this.$refs.uploadBtn.disabled = false)
    },
    // 上传成功事件
    handleSuccess (ignore, file) {
      this.$message(`${file.name}上传成功！`, {
        position: 'top'
      }).then(this.$refs.uploadBtn.disabled = false)
    },
    // 超上限事件
    handleExceed (file) {
      this.visible = false
      this.$message(`${file.name}文件超过上限！`, {
        type: 'warning',
        position: 'top'
      }).then(this.$refs.uploadBtn.disabled = false)
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>拖拽或点击上传</h3>
    <div class="demo">
      <zp-upload url="https://jsonplaceholder.typicode.com/posts" :before-upload="beforeUpload2" :progress="handleProgress" :error="handleError" :success="handleSuccess" draggable :multiple="multiple" ref="uploader">
        <div class="upload-drop"></div>
      </zp-upload>
      <div v-if="file">
        当前预上传的文件: {{ file.name }} <button @click="handleContinue">点击继续</button>
      </div>
      <zp-progress :proOption="proOption" v-show="visible === true" class="progress-short" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-upload
  url="https://jsonplaceholder.typicode.com/posts"
  :before-upload="beforeUpload2"
  :progress="handleProgress"
  :error="handleError"
  :success="handleSuccess"
  draggable
  :multiple="multiple"
   ref="uploader" &gt;
  &lt;div&gt;&lt;/button&gt;
&lt;/zp-upload&gt;
&lt;div v-if="file"&gt;
  当前预上传的文件: { { file.name } } &lt;button @click="handleContinue"&gt;点击继续&lt;/button&gt;
&lt;/div&gt;
&lt;zp-progress :proOption="proOption" v-show="visible === true" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      proOption: {
        percentage: 0
      },
      visible: false,
      draggable: true,
      file: null,
      multiple: false
    }
  },
  methods: {
    beforeUpload2 (file) {
      this.file = file
      return false
    },
    handleProgress (evt) {
      this.proOption.percentage = evt.percentComplete
      if (evt.percentComplete === 100) {
        setTimeout(() => {
          this.visible = false
          this.proOption.percentage = 0
        }, 600)
      }
    },
    handleError (ignore, file) {
      this.$message(`${file.name}上传失败！`, {
        type: 'error',
        position: 'top'
      }).then(this.$refs.uploadBtn.disabled = false)
    },
    handleSuccess (ignore, file) {
      this.$message(`${file.name}上传成功！`, {
        position: 'top'
      }).then(this.$refs.uploadBtn.disabled = false)
    },
    handleContinue () {
      this.$refs.uploader.postFile(this.file)
      this.file = null
      this.visible = true
    }
  }
}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        proOption: {
          percentage: 0
        },
        visible: false,
        draggable: true,
        file: null,
        multiple: false
      }
    },
    methods: {
      beforeUpload () {
        this.visible = true
        this.$refs.uploadBtn.disabled = true
      },
      beforeUpload2 (file) {
        this.file = file
        return false
      },
      handleProgress (evt) {
        this.proOption.percentage = evt.percentComplete
        if (evt.percentComplete === 100) {
          setTimeout(() => {
            this.visible = false
            this.proOption.percentage = 0
          }, 600)
        }
      },
      handleError (ignore, file) {
        this.$message(`${file.name}上传失败！`, {
          type: 'error',
          position: 'top'
        }).then(this.$refs.uploadBtn.disabled = false)
      },
      handleSuccess (ignore, file) {
        this.$message(`${file.name}上传成功！`, {
          position: 'top'
        }).then(this.$refs.uploadBtn.disabled = false)
      },
      handleExceed (file) {
        this.visible = false
        this.$message(`${file.name}文件超过上限！`, {
          type: 'warning',
          position: 'top'
        }).then(this.$refs.uploadBtn.disabled = false)
      },
      handleContinue () {
        this.$refs.uploader.postFile(this.file)
        this.file = null
        this.visible = true
      }
    }
  }
</script>

<style>
  .progress-short {
    width: 20%;
  }
  .upload-drop {
    cursor: pointer;
    position: relative;
    width: 160px;
    height: 160px;
    border: 2px dashed #ebebeb;
    border-radius: 5px;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjM1cHgiIGhlaWdodD0iMzlweCIgdmlld0JveD0iMCAwIDM1IDM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OSAoNTEwMDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPumUgOWUrui1i+iDve+8iOmmlumhtS3ljp/niYjvvIk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6ZSA5ZSu6LWL6IO977yI6aaW6aG1LeaUueeJiO+8iSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNzcuMDAwMDAwLCAtNjE4LjAwMDAwMCkiIGZpbGw9IiM5OTk5OTkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTI0LjAwMDAwMCwgNTMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTMuMDAwMDAwLCA4Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNDgzOCwyOS4wMTQ5IEMxOS40ODM4LDMwLjExMTQ1IDE4LjU5NTAzMzMsMzEgMTcuNSwzMSBDMTYuNDAyOCwzMSAxNS41MTQwMzMzLDMwLjExMTIzMzMgMTUuNTE0MDMzMywyOS4wMTQ5IEwxNS41MTQwMzMzLDYuOTg1MSBDMTUuNTE0MDMzMyw1Ljg4ODc2NjY3IDE2LjQwMjgsNSAxNy41LDUgQzE4LjU5NTI1LDUgMTkuNDgzOCw1Ljg4ODc2NjY3IDE5LjQ4MzgsNi45ODUxIEwxOS40ODM4LDI5LjAxNDkgWiBNMjguNTE0MDMzMywxNi4wMTUxMTY3IEMyOS42MTEyMzMzLDE2LjAxNTExNjcgMzAuNSwxNi45MDM2NjY3IDMwLjUsMTggQzMwLjUsMTkuMDk2MTE2NyAyOS42MTEyMzMzLDE5Ljk4NDg4MzMgMjguNTE0MDMzMywxOS45ODQ4ODMzIEw2LjQ4NDAxNjY3LDE5Ljk4NDg4MzMgQzUuMzg4NzY2NjcsMTkuOTg0ODgzMyA0LjUsMTkuMDk2MTE2NyA0LjUsMTggQzQuNSwxNi45MDM2NjY3IDUuMzg4NzY2NjcsMTYuMDE1MTE2NyA2LjQ4NDAxNjY3LDE2LjAxNTExNjcgTDI4LjUxNDAzMzMsMTYuMDE1MTE2NyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') no-repeat center;
  }
  .upload-drop:hover {
    border: 2px dashed #54a5ff;
  }
</style>