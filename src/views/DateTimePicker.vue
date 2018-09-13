<template>
  <div>
    <h2>日期时间选择 Date Time Picker</h2>
    <p>用以完成日期的选择。</p>
    <h3>基础日期时间选择器</h3>
    <div class="demo">
      <zp-date-time-picker v-model="date1" placeholder="选择日期时间" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-date-time-picker v-model="date1" placeholder="选择日期时间" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date1: null
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>禁用日期时间选择器</h3>
    <div class="demo">
      <zp-date-time-picker disabled v-model="date2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-date-time-picker disabled v-model="date2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date2: new Date()
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制日期时间选择器</h3>
    <div class="demo date-time">
      <zp-date-time-picker
        v-model="date3"
        placeholder="选择日期时间"
        :disabledDate="dis"
        :disabledHours="disHour"
        :disabledMinutes="disMin"
        format="yyyy年MM月dd HH时mm分 a"
        am-pm-mode="a"
      />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-date-time-picker
  v-model="date3"
  placeholder="选择日期时间"
  :disabledDate="dis"
  :disabledHours="disHour"
  :disabledMinutes="disMin"
  format="yyyy年MM月dd HH时mm分 a"
  am-pm-mode="a"
/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date3: null
    }
  },
  methods: {
    dis (time) {
      return time.getTime() < Date.now()
    },
    disHour () {
      return [...Array(24).keys()].filter(value => value % 3 !== 0)
    },
    disMin () {
      return [...Array(60).keys()].filter(value => value % 30 !== 0)
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
        date1: null,
        date2: new Date(),
        date3: null
      }
    },
    methods: {
      dis (time) {
        return time.getTime() < Date.now()
      },
      disHour () {
        return [...Array(24).keys()].filter(value => value % 3 !== 0)
      },
      disMin () {
        return [...Array(60).keys()].filter(value => value % 30 !== 0)
      }
    }
  }
</script>

<style>
  .date-time input {
    width: 220px;
  }
</style>