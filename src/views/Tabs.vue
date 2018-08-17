<template>
  <div>
    <h2>标签页 Tabs</h2>
    <p>用以切换选项卡于同一区域呈现不同选项的内容。</p>
    <h3>基础标签</h3>
    <div class="demo">
      <button @click="changePosition('top')">上 Top</button>
      <button @click="changePosition('right')">右 Right</button>
      <button @click="changePosition('bottom')">下 Bottom</button>
      <button @click="changePosition('left')">左 Left</button>
      <zp-tabs ref="tabs" :position="position" style="margin-top: 10px;">
        <zp-tab-pane name="one" label="使用指南">使用指南 balabala</zp-tab-pane>
        <zp-tab-pane name="two" label="组件">组件 balabala</zp-tab-pane>
        <zp-tab-pane name="three" label="其他标签页">其他标签页 balabala</zp-tab-pane>
      </zp-tabs>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button @click="changePosition('top')"&gt;上 Top&lt;/button&gt;
&lt;button @click="changePosition('right')"&gt;右 Right&lt;/button&gt;
&lt;button @click="changePosition('bottom')"&gt;下 Bottom&lt;/button&gt;
&lt;button @click="changePosition('left')"&gt;左 Left&lt;/button&gt;
&lt;zp-tabs ref="tabs" :position="position"&gt;
  &lt;zp-tab-pane name="one" label="使用指南"&gt;使用指南 balabala&lt;/zp-tab-pane&gt;
  &lt;zp-tab-pane name="two" label="组件"&gt;组件 balabala&lt;/zp-tab-pane&gt;
  &lt;zp-tab-pane name="three" label="其他标签页"&gt;其他标签页 balabala&lt;/zp-tab-pane&gt;
&lt;/zp-tabs&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      position: 'top'
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>可滚动标签</h3>
    <div class="demo">
      <zp-tabs ref="tabs">
        <zp-tab-pane v-for="(item, index) in tabs" :key="index" :label="item.title">
          {{ item.content }}
        </zp-tab-pane>
      </zp-tabs>
      <button @click="setTabName">随机定位</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tabs ref="tabs"&gt;
  &lt;zp-tab-pane v-for="(item, index) in tabs" :key="index" :label="item.title"&gt;
    { { item.content } }
  &lt;/zp-tab-pane&gt;
&lt;/zp-tabs&gt;
&lt;button @click="setTabName"&gt;随机定位&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    setTabName () {
      const name = Math.floor(Math.random() * 20)
      this.$refs.tabs.setTabName(name)
    }
  },
  created () {
    for (let i = 1; i <= 20; i++) {
      this.tabs.push({
        title: `选项卡 ${i}`,
        content: `选项卡 ${i}内容 balabala`
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
    data () {
      return {
        position: 'top',
        tabs: []
      }
    },
    methods: {
      setTabName () {
        const name = Math.floor(Math.random() * 20)
        this.$refs.tabs.setTabName(name)
      },
      changePosition (pos) {
        this.position = pos
      }
    },
    created () {
      for (let i = 1; i <= 20; i++) {
        this.tabs.push({
          title: `选项卡 ${i}`,
          content: `选项卡 ${i}内容 balabala`
        })
      }
    }
  }
</script>
