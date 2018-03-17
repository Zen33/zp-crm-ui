<template>
  <div>
    <h2>文字提示 Tooltip</h2>
    <p>用以展示鼠标悬停提示信息。</p>
    <div class="demo">
      <div class="tooltip-box">
        <div class="tooltip-top">
          <zp-tooltip placement="top-start" content="上左 Top Left">
            <button class="zp-btn">上左</button>
          </zp-tooltip>
          <zp-tooltip placement="top" content="上中 Top">
            <button class="zp-btn">上中</button>
          </zp-tooltip>
          <zp-tooltip placement="top-end" content="上右 Top Right">
            <button class="zp-btn">上右</button>
          </zp-tooltip>
        </div>
        <div class="tooltip-left">
          <zp-tooltip placement="left-start" content="左上 Left Top">
            <button class="zp-btn">左上</button>
          </zp-tooltip>
          <zp-tooltip placement="left" content="左中 Left">
            <button class="zp-btn">左中</button>
          </zp-tooltip>
          <zp-tooltip placement="left-end" content="左下 Left Bottom">
            <button class="zp-btn">左下</button>
          </zp-tooltip>
        </div>
        <div class="tooltip-right">
          <zp-tooltip placement="right-start" content="右上 Right Top">
            <button class="zp-btn">右上</button>
          </zp-tooltip>
          <zp-tooltip placement="right" content="右中 Right">
            <button class="zp-btn">右中</button>
          </zp-tooltip>
          <zp-tooltip placement="right-end" content="右下 Right Bottom">
            <button class="zp-btn">右下</button>
          </zp-tooltip>
        </div>
        <div class="tooltip-bottom">
          <zp-tooltip placement="bottom-start" content="下左 Bottom Left">
            <button class="zp-btn">下左</button>
          </zp-tooltip>
          <zp-tooltip placement="bottom" content="下中 Bottom">
            <button class="zp-btn">下中</button>
          </zp-tooltip>
          <zp-tooltip placement="bottom-end" content="下右 Bottom Right">
            <button class="zp-btn">下右</button>
          </zp-tooltip>
        </div>
      </div>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tooltip placement="注1" content="注2"&gt;
  &lt;button class="zp-btn"&gt;鼠标悬停提示信息&lt;button&gt;
&lt;/zp-tooltip&gt;
&lt;!--注1：Tooltip提示位置，共9个，分别为：--&gt;
&lt;!--top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end--&gt;
&lt;!--注2：Tooltip提示内容。--&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<style>
  .tooltip-box {
    width: 350px;
  }
  .tooltip-box .tooltip-top {
    text-align: center;
  }
  .tooltip-box .tooltip-left {
    float: left;
    width: 50px;
  }
  .tooltip-box .tooltip-right {
    float: right;
    width: 50px;
  }
  .tooltip-box .tooltip-bottom {
    text-align: center;
    clear: both;
  }
  .tooltip-box .zp-tt-wrap {
    margin: 5px;
  }
</style>