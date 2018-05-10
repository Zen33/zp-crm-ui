<template>
  <div>
    <h2>轻提示 Message</h2>
    <p>基于命令行驱动的轻量级反馈信息。</p>
    <h3>基础提示</h3>
    <div class="demo">
      <button class="zp-btn" @click="openInfo">提示</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openInfo"&gt;提示&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openMsg () {
      this.$message('这是一个提示')
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制提示</h3>
    <div class="demo">
      <button class="zp-btn" @click="openMsg">提示</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openMsg"&gt;提示&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openMsg () {
      this.$message('一个错误提示', {
        type: 'error',
        duration: 1000,
        showClose: true
      }).then(() => {
        this.$message('一个警告提示', {
          type: 'warning',
          duration: 2000
        }).then(() => {
          this.$message('一个成功提示', {
            type: 'success',
            duration: 3000
          })
        })
      })
    }
  }
}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openInfo () {
        this.$message('这是一个提示')
      },
      openMsg () {
        this.$message('一个1s错误提示', {
          type: 'error',
          duration: 1000,
          showClose: true
        }).then(() => {
          this.$message('一个2s警告提示', {
            type: 'warning',
            duration: 2000
          }).then(() => {
            this.$message('一个3s成功提示', {
              type: 'success',
              duration: 3000
            })
          })
        })
      }
    }
  }
</script>