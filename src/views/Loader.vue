<template>
  <div>
    <h2>加载 Loader</h2>
    <p>用于加载数据时呈现动画。</p>
    <h3>全屏加载</h3>
    <div class="demo">
      <button v-loader.fullscreen="loader" loader-text="全屏指令方式加载" @click="showLoader">指令加载</button>
      <button @click="showLoader2">服务加载</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button v-loader.fullscreen="loader1" loader-text="全屏指令方式加载" @click="showLoader"&gt;指令加载&lt;/button&gt;
&lt;button @click="showLoader2"&gt;服务加载&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      loader: false
    }
  },
  methods: {
    showLoader () {
      this.loader = true
      setTimeout(() => {
        this.loader = false
      }, 3000)
    },
    showLoader2 () {
      // 服务方式驱动的加载当全屏时为单例
      const loader = this.$loader({
        // 加载文字
        text: '全屏服务方式加载',
        // 加载背景色
        background: 'rgba(0, 0, 0, 0.6)'
      })
      setTimeout(() => {
        // 关闭是异步的
        loader.close()
      }, 3000)
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>局部加载</h3>
    <div class="demo zp-loader-spec">
      <button style="margin-bottom: 10px;" @click="showLoader3">指定局部加载</button>
      <zp-scroller class="scroller-content" v-loader="true" loader-text="局部方式加载" loader-background="rgba(238, 238, 238, 0.9)">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </zp-scroller>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button @click="showLoader3"&gt;指定局部加载&lt;/button&gt;
&lt;div v-loader="true" loader-text="局部方式加载" loader-background="rgba(238, 238, 238, 0.9)"&gt;balabala&lt;/div&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    showLoader3 () {
      const loader = this.$loader({
        target: '.zp-loader-spec'
      })
      setTimeout(() => {
        loader.close()
      }, 3000)
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
        loader: false
      }
    },
    methods: {
      showLoader () {
        this.loader = true
        setTimeout(() => {
          this.loader = false
        }, 3000)
      },
      showLoader2 () {
        const loader = this.$loader({
          text: '全屏服务方式加载',
          background: 'rgba(0, 0, 0, 0.6)'
        })
        setTimeout(() => {
          loader.close()
        }, 3000)
      },
      showLoader3 () {
        const loader = this.$loader({
          target: '.zp-loader-spec'
        })
        setTimeout(() => {
          loader.close()
        }, 3000)
      }
    }
  }
</script>

<style>
  .demo .scroller-content {
    font-size: 14px;
    line-height: 30px;
    padding: 0 20px 20px 10px;
    width: 500px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .zp-loader-service .zp-loader-text {
    color: #ccc;
  }
</style>