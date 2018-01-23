<template>
  <div>
    <h2>折叠面板 Collapse</h2>
    <p>用于内容区域的折叠控制。</p>
    <h3>基础折叠面板显示</h3>
    <div class="demo">
      <zp-collapse :colOption="colOption1">
        <div slot="colSwitch">
          折叠区域
        </div>
      </zp-collapse>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-collapse :colOption="colOption1"&gt;
  &lt;div slot="colSwitch"&gt;
    折叠区域
  &lt;/div&gt;
&lt;/zp-collapse&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      colOption1: {
        title: 'Demo1'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制折叠区域显示</h3>
    <div class="demo">
      <zp-collapse :colOption="colOption2">
        <label class="col-leeway" slot="colLeeway">补充显示</label>
        <div slot="colAlways">
          总是显示
        </div>
        <div slot="colSwitch">
          折叠区域
        </div>
      </zp-collapse>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-collapse :colOption="colOption2"&gt;
  &lt;label class="col-leeway" slot="colLeeway">补充显示&lt;/label&gt;
  &lt;div slot="colAlways"&gt;
    总是显示
  &lt;/div&gt;
  &lt;div slot="colSwitch"&gt;
    折叠区域
  &lt;/div&gt;
&lt;/zp-collapse&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      colOption2: {
        title: 'Demo2'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>联动折叠显示</h3>
    <div class="demo">
      <zp-collapse :colOption="colOption3" ref="col3" @col-action="switchCol">
        <div slot="colSwitch">
          折叠区域
        </div>
      </zp-collapse>
      <zp-collapse :colOption="colOption4" ref="col4" @col-action="switchCol">
        <div slot="colSwitch">
          折叠区域
        </div>
      </zp-collapse>
      <zp-collapse :colOption="colOption5" ref="col5" @col-action="switchCol">
        <div slot="colSwitch">
          折叠区域
        </div>
      </zp-collapse>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-collapse :colOption="colOption3" ref="col3" @col-action="switchCol"&gt;
  &lt;div slot="colSwitch"&gt;
    折叠区域
  &lt;/div&gt;
&lt;/zp-collapse&gt;
&lt;zp-collapse :colOption="colOption4" ref="col4" @col-action="switchCol"&gt;
  &lt;div slot="colSwitch"&gt;
    折叠区域
  &lt;/div&gt;
&lt;/zp-collapse&gt;
&lt;zp-collapse :colOption="colOption5" ref="col5" @col-action="switchCol"&gt;
  &lt;div slot="colSwitch"&gt;
    折叠区域
  &lt;/div&gt;
&lt;/zp-collapse&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      colOption3: {
        title: 'Demo3',
        // 默认展开
        expand: true,
        // 定制收起文字
        expandTxt: '收起来',
        // 定制展开文字
        collapseTxt: '展开来'
      },
      colOption4: {
        title: 'Demo3',
        expandTxt: '收起来',
        collapseTxt: '展开来'
      },
      colOption5: {
        title: 'Demo3',
        expandTxt: '收起来',
        collapseTxt: '展开来'
      }
    }
  },
  methods: {
    // 定制回调事件
    switchCol (vm) {
      const cols = [this.$refs.col3, this.$refs.col4, this.$refs.col5]
      for (let col of cols) {
        (col !== vm) && (col.expand = false)
      }
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
        colOption1: {
          title: 'Demo1'
        },
        colOption2: {
          title: 'Demo2'
        },
        colOption3: {
          title: 'Demo3',
          expand: true,
          expandTxt: '收起来',
          collapseTxt: '展开来'
        },
        colOption4: {
          title: 'Demo3',
          expandTxt: '收起来',
          collapseTxt: '展开来'
        },
        colOption5: {
          title: 'Demo3',
          expandTxt: '收起来',
          collapseTxt: '展开来'
        }
      }
    },
    methods: {
      switchCol (vm) {
        const cols = [this.$refs.col3, this.$refs.col4, this.$refs.col5]
        for (let col of cols) {
          // (col !== vm) && (col.expand = !vm.expand)
          (col !== vm) && (col.expand = false)
        }
      }
    }
  }
</script>

<style>
  .zp-col {
    margin-bottom: 20px;
  }
  .zp-col .col-leeway {
    font-size: 12px;
    color: #54a5ff;
    font-weight: normal;
    display: block;
  }
</style>