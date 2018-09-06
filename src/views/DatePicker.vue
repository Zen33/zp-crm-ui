<template>
  <div>
    <h2>日期选择 Date Picker</h2>
    <p>用以完成日期的选择。</p>
    <h3>基础日期选择器</h3>
    <div class="demo">
      <zp-date-picker v-model="date1" placeholder="选择日期" />
      <zp-date-picker v-model="date2" type="year" format="yyyy年" placeholder="选择年" />
      <zp-date-picker v-model="date3" type="month" format="yyyy-MM" placeholder="选择月" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-date-picker v-model="date1" /&gt;
&lt;zp-date-picker v-model="date2" type="year" format="yyyy年" placeholder="选择年" /&gt;
&lt;zp-date-picker v-model="date3" type="month" format="yyyy-MM" placeholder="选择月" /&gt;
&lt;!-- type: calendar/year/month/range --&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date1: null,
      date2: null,
      date3: null
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>选择日期范围</h3>
    <div class="demo">
      <zp-date-picker
        v-model="date4"
        type="range"
        :disabledDate="disabledDate"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-date-picker
  v-model="date4"
  type="range"
  :disabledDate="disabledDate"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date4: []
    }
  },
  methods: {
    disabledDate (time) {
      return time.getTime() < Date.now()
    }
  },
  created () {
    const date = new Date()
    date.setDate(date.getDate() + 7)
    this.date4 = [new Date(), new Date(date)]
  }
}</code></pre>
      </div>
    </div>
    <h3>年历</h3>
    <div class="demo">
      <zp-almanac-picker
        v-model="date5"
        ref="picker"
        append-button
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        range-separator="至"
        :disabledDate="disabledDate"
        @change="handleChange"
      />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-almanac-picker
    v-model="date5"
    ref="picker"
    append-button
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    range-separator="至"
    :disabledDate="disabledDate"
    @change="handleChange"
  /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
    data () {
      return {
        date5: []
      }
    },
    methods: {
      handleChange (date) { // change事件
        console.log('bingo')
      }
    },
    created () {
      const date = new Date();
      date.setDate(date.getDate() + 7)
      this.date5 = [new Date(), new Date(date)]
    }
  }</code></pre>
      </div>
    </div>
    <h3>独立组件</h3>
    <div class="demo">
      <zp-calendar v-model="date6" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-calendar v-model="date6" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      date6: null
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
        date2: null,
        date3: null,
        date4: [],
        date5: [],
        date6: null
      }
    },
    methods: {
      disabledDate (time) {
        return time.getTime() < Date.now()
      },
      handleChange (date) {
        console.log('bingo')
      }
    },
    created () {
      const date = new Date()
      date.setDate(date.getDate() + 7)
      this.date4 = [new Date(), new Date(date)]
      this.date5 = [new Date(), new Date(date)]
    }
  }
</script>

<style>

</style>