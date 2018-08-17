<template>
  <div>
    <h2>卡片 Card</h2>
    <p>以组为单位呈现信息。</p>
    <h3>基础卡片显示</h3>
    <div class="demo">
      <zp-card :items="items1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-card :items="items1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      items1: [{
        text: '卡片 1'
      }, {
        text: '卡片 2'
      }, {
        text: '卡片 3'
      }, {
        text: '卡片 4'
      }, {
        text: '卡片 5'
      }, {
        text: '卡片 6'
      }, {
        text: '卡片 7'
      }]
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制卡片显示</h3>
    <div class="demo">
      <zp-card :items="items2" ref="card" :index="index" ft-color="#fe8964" bg-color="rgba(85, 165, 255, .73)" />
      <button @click="toPrev">向前切换</button>
      <button @click="toNext">向后切换</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-card :items="items2" ref="card" :index="index" ft-color="#fe8964" bg-color="rgba(85, 165, 255, .73)" /&gt;
&lt;button @click="toPrev"&gt;向前切换&lt;/button&gt;
&lt;button @click="toNext"&gt;向后切换&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      items2: [{
        text: '基础信息'
      }, {
        // 可引入组件
        render (h) {
          const data = (() => {
            const len = 15
            return Array.from({
              length: len
            }, () => Math.floor(Math.random() * len))
          })()
          return h('div', [
            h('sparkline', {
              attrs: {
                width: 100,
                height: 25
              }
            }, [
              h('sparklineCurve', {
                attrs: {
                  data,
                  limit: data.length,
                  styles: {
                    strokeWidth: 2,
                    stroke: '#fff'
                  }
                }
              })
            ])
          ])
        }
      }, {
        render (h) {
          return h('div', [
            h('h3', '卡片信息')
          ])
        }
      }],
      // 初始索引值
      index: 1
    }
  },
  methods: {
    toPrev () {
      this.$refs.card.prev()
    },
    toNext () {
      this.$refs.card.next()
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
        items1: [{
          text: '卡片 1'
        }, {
          text: '卡片 2'
        }, {
          text: '卡片 3'
        }, {
          text: '卡片 4'
        }, {
          text: '卡片 5'
        }, {
          text: '卡片 6'
        }, {
          text: '卡片 7'
        }],
        items2: [{
          text: '基础信息'
        }, {
          render (h) {
            const data = (() => {
              const len = 15
              return Array.from({
                length: len
              }, () => Math.floor(Math.random() * len))
            })()
            return h('div', [
              h('sparkline', {
                attrs: {
                  width: 100,
                  height: 25
                }
              }, [
                h('sparklineCurve', {
                  attrs: {
                    data,
                    limit: data.length,
                    styles: {
                      strokeWidth: 2,
                      stroke: '#fff'
                    }
                  }
                })
              ])
            ])
          }
        }, {
          render (h) {
            return h('div', [
              h('h3', '卡片信息')
            ])
          }
        }],
        index: 1
      }
    },
    methods: {
      toPrev () {
        this.$refs.card.prev()
      },
      toNext () {
        this.$refs.card.next()
      }
    }
  }
</script>
