<template>
  <div>
    <h2>复选框 Radio</h2>
    <p>用于一组可选项单项选择抑或选中状态。</p>
    <h3>基础单选框</h3>
    <div class="demo">
      <zp-radio v-model="radio1" label="A">单选框A</zp-radio>
      <zp-radio v-model="radio1" label="B">单选框B</zp-radio>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-radio v-model="radio1" label="A"&gt;复选框A&lt;/zp-radio&gt;
&lt;zp-radio v-model="radio1" label="B"&gt;复选框B&lt;/zp-radio&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      radio1: 'A'
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>不可用单选框</h3>
    <div class="demo">
      <zp-radio v-model="radio1" disabled label="A">单选框A</zp-radio>
      <zp-radio v-model="radio1" disabled label="B">单选框B</zp-radio>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-radio v-model="radio1" disabled label="A"&gt;复选框A&lt;/zp-radio&gt;
&lt;zp-radio v-model="radio1" disabled label="B"&gt;复选框B&lt;/zp-radio&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      radio1: 'A'
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>单选框集合</h3>
    <div class="demo">
      <zp-radio-group v-model="radio2">
        <zp-radio label="张三" />
        <zp-radio label="李四" />
        <zp-radio label="王五" />
      </zp-radio-group>
      <p>
        <label>当前选中了：{{ radio2 }}</label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-radio-group v-model="radio2"&gt;
  &lt;zp-radio label="张三" /&gt;
  &lt;zp-radio label="李四" /&gt;
  &lt;zp-radio label="王五" /&gt;
  &lt;zp-radio disabled label="佚名" /&gt;
&lt;/zp-radio-group&gt;
&lt;p&gt;
  &lt;label&gt;当前选中了：{ { radio2 } }&lt;/label&gt;
&lt;/p&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      radio2: ''
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
        radio1: 'A',
        radio2: ''
      }
    }
  }
</script>