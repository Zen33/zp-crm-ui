<template>
  <div>
    <h2>滑块 Slider</h2>
    <p>拖动手柄实时更新数据或范围。</p>
    <h3>基础滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption1" class="slider-short"/>
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
      <zp-slider :sliderOption="slOption2" class="slider-short"/>
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
      <zp-slider :sliderOption="slOption3" @slider-action="showVal" class="slider-short"/>
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
    <h3>垂直滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption4" @slider-action="showVal2"/>
      <p>
        <label ref="showLab2">33 - 54</label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-slider :slOption="slOption4" @slider-action="showVal2"/&gt;
&lt;p&gt;
  &lt;label ref="showLab2"&gt;33 - 54&lt;/label&gt;
&lt;/p&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      slOption4: {
        // 当前值
        value: [33, 54],
        // 垂直滑块
        isVertical: true,
        // 不显示Tip
        showTooltip: false
      }
    }
  },
  methods: {
    showVal2 (val) { // Slider回调，参数为当前值
      this.$refs.showLab2.textContent = val.join(' - ')
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>固定滑块</h3>
    <div class="demo">
      <zp-slider :sliderOption="slOption5" class="slider-short"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-slider :slOption="slOption5" class="slider-short"/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      slOption5: {
        value: [20, 40],
        // 固定滑块
        fixed: true
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
        },
        slOption4: {
          value: [33, 54],
          isVertical: true,
          showTooltip: false
        },
        slOption5: {
          // step: 10,
          value: [20, 40],
          fixed: true
        }
      }
    },
    methods: {
      showVal (val) {
        this.$refs.showLab.textContent = val.join(' - ')
      },
      showVal2 (val) {
        this.$refs.showLab2.textContent = val.join(' - ')
      }
    }
  }
</script>

<style>
  .slider-short {
    width: 50%;
  }
</style>