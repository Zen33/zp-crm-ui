<template>
  <div>
    <h2>滑块 Slider</h2>
    <p>拖动滑块实时更新数据范围。</p>
    <h3>基础滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-slider :slOption="slOption1"/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      slOption1: {
        // 当前值
        value: 50
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>离散滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-slider :slOption="slOption2"/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      slOption2: {
        // 当前值
        value: 50,
        // 离散步长
        step: 10,
        // 是否显示间断点
        showStops: true
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>范围滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption3" @slider-action="showVal"/>
      <p>
        <label ref="showLab">20 - 40</label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-slider :slOption="slOption3" @slider-action="showVal"/&gt;
&lt;p&gt;
  &lt;label ref="showLab"&gt;20 - 40&lt;/label&gt;
&lt;/p&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      slOption3: {
        // 当前值
        value: [20, 40],
        // 离散步长
        step: 10
      }
    }
  },
  methods: {
    showVal (val) { // Slider回调，参数为当前值
      this.$refs.showLab.textContent = val.join(' - ')
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
        slOption1: {
          value: 50
        },
        slOption2: {
          value: 50,
          step: 10,
          showStops: true
        },
        slOption3: {
          value: [20, 40],
          step: 10
        }
      }
    },
    methods: {
      showVal (val) {
        this.$refs.showLab.textContent = val.join(' - ')
      }
    }
  }
</script>