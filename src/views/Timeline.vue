<template>
  <div>
    <h2>时间轴 Timeline</h2>
    <p>纵向展示连续性事件。</p>
    <h3>基础时间轴</h3>
    <div class="demo">
      <zp-timeline :tlOption="tlOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-timeline :tlOption="tlOption1"&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tlOption1: {
        data: [{
          // 节点标题
          title: '2018-01-01',
          // 节点内容
          content: '暂无&lt;br />暂无&lt;br />暂无&lt;br />暂无&lt;br />暂无&lt;br />'
        }, {
          title: '无内容',
          content: '暂无'
        }, {
          title: '无内容',
          content: '暂无'
        }]
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制时间轴</h3>
    <div class="demo">
      <zp-timeline :tlOption="tlOption2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-timeline :tlOption="tlOption2"&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tlOption2: {
        data: [{
          // 节点标题
          title: '无内容',
          // 节点内容
          content: '暂无&lt;br />暂无&lt;br />暂无&lt;br />暂无&lt;br />暂无&lt;br />',
          // 时间线颜色
          lineColor: '#ebebeb',
          // 时间线种类：solid、dotted、dashed
          lineType: 'solid',
          // 时间节点形状:square、circle
          dotShape: 'square',
          // 时间节点边框色
          dotColor: 'transparent',
          // 时间节点背景色
          dotBgColor: 'transparent'
        }, {
          title: '无内容',
          content: '暂无',
          dotColor: 'transparent',
          dotBgColor: 'transparent',
          lineColor: '#38adff',
          lineType: 'dashed'
        }, {
          title: '无内容',
          content: '暂无',
          dotColor: 'transparent',
          dotBgColor: 'transparent'
        }]
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
        tlOption1: {
          data: [{
            title: '2018-01-01',
            content: '暂无<br />暂无<br />暂无<br />暂无<br />暂无<br />'
          }, {
            title: '无内容',
            content: '暂无'
          }, {
            title: '无内容',
            content: '暂无'
          }]
        },
        tlOption2: {
          data: [{
            title: '无内容',
            content: '暂无<br />暂无<br />暂无<br />暂无<br />暂无<br />',
            lineType: 'solid',
            dotShape: 'square',
            dotColor: 'transparent',
            dotBgColor: 'transparent'
          }, {
            title: '无内容',
            content: '暂无',
            dotColor: 'transparent',
            dotBgColor: 'transparent',
            lineColor: '#38adff',
            lineType: 'dashed'
          }, {
            title: '无内容',
            content: '暂无',
            dotColor: 'transparent',
            dotBgColor: 'transparent'
          }]
        }
      }
    }
  }
</script>