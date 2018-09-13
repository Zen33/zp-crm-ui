<template>
  <div>
    <h2>时间选择 Time Picker</h2>
    <p>用以完成时间的选择。</p>
    <h3>基础时间选择器</h3>
    <div class="demo">
      <zp-time-picker v-model="time1" placeholder="选择时间" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-time-picker v-model="time1" placeholder="选择时间" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      time1: null
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>禁用时间选择器</h3>
    <div class="demo">
      <zp-time-picker disabled v-model="time2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-time-picker disabled v-model="time2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      time2: new Date()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制时间选择器</h3>
    <div class="demo">
      <zp-time-picker v-model="time3" placeholder="选择时间" :disabledHours="disHour" :disabledMinutes="disMin" type="nonsecond" format="HH:mm A" am-pm-mode="A" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-time-picker
  v-model="time3"
  placeholder="选择时间"
  :disabledHours="disHour"
  :disabledMinutes="disMin"
  type="nonsecond"
  format="HH:mm A"
  am-pm-mode="A"
/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      time3: null
    }
  },
  methods: {
    disHour () {
      return [...Array(24).keys()].filter(value => value % 3 !== 0)
    },
    disMin () {
      return [...Array(60).keys()].filter(value => value % 10 !== 0)
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
        time1: null,
        time2: new Date(),
        time3: null
      }
    },
    methods: {
      disHour () {
        return [...Array(24).keys()].filter(value => value % 3 !== 0)
      },
      disMin () {
        return [...Array(60).keys()].filter(value => value % 10 !== 0)
      },
      disSec () {
        return [...Array(60).keys()].filter(value => value % 30 !== 0)
      }
    }
  }
</script>