<template>
  <div>
    <h2>迷你图 Sparkline</h2>
    <p>一类信息体积小和数据密度高的图表。（更多功能待完善）</p>
    <h3>折线图</h3>
    <div class="demo">
      <sparkline :data="spData1" :limit="spData1.length" width="200" height="50" :chartType="['line']" :lineStyles="spLineStyles1" :spotStyles="spSpotStyles1" :refLineType="spRefLineType1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline
  :data="spData1"
  :limit="spData1.length"
  width="200"
  height="50"
  :chartType="['line']"
  :lineStyles="spLineStyles1"
  :spotStyles="spSpotStyles1"
  :refLineType="spRefLineType1" /&gt;</code></pre>
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
      },
      // 节点样式
      spSpotStyles1: {
        strokeOpacity: 0,
        fillOpacity: 0
      },
      // 是否有参考线
      spRefLineType1: false
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>曲线图</h3>
    <div class="demo">
      <sparkline :data="spData2" :limit="spData2.length" width="200" height="50" :chartType="['curve']" :curveStyles="spCurveStyles2" :spotStyles="spSpotStyles2" :refLineType="spRefLineType2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline
  :data="spData2"
  :limit="spData2.length"
  width="200"
  height="50"
  :chartType="['curve']"
  :curveStyles="spCurveStyles2"
  :spotStyles="spSpotStyles2"
  :refLineType="spRefLineType2" /&gt;</code></pre>
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
      },
      // 节点样式
      spSpotStyles2: {
        strokeOpacity: 0,
        fillOpacity: 0
      },
      // 是否有参考线
      spRefLineType2: false
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制图表</h3>
    <div class="demo sparkline-with-text">
      <sparkline :data="spData3" :limit="spData3.length" :spotlight="spIndex3" width="200" height="50" :chartType="['curve']" :curveStyles="spCurveStyles3" :spotStyles="spSpotStyles3" :refLineStyles="spRefLineStyles3" :text="`${spData3[spIndex3]}`" :textStyles="spTextStyles3" :mouseEvents="spMouseEvents3" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline
  :data="spData3"
  :limit="spData3.length"
  :spotlight="spIndex3"
  width="200"
  height="50"
  :chartType="['curve']"
  :curveStyles="spCurveStyles3"
  :spotStyles="spSpotStyles3"
  :refLineStyles="spRefLineStyles3"
  :text="`${spData3[spIndex3]}`"
  :textStyles="spTextStyles3" /&gt;</code></pre>
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
      // 文本样式
      spTextStyles3: {
        color: '#d14',
        fontSize: '10px'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>柱状图</h3>
    <div class="demo sparkline-with-text">
      <sparkline :data="spData4" :limit="spData4.length" width="200" height="50" :chartType="['bar', 'line']" :lineStyles="spLineStyles4" :barStyles="spBarStyles4" :spotStyles="spSpotStyles4" :mouseEvents="spMouseEvents4" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;sparkline
  :data="spData4"
  :limit="spData4.length"
  width="200"
  height="50"
  :chartType="['bar', 'line']"
  :lineStyles="spLineStyles4"
  :barStyles="spBarStyles4"
  :spotStyles="spSpotStyles4" /&gt;</code></pre>
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
      spSpotStyles4: {
        strokeOpacity: 0,
        fillOpacity: 0
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
        spData1: (() => {
          const len = 50
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spLineStyles1: {
          stroke: '#54a5ff'
        },
        spSpotStyles1: {
          strokeOpacity: 0,
          fillOpacity: 0
        },
        spRefLineType1: false,
        spData2: (() => {
          const len = 10
          return Array.from({
            length: len
          }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles2: {
          stroke: '#54a5ff'
        },
        spSpotStyles2: {
          strokeOpacity: 0,
          fillOpacity: 0
        },
        spRefLineType2: false,
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
          color: '#d14',
          fontSize: '10px'
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
        spSpotStyles4: {
          strokeOpacity: 0,
          fillOpacity: 0
        },
        spMouseEvents4 (evt, data, pos) {

        }
      }
    }
  }
</script>

<style>
  .sparkline-with-text .sparkline-wrap {
    position: relative;
    margin-top: 20px;
  }
  .sparkline-with-text .sparkline-text {
    position: absolute;
    top: -20px;
  } 
</style>