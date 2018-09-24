<template>
  <div>
    <h2>感应器 Sensor</h2>
    <p>用于感知元素显示，适用于特定元素不可预知显示时间的场景。</p>
    <div class="demo">
      <button @click="getTimer(1)">延时显示/隐藏 DIV 1</button>
      <button @click="getTimer(2)">延时显示/隐藏 DIV 2</button>
      <div class="sensor" v-sensor:showHint1 v-show="sensor1">
        <h3>DIV 1 - 延时了 {{ timer1 }} ms</h3>
        <div ref="sensor1"></div>
      </div>
      <div class="sensor" v-sensor:showHint2.once v-show="sensor2">
        <h3>DIV 2 - 延时了 {{ timer2 }} ms</h3>
        <div ref="sensor2"></div>
      </div>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;button @click="getTimer(1)"&gt;延时显示/隐藏 DIV 1&lt;/button&gt;
&lt;button @click="getTimer(2)"&gt;延时显示/隐藏 DIV 2&lt;/button&gt;
&lt;div v-sensor:showHint1 v-show="sensor1"&gt;
  &lt;h3&gt;DIV 1 - 延时了 { { timer1 } } ms&lt;/h3&gt;
  &lt;div ref="sensor1"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div v-sensor:showHint2.once v-show="sensor2"&gt;
  &lt;h3&gt;DIV 2 - 延时了 { { timer2 } } ms&lt;/h3&gt;
  &lt;div ref="sensor2"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      sensor1: false,
      sensor2: false,
      timer: null
    }
  },
  methods: {
    getTimer (sensor) {
      if (!this[`sensor${num}`]) {
        const timers = [1000, 2000, 1500, 2500, 3000, 500]
        this[`timer${num}`] = timers[Math.floor(Math.random() * timers.length)]
        setTimeout(() => {
          this[`sensor${num}`] = !this[`sensor${num}`]
        }, this[`timer${num}`])
      } else {
        this[`sensor${num}`] = !this[`sensor${num}`]
        this.$refs[`sensor${num}`].textContent = ''
      }
    },
    showHint1 () {
      this.$refs.sensor1.textContent = '每次显示的时候都显示该信息。'
    },
    showHint2 () {
      this.$refs.sensor2.textContent = '仅仅第一次显示的时候显示该信息。'
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
        sensor1: false,
        sensor2: false,
        timer1: null,
        timer2: null
      }
    },
    methods: {
      getTimer (num) {
        if (!this[`sensor${num}`]) {
          const timers = [1000, 2000, 1500, 2500, 3000, 500]
          this[`timer${num}`] = timers[Math.floor(Math.random() * timers.length)]
          setTimeout(() => {
            this[`sensor${num}`] = !this[`sensor${num}`]
          }, this[`timer${num}`])
        } else {
          this[`sensor${num}`] = !this[`sensor${num}`]
          this.$refs[`sensor${num}`].textContent = ''
        }
      },
      showHint1 () {
        this.$refs.sensor1.textContent = '每次显示的时候都显示该信息。'
      },
      showHint2 () {
        this.$refs.sensor2.textContent = '仅仅第一次显示的时候显示该信息。'
      }
    }
  }
</script>

<style>
  .sensor {
    background: #f7f7f7;
    margin-top: 10px;
    padding: 5px;
    border-bottom: 1px dashed #ccc;
  }
  .sensor div {
    color: #d14;
  }
</style>