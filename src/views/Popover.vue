<template>
  <div>
    <h2>气泡信息 Popover</h2>
    <p>与文字提示类似，提供更为丰富的数据呈现。（参数请参考 Tooltip）</p>
    <h3>基础气泡信息</h3>
    <div class="demo">
      <zp-popover ref="pop1" content="这是一个基础气泡信息"/>
      <button class="zp-btn" v-popover:pop1>点击</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-popover ref="pop1" content="这是一个基础气泡信息"/&gt;
&lt;button class="zp-btn" v-popover:pop1"&gt;点击&lt;/button&gt;</code></pre>
      </div>
    </div>
    <h3>定制气泡信息</h3>
    <div class="demo">
      <zp-popover ref="pop2" placement="right" trigger="hover" width="150">
        <zp-circle-progress :cpOption="cpOption">
          <div>当前：60%</div>
        </zp-circle-progress>
      </zp-popover>
      <input class="zp-input" type="text" v-popover:pop2 />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-popover ref="pop2" placement="right" trigger="hover" width="150"&gt;
  &lt;zp-circle-progress :cpOption="cpOption"&gt;
    &lt;div&gt;当前：60%&lt;/div&gt;
  &lt;/zp-circle-progress&gt;
&lt;/zp-popover&gt;
&lt;input class="zp-input" type="text" v-popover:pop2 /&gt;
&lt;!--placement：Popover提示位置，共9个，分别为：--&gt;
&lt;!--top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end--&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cpOption: {
          percentage: 60,
          startColor: '#ff8400',
          endColor: '#ff8400'
        }
      }
    }
  }
</script>

<style>

</style>