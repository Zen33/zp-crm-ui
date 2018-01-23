<template>
  <div>
    <h2>环形进度 Circle Progress</h2>
    <p>用于显示环状进度。</p>
    <h3>基础环形进度显示</h3>
    <div class="demo">
      <zp-circle-progress :cpOption="cpOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-circle-progress :cpOption="cpOption1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      cpOption1: {
        // 百分比
        percentage: 20,
        // 开始颜色
        startColor: '#ff8400',
        // 结束颜色
        endColor: '#ff8400'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>渐变色环形进度显示</h3>
    <div class="demo">
      <zp-circle-progress :cpOption="cpOption2">
        <div slot="cpInfo">当前：60%</div>
      </zp-circle-progress>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-circle-progress :cpOption="cpOption2" &gt;
  &lt;div slot="cpInfo"&gt;当前：60%&lt;/div&gt;
&lt;/zp-circle-progress&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      cpOption1: {
        // 百分比
        percentage: 20,
        // 开始颜色
        startColor: '#ff0000',
        // 结束颜色
        endColor: '#ff8400',
        // 背景环颜色
        strokeColor: '#ddd'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>动态环形进度显示</h3>
    <div class="demo">
      <div class="flex">
        <zp-circle-progress :cpOption="cpOption3" @cp-action="changeProgress">
          <div slot="cpInfo">{{ `${cpOption3.percentage}%` }}</div>
        </zp-circle-progress>
        <zp-circle-progress :cpOption="cpOption4">
          <div slot="cpInfo">{{ `${cpOption4.percentage}%` }}</div>
        </zp-circle-progress>
      </div>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-circle-progress :cpOption="cpOption3" @cp-action="changeProgress"&gt;
  &lt;div slot="cpInfo"&gt;{ {cpOption3.percentage} }&lt;/div&gt;
&lt;/zp-circle-progress&gt;
&lt;zp-circle-progress :cpOption="cpOption4"&gt;
  &lt;div slot="cpInfo"&gt;{ {cpOption4.percentage} }&lt;/div&gt;
&lt;/zp-circle-progress&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      cpOption3: {
        // 百分比
        percentage: 0,
        // 开始颜色
        startColor: '#006000',
        // 结束颜色
        endColor: '#79ff79'
      },
      cpOption4: {
        // 百分比
        percentage: 0,
        // 直径
        diameter: 200,
        // 笔画宽度
        strokeWidth: 12,
        // 开始颜色
        startColor: '#000079',
        // 结束颜色
        endColor: '#acd6ff'
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.cpOption3.percentage = this.getPer()
      this.cpOption4.percentage = this.getPer()
    }, 3000)
  },
  methods: {
    getPer () {
      return Math.floor(Math.random() * (99 - 1)) + 1
    },
    // 自定义事件
    changeProgress () {
      // 同步百分比
      this.cpOption4.percentage = this.cpOption3.percentage
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
        cpOption1: {
          percentage: 20,
          startColor: '#ff8400',
          endColor: '#ff8400'
        },
        cpOption2: {
          percentage: 60,
          startColor: '#ff0000',
          endColor: '#ff8400',
          strokeColor: '#ddd'
        },
        cpOption3: {
          percentage: 0,
          startColor: '#006000',
          endColor: '#79ff79'
        },
        cpOption4: {
          percentage: 0,
          diameter: 200,
          strokeWidth: 12,
          startColor: '#000079',
          endColor: '#acd6ff'
        }
      }
    },
    mounted () {
      setInterval(() => {
        this.cpOption3.percentage = this.getPer()
        this.cpOption4.percentage = this.getPer()
      }, 3000)
    },
    methods: {
      getPer () {
        return Math.floor(Math.random() * (99 - 1)) + 1
      },
      changeProgress () {
        this.cpOption4.percentage = this.cpOption3.percentage
      }
    }
  }
</script>

<style>
  .flex {
    display: flex;
  }
  .flex .zp-cp-outer:last-child {
    margin-left: 30px;
  }
</style>