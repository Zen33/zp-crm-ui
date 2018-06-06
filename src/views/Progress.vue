<template>
  <div>
    <h2>进度条 Progress</h2>
    <p>用于显示当前进度。</p>
    <h3>常用进度条显示</h3>
    <div class="demo">
      <zp-progress :proOption="proOption1" class="progress-short" />
      <zp-progress :proOption="proOption5" class="progress-short">
        <div class="progress-text">{{ `${proOption5.percentage}%` }}</div>
      </zp-progress>
      <zp-progress :proOption="proOption6" class="progress-short" @pro-action="changeProgress2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-progress :proOption="proOption1" /&gt;
&lt;zp-progress :proOption="proOption5"&gt;
  &lt;div&gt;{ {`${proOption5.percentage}%` } }&lt;/div&gt;
&lt;/zp-progress&gt;
&lt;zp-progress :proOption="proOption6" @pro-action="changeProgress2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      proOption1: {
        // 百分比
        percentage: 20,
        // 开始颜色
        startColor: '#ff8400',
        // 结束颜色
        endColor: '#ff8400'
      },
      proOption5: {
        percentage: 0,
        startColor: '#006699',
        endColor: 'lightblue',
        strokeWidth: 20
      },
      proOption6: {
        percentage: 0,
        startColor: '#dd2c00',
        endColor: '#dd2c00'
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.proOption5.percentage = this.proOption6.percentage = this.getPer()
    }, 3000)
  },
  methods: {
    getPer () {
      return Math.floor(Math.random() * (99 - 1)) + 1
    },
    changeProgress2 () {
      if (this.proOption6.percentage > 50) {
        this.proOption6.startColor = this.proOption6.endColor = '#00c853'
      } else {
        this.proOption6.startColor = this.proOption6.endColor = '#dd2c00'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>环形进度显示</h3>
    <div class="demo">
      <zp-progress :proOption="proOption2">
        <div>当前：60%</div>
      </zp-progress>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-progress :proOption="proOption2" &gt;
  &lt;div&gt;当前：60%&lt;/div&gt;
&lt;/zp-progress&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      proOption2: {
        // 种类：环状（默认为条状）
        type: 'circle',
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
    <h3>动态定制环形进度显示</h3>
    <div class="demo">
      <div class="flex">
        <zp-progress :proOption="proOption3" @pro-action="changeProgress">
          <div>{{ `${proOption3.percentage}%` }}</div>
        </zp-progress>
        <zp-progress :proOption="proOption4" class="m-l-30">
          <div>{{ `${proOption4.percentage}%` }}</div>
        </zp-progress>
      </div>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-progress :proOption="proOption3" @pro-action="changeProgress"&gt;
  &lt;div&gt;{ {proOption3.percentage} }&lt;/div&gt;
&lt;/zp-progress&gt;
&lt;zp-progress :proOption="proOption4"&gt;
  &lt;div&gt;{ {proOption4.percentage} }&lt;/div&gt;
&lt;/zp-progress&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      proOption3: {
        type: 'circle',
        // 百分比
        percentage: 0,
        // 开始颜色
        startColor: '#006000',
        // 结束颜色
        endColor: '#79ff79'
      },
      proOption4: {
        type: 'circle',
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
      this.proOption3.percentage = this.getPer()
      this.proOption4.percentage = this.getPer()
    }, 3000)
  },
  methods: {
    getPer () {
      return Math.floor(Math.random() * (99 - 1)) + 1
    },
    // 自定义事件
    changeProgress () {
      // 同步百分比
      this.proOption4.percentage = this.proOption3.percentage
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
        proOption1: {
          percentage: 20,
          startColor: '#ff8400',
          endColor: '#ff8400'
        },
        proOption2: {
          type: 'circle',
          percentage: 60,
          startColor: '#ff0000',
          endColor: '#ff8400',
          strokeColor: '#ddd'
        },
        proOption3: {
          type: 'circle',
          percentage: 0,
          startColor: '#006000',
          endColor: '#79ff79'
        },
        proOption4: {
          type: 'circle',
          percentage: 0,
          diameter: 200,
          strokeWidth: 12,
          startColor: '#000079',
          endColor: '#acd6ff'
        },
        proOption5: {
          percentage: 0,
          startColor: '#006699',
          endColor: 'lightblue',
          strokeWidth: 20
        },
        proOption6: {
          percentage: 0,
          startColor: '#dd2c00',
          endColor: '#dd2c00'
        }
      }
    },
    mounted () {
      setInterval(() => {
        this.proOption3.percentage = this.getPer()
        this.proOption4.percentage = this.getPer()
        this.proOption5.percentage = this.proOption6.percentage = this.getPer()
      }, 3000)
    },
    methods: {
      getPer () {
        return Math.floor(Math.random() * (99 - 1)) + 1
      },
      changeProgress () {
        this.proOption4.percentage = this.proOption3.percentage
      },
      changeProgress2 () {
        if (this.proOption6.percentage > 50) {
          this.proOption6.startColor = this.proOption6.endColor = '#00c853'
        } else {
          this.proOption6.startColor = this.proOption6.endColor = '#dd2c00'
        }
      }
    }
  }
</script>

<style>
  .flex {
    display: flex;
  }
  .flex .m-l-30 {
    margin-left: 30px;
  }
  .progress-short {
    width: 30%;
  }
  .progress-short {
    margin-bottom: 15px;
  }
  .progress-text {
    height: 100%;
    line-height: 20px;
    padding-right: 5px;
    color: #fff;
    display: inline-block;
    margin: 0 3px;
  }
</style>