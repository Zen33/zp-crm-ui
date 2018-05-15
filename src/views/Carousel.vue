<template>
  <div>
    <h2>轮播 Carousel</h2>
    <p>基于命令行驱动的轻量级反馈信息。</p>
    <h3>基础轮播</h3>
    <div class="demo">
      <zp-carousel>
        <zp-carousel-item v-for="item in 2">
          {{ item }}
        </zp-carousel-item>
      </zp-carousel>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-carousel&gt;
  &lt;zp-carousel-item v-for="item in 2"&gt;
    { { item } }
  &lt;/zp-carousel-item&gt;
&lt;/zp-carousel&gt;</code></pre>
      </div>
    </div>
    <h3>定制轮播</h3>
    <div class="demo">
      <zp-carousel height="233px" :hasArrow="hasArrow" interval="5000" :autoplay="autoplay" @cal-action="change" style="width: 500px">
        <zp-carousel-item v-for="item in items" :label="item.name">
          {{ item.value }}
        </zp-carousel-item>
      </zp-carousel>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-carousel height="233px" :hasArrow="hasArrow" interval="5000" :autoplay="autoplay" @cal-action="change" style="width: 500px"&gt;
  &lt;zp-carousel-item v-for="item in items" :label="item.name"&gt;
    { { item.value } }
  &lt;/zp-carousel-item&gt;
&lt;/zp-carousel&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      items: [{
        name: '1',
        value: '轮播1'
      }, {
        name: '2',
        value: '轮播2'
      }, {
        name: '3',
        value: '轮播3'
      }],
      // 是否显示左右切换箭头
      hasArrow: false,
      // 是否自动轮播
      autoplay: true
    }
  },
  methods: {
    change (now) {
      this.$info(`当前轮播序号为：${now}`, {
        showClose: false,
        duration: 6000
      })
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
        items: [{
          name: '1',
          value: '轮播1'
        }, {
          name: '2',
          value: '轮播2'
        }, {
          name: '3',
          value: '轮播3'
        }],
        hasArrow: false,
        autoplay: true
      }
    },
    methods: {
      change (now) {
        this.$info(`当前轮播序号为：${now}`, {
          showClose: false,
          duration: 6000
        })
      }
    }
  }
</script>

<style>
.zp-cal-wrapper {
  border: 1px solid #54a5ff;
  border-radius: 5px;
}
.zp-cal-item {
  text-align: center;
  line-height: 200px;
  background: rgba(238, 238, 238, .3);
}
.zp-cal-item:nth-last-child(odd) {
  background: rgba(81, 165, 255, .3);
}
</style>