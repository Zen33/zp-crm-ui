<template>
  <div>
    <h2>动态数字 Dynamic Numbers</h2>
    <p>用于显示动态数字。</p>
    <h3>基础动态数字显示</h3>
    <div class="demo">
      <zp-dynamic-numbers :dnOption="dnOption1" ref="dn1" />
      <button class="zp-btn" @click="playDn1">播放</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dynamic-numbers :dnOption="dnOption1" ref="dn1" /&gt;
&lt;button class="zp-btn" @click="playDn1"&gt;播放&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight>
          <code class="javascript">export default {
  data () {
    return {
      dnOption1: {
        // 开始数字
        from: 0,
        // 结束数字
        to: 20
      }
    }
  },
  methods: {
    playDn1 () {
      this.$refs.dn1.start()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>渐变色动态数字显示</h3>
    <div class="demo">
      <zp-dynamic-numbers :dnOption="dnOption2" ref="dn2" />
      <button class="zp-btn" @click="playDn2">重播</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dynamic-numbers :dnOption="dnOption1" ref="dn2" /&gt;
&lt;button class="zp-btn" @click="playDn2"&gt;重播&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      dnOption2: {
        // 开始数字
        from: 0,
        // 结束数字
        to: 20,
        // 自动播放
        mode: 'auto',
        // 渐变色开始颜色
        startColor: '#006699',
        // 渐变色结束颜色
        endColor: '#ff0000',
        // 数字格式化（保留两位小数）
        formatter (num) {
          return num.toFixed(2)
        }
      }
    }
  },
  methods: {
    playDn2 () {
      // start方法手动开启滚动播放
      this.$refs.dn2.start()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制动态数字显示</h3>
    <div class="demo big-font-number">
      <zp-dynamic-numbers :dnOption="dnOption3" @dn-action="setNum" ref="dn3" />
      <button class="zp-btn" @click="goOnDn3">继续</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dynamic-numbers :dnOption="dnOption3" @dn-action="setNum" ref="dn3" /&gt;
&lt;button class="zp-btn" @click="goOnDn3"&gt;继续&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      num: 0,
      dnOption3: {
        // 开始数字
        from: 0,
        // 结束数字
        to: 233333,
        // 自动播放
        mode: 'auto',
        // 渐变色开始颜色
        startColor: '#ccc',
        // 渐变色结束颜色
        endColor: '#ff0000'
      }
    }
  },
  methods: {
    setNum (vm) {
      this.num = vm.num
    },
    goOnDn3 () {
      // 追加100
      const leeway = 100
      // reset方法更新滚动播放
      this.$refs.dn3.reset({
        // 开始数字
        from: this.num,
        // 结束数字
        to: (parseInt(this.num, 10) + leeway),
        // 渐变色开始颜色
        startColor: '#ff0000',
        // 渐变色结束颜色
        endColor: '#ccc'
        // 链式手动开启播放
      }).start()
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
        dnOption1: {
          from: 0,
          to: 20
        },
        dnOption2: {
          from: 0,
          to: 20,
          mode: 'auto',
          startColor: '#006699',
          endColor: '#ff0000',
          formatter (num) {
            return num.toFixed(2)
          }
        },
        num: 0,
        dnOption3: {
          from: 0,
          to: 233333,
          mode: 'auto',
          startColor: '#ccc',
          endColor: '#ff0000'
        }
      }
    },
    methods: {
      playDn1 () {
        this.$refs.dn1.start()
      },
      playDn2 () {
        this.$refs.dn2.start()
      },
      setNum (vm) {
        this.num = vm.num
      },
      goOnDn3 () {
        const leeway = 100
        this.$refs.dn3.reset({
          from: this.num,
          to: (parseInt(this.num, 10) + leeway),
          startColor: '#ff0000',
          endColor: '#ccc'
        }).start()
      }
    }
  }
</script>

<style>
  .big-font-number span.zp-dn {
    font-size: 30px;
  }
</style>