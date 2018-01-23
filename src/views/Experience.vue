<template>
  <div>
    <h2>经验值 Experience</h2>
    <p>用于展示当前经验值。</p>
    <h3>静态经验值显示</h3>
    <div class="demo">
      <zp-experience :expOption="expOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-experince :expOption="expOption1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      expOption1: {
        // 经验值段位
        data: [{
          value: 0
        }, {
          value: 500
        }, {
          value: 1000
        }],
        // 当前经验值
        score: 600
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制经验值显示</h3>
    <div class="demo">
      <zp-experience :expOption="expOption2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-experince :expOption="expOption2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    expOption2: {
      // 经验值段位
      data: [{
        name: '白银', // 描述
        value: 1000
      }, {
        name: '黄金',
        value: 10000
      }, {
        name: '至尊',
        value: 100000
      }],
      // 经验值
      score: 0
    }
  },
  mounted () {
    const myPromise = new Promise((resolve, reject) => {
      // 模拟异步请求
      setTimeout(() => {
        resolve(5000)
      }, 1000)
    })
    myPromise.then(res => {
      this.expOption2.score = res
    })
  }
}</code></pre>
      </div>
    </div>
    <h3>动态展示</h3>
    <div class="demo">
      <zp-experience :expOption="expOption3" @exp-action="showScore" />
      <p>
        当前经验值：<label ref="score"></label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-experince :expOption="expOption3" @exp-action="showScore" /&gt;
当前经验值：&lt;lable ref="score"&gt;&lt;/label&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    expOption3: {
      // 经验值段位
      data: [{
        name: 'VIP1',
        value: 200
      }, {
        name: 'VIP2',
        value: 500
      }, {
        name: 'VIP3',
        value: 1000
      }, {
        name: 'VIP4',
        value: 1200
      }],
      // 经验值
      score: 0,
      // 经验值前景色
      ftColor: '#fe8964',
      // 经验值背景色
      bgColor: '#9fc9fe'
    }
  },
  mounted () {
    this.$refs.score.textContent = 0
    setInterval(() => {
      // 动态随机显示
      const score = Math.floor(Math.random() * (1199 - 202)) + 201
      this.expOption3.score = score
    }, 3000)
  },
  methods: {
    showScore (val) { // 自定义事件
      this.$refs.score.textContent = val
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
        expOption1: {
          data: [{
            value: 0
          }, {
            value: 500
          }, {
            value: 1000
          }],
          score: 600
        },
        expOption2: {
          data: [{
            name: '白银',
            value: 1000
          }, {
            name: '黄金',
            value: 10000
          }, {
            name: '至尊',
            value: 100000
          }],
          score: 0
        },
        expOption3: {
          data: [{
            name: 'VIP1',
            value: 200
          }, {
            name: 'VIP2',
            value: 500
          }, {
            name: 'VIP3',
            value: 1000
          }, {
            name: 'VIP4',
            value: 1200
          }],
          score: 0,
          ftColor: '#fe8964',
          bgColor: '#9fc9fe'
        }
      }
    },
    mounted () {
      this.$refs.score.textContent = 0
      this.expOption3.score = 0
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(5000)
        }, 1000)
      })
      myPromise.then(res => {
        this.expOption2.score = res
      })
      setInterval(() => {
        const score = Math.floor(Math.random() * (1199 - 202)) + 201
        this.expOption3.score = score
      }, 3000)
    },
    methods: {
      showScore (val) {
        this.$refs.score.textContent = val
      }
    }
  }
</script>

<style>
  .zp-exp {
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>