<template>
  <div>
    <h2>消息对话框 Message</h2>
    <p>基于命令行驱动的信息交互窗体，该组件依赖Dialog，部分引入的时候需要引入Dialog组件。</p>
    <h3>提示对话框</h3>
    <div class="demo">
      <button class="zp-btn" @click="openAlert">打开</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openAlert"&gt;打开&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openAlert () {
      this.$alert('这是一个提示对话框')
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>确认对话框</h3>
    <div class="demo">
      <button class="zp-btn" @click="openConfirm">打开</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="openConfirm"&gt;打开&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  methods: {
    openConfirm () {
      this.$confirm('这是一个确认对话框', '标题', {
        // 确认按钮文字内容
        confirmText: '是',
        // 取消按钮文字内容
        cancelText: '否'
      }).then(() => {
        // 确认事件
        this.$alert('确认了')
      }).catch(() => {
        // 取消事件
        this.$alert('取消了')
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
      openAlert () {
        this.$alert('这是一个提示对话框')
      },
      openConfirm () {
        this.$confirm('这是一个确认对话框', '标题', {
          confirmText: '是',
          cancelText: '否'
        }).then(() => {
          this.$alert('确认了')
        }).catch(() => {
          this.$alert('取消了')
        })
      }
    }
  }
</script>