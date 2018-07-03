<template>
  <div>
    <h2>评分 Rate</h2>
    <p>用于评定分数。</p>
    <h3>基础评分</h3>
    <div class="demo">
      <zp-rate v-model="rate1"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-rate v-model="rate1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 初始评分
      rate1: 0
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>只读评分</h3>
    <div class="demo">
      <zp-rate disabled v-model="rate2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-rate disabled v-model="rate2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 初始评分
      rate2: 3
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制评分一</h3>
    <div class="demo">
      <zp-rate allow-half v-model="rate3" :colors="['#dd2c00', '#54a5ff', '#00c853']" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-rate allow-half v-model="rate3" :colors="['#dd2c00', '#54a5ff', '#00c853']" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 初始评分
      rate3: 2.5
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制评分二</h3>
    <div class="demo icon-face">
      <zp-rate show-text empty-icon-class="zp-rate-face-empty" :icon-classes="['zp-rate-face-unhappy', 'zp-rate-face-smile', 'zp-rate-face-happy', 'zp-rate-face-shocked']" v-model="rate4" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-rate show-text empty-icon-class="zp-rate-face-empty" :icon-classes="['zp-rate-face-unhappy', 'zp-rate-face-smile', 'zp-rate-face-happy', 'zp-rate-face-shocked']" v-model="rate4" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 初始评分
      rate4: 0
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
        rate1: 0,
        rate2: 3,
        rate3: 2.5,
        rate4: 0
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: face;
    src: url(data:application/x-font-ttf;base64,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) format('truetype'),url(data:application/font-woff;base64,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) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .icon-face .zp-rate {
    font-family: face;
  }
  .zp-rate-face-empty:before {
    content: '\e9f8';
  }
  .zp-rate-face-unhappy:before {
    content: '\e9e6';
  }
  .zp-rate-face-smile:before {
    content: '\e9e2';
  }
  .zp-rate-face-happy:before {
    content: '\e9e0';
  }
  .zp-rate-face-shocked:before {
    content: '\e9f2';
  }
</style>