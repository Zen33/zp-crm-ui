<template>
  <div>
    <h2>迷你图 Sparkline</h2>
    <p>一类信息体积小和数据密度高的图表。（更多功能待完善）</p>
    <h3>折线图</h3>
    <div class="demo">
      <sparkline width="200" height="50">
        <sparklineLine :data="spData1" :limit="spData1.length" :styles="spLineStyles1" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50"&gt;
  &lt;sparklineLine :data="spData1" :limit="spData1.length" :styles="spLineStyles1" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 数据集合
      spData1: (() => {
        const len = 50
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      // 折线样式
      spLineStyles1: {
        stroke: '#54a5ff'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>曲线图</h3>
    <div class="demo">
      <sparkline width="200" height="50">
        <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50"&gt;
  &lt;sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 数据集合
      spData2: (() => {
        const len = 10
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      // 曲线样式
      spCurveStyles2: {
        stroke: '#54a5ff'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制图表</h3>
    <div class="demo sparkline-with-text">
      <sparkline width="200" height="50">
        <sparklineCurve :data="spData3" :limit="spData3.length" :spotlight="spIndex3" :styles="spCurveStyles3" :spotStyles="spSpotStyles3" :refLineStyles="spRefLineStyles3" :textStyles="spTextStyles3" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50"&gt;
  &lt;sparklineCurve :data="spData3" :limit="spData3.length" :spotlight="spIndex3" :styles="spCurveStyles3" :spotStyles="spSpotStyles3" :refLineStyles="spRefLineStyles3" :textStyles="spTextStyles3" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 数据集合
      spData3: (() => {
        const len = 15
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      // 曲线样式
      spCurveStyles3: {
        stroke: '#54a5ff',
        fill: '#000'
      },
      // 结点样式
      spSpotStyles3: {
        fill: '#54a5ff'
      },
      // 参考线样式
      spRefLineStyles3: {
        stroke: '#d14',
        strokeOpacity: 1,
        strokeDasharray: '2, 2'
      },
      // 当前结点
      spIndex3: 3,
      // 字体样式
      spTextStyles3: {
        fill: '#d14',
        fontSize: '12'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>柱状图</h3>
    <div class="demo">
      <sparkline width="200" height="50">
        <sparklineBar :data="spData4" :limit="spData4.length" :styles="spBarStyles4" :refLineStyles="spRefLineStyles4" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50"&gt;
  &lt;sparklineBar :data="spData4" :limit="spData4.length" :styles="spBarStyles4" :refLineStyles="spRefLineStyles4" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 数据集合
      spData4: (() => {
        const len = 10
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      spBarStyles4: {
        fill: '#54a5ff'
      },
      spLineStyles4: {
        stroke: '#d14'
      },
      spRefLineStyles4: {
        stroke: '#d14',
        strokeOpacity: 1,
        strokeDasharray: '3, 3'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>混合视图</h3>
    <div class="demo">
      <sparkline width="200" height="50" :styles="spStyles5">
        <sparklineLine :data="spData5" :limit="spData5.length" :styles="spLineStyles5" />
        <sparklineLine :data="spData6" :limit="spData6.length" :styles="spLineStyles6" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50" :styles="spStyles5"&gt;
  &lt;sparklineLine :data="spData5" :limit="spData5.length" :styles="spLineStyles5" /&gt;
  &lt;sparklineLine :data="spData6" :limit="spData6.length" :styles="spLineStyles6" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 画布样式
      spStyles5: {
        background: '#ddd'
      },
      spData5: (() => {
        const len = 10
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      spLineStyles5: {
        stroke: '#54a5ff'
      },
      spData6: (() => {
        const len = 30
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      spLineStyles6: {
        stroke: '#d14'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>动态视图</h3>
    <div class="demo">
      <sparkline width="200" height="50">
        <sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="20" :styles="spLineStyles7" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="200" height="50"&gt;
  &lt;sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="20" :styles="spLineStyles7" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      spData7: (() => {
        const len = 30
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      spHasSpot7: true,
      spLineStyles7: {
        stroke: '#54a5ff',
        strokeWidth: 2
      }
    }
  },
  methods: {
    rndData () {
      const seed = Math.floor(Math.random() * 20)
      return Math.random() < 0.5 ? -seed : seed
    }
  },
  created () {
    setInterval(() => {
      this.spData7 = this.spData7.concat([this.rndData()])
    }, 100)
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
        spData1: (() => {
          const len = 50
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spLineStyles1: {
          stroke: '#54a5ff'
        },
        spData2: (() => {
          const len = 10
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles2: {
          stroke: '#54a5ff'
        },
        spData3: (() => {
          const len = 15
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles3: {
          stroke: '#54a5ff',
          fill: '#000'
        },
        spSpotStyles3: {
          fill: '#54a5ff'
        },
        spRefLineStyles3: {
          stroke: '#d14',
          strokeOpacity: 1,
          strokeDasharray: '2, 2'
        },
        spIndex3: 3,
        spTextStyles3: {
          fill: '#d14',
          fontSize: '12'
        },
        spMouseEvents3 (evt, data, pos) {
          if (evt === 'mousedown') {
            console.log(data, pos)
          }
        },
        spData4: (() => {
          const len = 10
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spBarStyles4: {
          fill: '#54a5ff'
        },
        spLineStyles4: {
          stroke: '#d14'
        },
        spRefLineStyles4: {
          stroke: '#d14',
          strokeOpacity: 1,
          strokeDasharray: '3, 3'
        },
        spMouseEvents4 (evt, data, pos) {

        },
        spStyles5: {
          background: '#ddd'
        },
        spData5: (() => {
          const len = 10
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spLineStyles5: {
          stroke: '#54a5ff'
        },
        spData6: (() => {
          const len = 30
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spLineStyles6: {
          stroke: '#d14'
        },
        spData7: (() => {
          const len = 30
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spHasSpot7: true,
        spLineStyles7: {
          stroke: '#54a5ff',
          strokeWidth: 2
        }
      }
    },
    methods: {
      rndData () {
        const seed = Math.floor(Math.random() * 20)
        return Math.random() < 0.5 ? -seed : seed
      }
    },
    created () {
      setInterval(() => {
        this.spData7 = this.spData7.concat([this.rndData()])
      }, 100)
    }
  }
</script>
