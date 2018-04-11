<template>
  <div>
    <h2>迷你图 Sparkline</h2>
    <p>一类信息体积小和数据密度高的图表。</p>
    <h3>折线图</h3>
    <div class="demo">
      <sparkline :indicatorStyles="spIndicatorStyles1">
        <sparklineLine :data="spData1" :limit="spData1.length" :styles="spLineStyles1" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline :indicatorStyles="spIndicatorStyles1"&gt;
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
      // 指示器样式
      spIndicatorStyles1: false,
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
      <sparkline>
        <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline&gt;
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
    <h3>定制视图</h3>
    <div class="demo">
      <sparkline width="100" height="30" :indicatorStyles="spIndicatorStyles3" :tooltipProps="spTooltipProps3">
        <sparklineCurve :data="spData3" :limit="spData3.length" :spotlight="spIndex3" :styles="spCurveStyles3" :spotStyles="spSpotStyles3" :spotProps="spSpotProps3" :refLineType="spRefLineType3" :refLineStyles="spRefLineStyles3" :textStyles="spTextStyles3" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline width="100" height="30" :indicatorStyles="spIndicatorStyles3" :tooltipProps="spTooltipProps3"&gt;
  &lt;sparklineCurve
  :data="spData3"
  :limit="spData3.length"
  :spotlight="spIndex3"
  :styles="spCurveStyles3"
  :spotStyles="spSpotStyles3"
  :spotProps="spSpotProps3"
  :refLineType="spRefLineType3"
  :refLineStyles="spRefLineStyles3"
  :textStyles="spTextStyles3" /&gt;
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
      // 结点属性
      spSpotProps3: {
        size: 2
      },
      // 参考线种类：'max', 'min', 'mean', 'avg', 'median', 'custom' or false
      spRefLineType3: 'avg',
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
      },
      // 指示器样式
      spIndicatorStyles3: {
        stroke: '#000'
      },
      // tooltip属性（通常用于自定义提示信息, formatter方法参数为数据value和颜色color对象）
      spTooltipProps3: {
        formatter (val) {
          return `当前数据为：&lt;label style="color:${val.color};font-weight:bold;"&gt;${val.value}&lt;/label&gt;`
        }
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>柱状图</h3>
    <div class="demo">
      <sparkline>
        <sparklineBar :data="spData4" :margin="spMargin4" :limit="spData4.length" :styles="spBarStyles4" :refLineStyles="spRefLineStyles4" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline&gt;
  &lt;sparklineBar
  :data="spData4"
  :margin="spMargin4"
  :limit="spData4.length"
  :styles="spBarStyles4"
  :refLineStyles="spRefLineStyles4" /&gt;
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
      // margin
      spMargin4: 2,
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
      <sparkline :styles="spStyles5">
        <sparklineLine :data="spData5" :limit="spData5.length" :styles="spLineStyles5" />
        <sparklineLine :data="spData6" :limit="spData6.length" :styles="spLineStyles6" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline :styles="spStyles5"&gt;
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
      <sparkline>
        <sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="10" :styles="spLineStyles7" />
        <sparklineBar :data="spData8" :limit="10" :styles="spBarStyles8" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline&gt;
  &lt;sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="20" :styles="spLineStyles7" /&gt;
  &lt;sparklineBar :data="spData8" :limit="20" :styles="spBarStyles8" /&gt;
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
      },
      spData8: (() => {
        const len = 20
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })(),
      spBarStyles8: {
        fill: '#d14',
        fillOpacity: 0.3
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
      this.spData7.push(this.rndData())
      this.spData8.push(this.rndData())
    }, 100)
  }
}</code></pre>
      </div>
    </div>
    <h3>饼状图</h3>
    <div class="demo">
      <sparkline>
        <sparklinePie :data="spData9" />
        <sparklinePie :data="spData10" />
      </sparkline>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline&gt;
  &lt;sparklineBar :data="spData9" /&gt;
  &lt;sparklineBar :data="spData10" /&gt;
&lt;/sparkline&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 饼状图数据跟以上图形有区别，数据包含数据值及颜色值，例如[{value: 1, color: '#000'}...]
      spData9: this.rndData2(),
      spData10: this.rndData2(1)
    }
  },
  methods: {
    rndData2 (len = 20) {
      return Array.from({
        length: len % 2 === 0 ? 1 : 3
      }, () => {
        return {
          value: Math.floor(Math.random() * (len + 5)),
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
        }
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
        spIndicatorStyles1: false,
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
        spIndicatorStyles3: {
          stroke: '#000'
        },
        spSpotStyles3: {
          fill: '#54a5ff'
        },
        spSpotProps3: {
          size: 2
        },
        spRefLineType3: 'avg',
        spRefLineStyles3: {
          stroke: '#d14',
          strokeOpacity: 1,
          strokeDasharray: '2, 2'
        },
        spIndex3: 3,
        spTextStyles3: {
          fill: '#d14',
          fontSize: '10'
        },
        spTooltipProps3: {
          formatter (val) {
            return `当前数据为：<label style="color:${val.color};font-weight:bold;">${val.value}</label>`
          }
        },
        spMouseEvents3 (evt, data, pos) {
          // if (evt === 'mousedown') {
          //   console.log(data, pos)
          // }
        },
        spData4: (() => {
          const len = 10
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spMargin4: 2,
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
        },
        spData8: (() => {
          const len = 20
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spBarStyles8: {
          fill: '#d14',
          fillOpacity: 0.3
        },
        spData9: this.rndData2(),
        spData10: this.rndData2(1)
      }
    },
    methods: {
      rndData () {
        const seed = Math.floor(Math.random() * 20)
        return Math.random() < 0.5 ? -seed : seed
      },
      rndData2 (len = 20) {
        return Array.from({
          length: len % 2 === 0 ? 1 : 3
        }, () => {
          return {
            value: Math.floor(Math.random() * (len + 5)),
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
          }
        })
      }
    },
    created () {
      setInterval(() => {
        this.spData7.push(this.rndData())
        this.spData8.push(this.rndData())
        // this.spData10 = this.rndData2()
      }, 100)
    }
  }
</script>
