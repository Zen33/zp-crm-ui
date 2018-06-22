<template>
  <div>
    <h2>悬浮层 Sheet</h2>
    <p>用以在同一空间着重展示一类信息。</p>
    <div class="demo">
      <zp-sheet :visible.sync="top" placement="top">
        <div class="sheet-text">上方</div>
      </zp-sheet>
      <zp-sheet :visible.sync="right" placement="right">
        <div class="sheet-text">右侧</div>
      </zp-sheet>
      <zp-sheet :visible.sync="bottom" placement="bottom">
        <div class="sheet-text">下方</div>
      </zp-sheet>
      <zp-sheet :visible.sync="left" placement="left">
        <div class="sheet-text">左侧</div>
      </zp-sheet>
      <button @click="showSheet('top')">上方</button>
      <button @click="showSheet('right')">右侧</button>
      <button @click="showSheet('bottom')">下方</button>
      <button @click="showSheet('left')">左侧</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-sheet :visible.sync="注1" placement="注2"&gt;
  &lt;div"&gt;内容&lt;div&gt;
&lt;/zp-sheet&gt;
&lt;!--注1：Sheet当前状态。--&gt;
&lt;!--注2：Sheet提示位置，共4个，分别为：--&gt;
&lt;!--top/right/bottom/left--&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    methods: {
      showSheet (position) {
        const cases = {
          top: () => {
            this.top = true
          },
          right: () => {
            this.right = true
          },
          bottom: () => {
            this.bottom = true
          },
          left: () => {
            this.left = true
          }
        }
        cases[position] && cases[position]()
      }
    }
  }
</script>
<style>
  .sheet-text {
    position: relative;
    font-size: 12px;
    color: #54a5ff;
    text-align: center;
  }
  .zp-sheet-top .sheet-text,
  .zp-sheet-bottom .sheet-text {
    width: 100%;
    height: 300px;
    line-height: 300px;
  }
  .zp-sheet-right .sheet-text,
  .zp-sheet-left .sheet-text {
    width: 300px;
    height: 100vh;
    line-height: 100vh;
  }
</style>