<template>
  <div>
    <h2>复选框 Checkbox</h2>
    <p>用于一组多选项选择抑或切换状态。</p>
    <h3>基础复选框</h3>
    <div class="demo">
      <zp-checkbox v-model="checkbox1">切换状态</zp-checkbox>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-checkbox v-model="checkbox1"&gt;切换状态&lt;/zp-checkbox&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      // 初始状态，如果选中则为true
      checkbox1: false
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>复选框集合</h3>
    <div class="demo">
      <zp-checkbox-group v-model="checkbox2">
        <zp-checkbox label="张三" />
        <zp-checkbox label="李四" />
        <zp-checkbox label="王五" />
        <zp-checkbox disabled label="佚名" />
      </zp-checkbox-group>
      <p>
        <label>当前选中了：{{ checkbox2.join(',') }}</label>
      </p>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-checkbox-group v-model="checkbox2"&gt;
  &lt;zp-checkbox label="张三" /&gt;
  &lt;zp-checkbox label="李四" /&gt;
  &lt;zp-checkbox label="王五" /&gt;
  &lt;zp-checkbox disabled label="佚名" /&gt;
&lt;/zp-checkbox-group&gt;
&lt;p&gt;
  &lt;label&gt;当前选中了：{ { checkbox2.join(',') } }&lt;/label&gt;
&lt;/p&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      checkbox2: ['李四', '佚名']
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
        checkbox1: false,
        checkbox2: ['李四', '佚名']
      }
    }
  }
</script>