<template>
  <div>
    <h2>对话框 Dialog</h2>
    <p>基于交互的模态窗体。</p>
    <h3>基础对话框</h3>
    <div class="demo">
      <button class="zp-btn" @click="dgOption1.visible = true">打开</button>
      <zp-dialog :dgOption="dgOption1">
        <div slot="body">这是一个对话框。</div>
      </zp-dialog>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="dgOption1.visible = true"&gt;打开&lt;/button&gt;
&lt;zp-dialog :dgOption="dgOption1"&gt;
  &lt;div slot="body">这是一个对话框。&lt;/div&gt;
&lt;/zp-dialog&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      dgOption1: {
        visible: false
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制对话框</h3>
    <div class="demo">
      <button class="zp-btn" @click="dgOption2.visible = true">打开</button>
      <zp-dialog :dgOption="dgOption2">
        <div slot="header">标题</div>
        <div slot="body">当前窗体宽度为：
          <zp-dropdownlist :ddlOption="ddlOption" @ddl-action="changeWidth" />
        </div>
      </zp-dialog>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button class="zp-btn" @click="dgOption2.visible = true"&gt;打开&lt;/button&gt;
&lt;zp-dialog :dgOption="dgOption2"&gt;
  &lt;div slot="header">标题&lt;/div&gt;
  &lt;div slot="body">当前窗体宽度为：
  &lt;zp-dropdownlist :ddlOption="ddlOption2" @ddl-action="changeWidth" /&gt;&lt;/div&gt;
&lt;/zp-dialog&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      dgOption2: {
        // 宽
        width: 500,
        // 高
        height: 150,
        // 初始是否可见
        visible: false,
        // 点击遮罩层关闭
        modalClick: true
      },
      ddlOption: {
        data: ['800像素', '500像素', '1000像素'],
        width: 100,
        setDefault: '500像素'
      }
    }
  },
  methods: {
    changeWidth (val) {
      this.dgOption2.width = parseInt(val, 10)
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
        dgOption1: {
          visible: false
        },
        dgOption2: {
          width: 500,
          height: 150,
          visible: false,
          modalClick: true
        },
        ddlOption: {
          data: ['800像素', '500像素', '1000像素'],
          width: 100,
          setDefault: '500像素'
        }
      }
    },
    methods: {
      changeWidth (val) {
        this.dgOption2.width = parseInt(val, 10)
      }
    }
  }
</script>