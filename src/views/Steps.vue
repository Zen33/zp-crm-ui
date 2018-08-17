<template>
  <div>
    <h2>步骤条 Steps</h2>
    <p>用于展示当前流程步骤。</p>
    <h3>基础步骤条</h3>
    <div class="demo">
      <zp-steps :stepsOption="stepsOption1" style="margin: 10px auto 10px 10px" />
      <button @click="nextStep1">下一步</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-steps :stepsOption="stepsOption1" /&gt;
&lt;button @click="nextStep1"&gt;下一步&lt;button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      stepsOption1: {
        // 当前步骤信息
        data: ['步骤一', '步骤二', '步骤三'],
        // 当前步骤
        step: 0
      }
    }
  },
  methods: {
    nextStep1 () {
      if (this.stepsOption1.step >= this.stepsOption1.data.length - 1) {
        this.stepsOption1.step = 0
      } else {
        this.stepsOption1.step += 1
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制步骤条</h3>
    <div class="demo">
      <zp-steps :stepsOption="stepsOption2" style="margin: 10px auto 0 10px" />
      <button @click="nextStep2">下一步</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-steps :stepsOption="stepsOption2" /&gt;
&lt;button @click="nextStep2"&gt;下一步&lt;button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    stepsOption2: {
      data: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      step: 1,
      // 当前步骤信息位置：right/bottom
      position: 'right',
      // 已完成步骤颜色
      ftColor: '#fe8964',
      // 未完成步骤颜色
      bgColor: '#9fc9fe'
    }
  },
  methods: {
    nextStep2 () {
      if (this.stepsOption2.step >= this.stepsOption2.data.length - 1) {
        this.stepsOption2.step = 0
      } else {
        this.stepsOption2.step += 1
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>竖向步骤条</h3>
    <div class="demo">
      <zp-steps :stepsOption="stepsOption3" @steps-action="showStep" style="margin-top: 10px;"/>
      <button @click="nextStep3">下一步</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-steps :stepsOption="stepsOption3" @steps-action="showStep" /&gt;
&lt;button @click="nextStep3"&gt;下一步&lt;button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    stepsOption3: {
      data: ['步骤一', '步骤二', '步骤三'],
      step: 0,
      // 是否为竖向显示
      isVertical: true
    }
  },
  methods: {
    nextStep3 () {
      if (this.stepsOption3.step >= this.stepsOption3.data.length - 1) {
        this.stepsOption3.step = 0
      } else {
        this.stepsOption3.step += 1
      }
    },
    showStep () {
      this.$info(`当前步骤：${this.stepsOption3.step + 1}`)
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
        stepsOption1: {
          data: ['步骤一', '步骤二', '步骤三'],
          step: 0
        },
        stepsOption2: {
          data: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
          step: 1,
          position: 'right',
          ftColor: '#fe8964',
          bgColor: '#9fc9fe'
        },
        stepsOption3: {
          data: ['步骤一', '步骤二', '步骤三'],
          step: 0,
          isVertical: true
        }
      }
    },
    methods: {
      nextStep1 () {
        if (this.stepsOption1.step >= this.stepsOption1.data.length - 1) {
          this.stepsOption1.step = 0
        } else {
          this.stepsOption1.step += 1
        }
      },
      nextStep2 () {
        if (this.stepsOption2.step >= this.stepsOption2.data.length - 1) {
          this.stepsOption2.step = 0
        } else {
          this.stepsOption2.step += 1
        }
      },
      nextStep3 () {
        if (this.stepsOption3.step >= this.stepsOption3.data.length - 1) {
          this.stepsOption3.step = 0
        } else {
          this.stepsOption3.step += 1
        }
      },
      showStep () {
        this.$info(`当前步骤：${this.stepsOption3.step + 1}`)
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