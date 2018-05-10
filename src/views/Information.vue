<template>
  <div>
    <h2>通知 Information</h2>
    <p>基于命令行驱动的悬浮提醒信息。</p>
    <h3>基础提示</h3>
    <div class="demo">
      <button class="zp-btn" @click="openInfo">可自动关闭的通知</button>
      <button class="zp-btn" @click="openInfo2">不自动关闭的通知</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openInfo"&gt;可自动关闭的通知&lt;/button&gt;
&lt;button class="zp-btn" @click="openInfo2"&gt;不自动关闭的通知&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openInfo () {
      this.$info('这是一个默认自动关闭的通知')
    },
    openInfo2 () {
      this.$info('这是一个不会自动关闭的通知', {
        duration: 0
      })
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制提示</h3>
    <div class="demo">
      <button class="zp-btn" @click="openInfo3">通知</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openInfo3"&gt;通知&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openInfo3 () {
      this.$info('一个1s右上角失败的通知', {
        type: 'error',
        duration: 1000,
        showClose: true,
        position: 'top-right'
      }).then(() => {
        this.$info('一个2s右下角警告的通知', {
          type: 'warning',
          duration: 2000,
          position: 'bottom-right'
        }).then(() => {
          this.$info('一个3s左下角成功的提示', {
            type: 'success',
            duration: 3000,
            position: 'bottom-left'
          }).then(() => {
            this.$info('一个4s左上角普通的通知', {
              duration: 4000,
              position: 'top-left'
            })
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
        this.$info('这是一个默认自动关闭的通知')
      },
      openInfo2 () {
        this.$info('这是一个不会自动关闭的通知', {
          duration: 0
        })
      },
      openInfo3 () {
        this.$info('一个1s右上角失败的通知', {
          type: 'error',
          duration: 1000,
          showClose: true,
          position: 'top-right'
        }).then(() => {
          this.$info('一个2s右下角警告的通知', {
            type: 'warning',
            duration: 2000,
            position: 'bottom-right'
          }).then(() => {
            this.$info('一个3s左下角成功的提示', {
              type: 'success',
              duration: 3000,
              position: 'bottom-left'
            }).then(() => {
              this.$info('一个4s左上角普通的通知', {
                duration: 4000,
                position: 'top-left'
              })
            })
          })
        })
      }
    }
  }
</script>