<template>
  <div>
    <h2>动态数字 Animate Number</h2>
    <p>用于显示动态数字。</p>
    <h3>基础动态数字显示</h3>
    <div class="demo">
      <zp-animate-number :anOption="anOption1" ref="an1" />
      <button @click="playAn1">播放</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-animate-number :anOption="anOption1" ref="an1" /&gt;
&lt;button @click="playAn1"&gt;播放&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight>
          <code class="javascript">export default {
  data () {
    return {
      anOption1: {
        // 开始数字
        from: 0,
        // 结束数字
        to: 20
      }
    }
  },
  methods: {
    playAn1 () {
      this.$refs.an1.start()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>渐变色动态数字显示</h3>
    <div class="demo">
      <zp-animate-number :anOption="anOption2" ref="an2" />
      <button @click="playAn2">重播</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-animate-number :anOption="anOption1" ref="an1" /&gt;
&lt;button @click="playAn2"&gt;重播&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      anOption2: {
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
    playAn2 () {
      // start方法手动开启滚动播放
      this.$refs.an2.start()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制动态数字显示</h3>
    <div class="demo big-font-number">
      <zp-animate-number :anOption="anOption3" @an-action="setNum" ref="an3" />
      <button @click="goOnAn3">继续</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-animate-number :anOption="anOption3" @an-action="setNum" ref="an3" /&gt;
&lt;button @click="goOnAn3"&gt;继续&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      num: 0,
      anOption3: {
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
    goOnAn3 () {
      // 追加100
      const leeway = 100
      // reset方法更新滚动播放
      this.$refs.an3.reset({
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
        anOption1: {
          from: 0,
          to: 20
        },
        anOption2: {
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
        anOption3: {
          from: 0,
          to: 233333,
          mode: 'auto',
          startColor: '#ccc',
          endColor: '#ff0000'
        }
      }
    },
    methods: {
      playAn1 () {
        this.$refs.an1.start()
      },
      playAn2 () {
        this.$refs.an2.start()
      },
      setNum (vm) {
        this.num = vm.num
      },
      goOnAn3 () {
        const leeway = 100
        this.$refs.an3.reset({
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
  .big-font-number span.zp-an {
    font-size: 30px;
  }
</style>