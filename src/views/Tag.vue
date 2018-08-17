<template>
  <div>
    <h2>标签 Tag</h2>
    <p>用于标记与分类。</p>
    <h3>基础标签</h3>
    <div class="demo zp-tags">
      <zp-tag>标签一</zp-tag>
      <zp-tag type="success">标签二</zp-tag>
      <zp-tag type="warning">标签三</zp-tag>
      <zp-tag type="error">标签四</zp-tag>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tag&gt;标签一&lt;/zp-tag&gt;
&lt;zp-tag type="success"&gt;标签二&lt;/zp-tag&gt;
&lt;zp-tag type="warning"&gt;标签三&lt;/zp-tag&gt;
&lt;zp-tag type="error"&gt;标签四&lt;/zp-tag&gt;</code></pre>
      </div>
    </div>
    <h3>可关闭标签</h3>
    <div class="demo zp-tags zp-tags-larger">
      <zp-tag v-for="(tag, i) in tags" :type="tag" closable :key="i" @close="handleClose($event, i)">
        {{ `标签 ${(i + 1)}` }}
      </zp-tag>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tag v-for="(tag, i) in tags" :type="tag" closable :key="i" @close="handleClose($event, i)"&gt;
  { { `标签 ${(i + 1)}` } }
&lt;/zp-tag&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tags: ['', 'success', 'warning', 'error']
    }
  },
  methods: {
    handleClose (evt, index) {
      this.tags.splice(index, 1)
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
        tags: ['', 'success', 'warning', 'error']
      }
    },
    methods: {
      handleClose (evt, index) {
        this.tags.splice(index, 1)
      }
    }
  }
</script>

<style>
  .zp-tags .zp-tag {
    margin-right: 10px;
  }
  .zp-tags-larger .zp-tag {
    height: 30px;
    line-height: 28px;
  }
</style>