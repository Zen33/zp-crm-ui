<template>
  <div>
    <h2>开关 Switch</h2>
    <p>状态切换选择器。</p>
    <h3>基础开关</h3>
    <div class="demo">
      <zp-switch :width="40" v-model="switch1" />
      <p>
        <label>当前状态：{{ switch1 }}</label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-switch v-model="switch1"/&gt;
&lt;p&gt;
  &lt;label&gt;当前状态：{ { switch1 } }&lt;/label&gt;
&lt;/p&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 开关初始状态
      switch1: true
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>不可用开关</h3>
    <div class="demo">
      <zp-switch v-model="switch1" disabled/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-switch v-model="switch1" disabled/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      switch1: true
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制开关</h3>
    <div class="demo">
        <zp-switch v-model="switch2" :width="width" :height="height" on-color="#ff8400" off-color="#006699" on-text="on" off-text="off" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-switch v-model="switch2"
  :width="width"
  :height="height"
  on-color="#ff8400"
  off-color="#006699"
  on-text="on"
  off-text="off"/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      switch2: false,
      width: 55,
      height: 22
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
        switch1: true,
        switch2: false,
        width: 55,
        height: 22
      }
    }
  }
</script>