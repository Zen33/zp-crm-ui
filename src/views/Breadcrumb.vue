<template>
  <div>
    <h2>面包屑 Breadcrumb</h2>
    <p>用于呈现当前所处位置及返回引导。</p>
    <div class="demo">
      <zp-breadcrumb :crumbOption="crumbOption" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-breadcrumb: crumbOption="crumbOption" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      crumbOption: {
        // 面包屑数据集合
        data: [{
          // 显示项内容
          value: '首页'
        }, {
          value: '子项一',
          // 是否可点击
          nonclickable: true,
          // 自定义分隔符
          separator: '/'
        }, {
          value: '子项二',
          separator: '&dash;'
        }, {
          value: '当前',
          // 自定义样式
          customClass: 'crumb-custom'
        }],
        // 点击事件回调
        callback (val, index) { // 参数：当前项集合、下标，通常用于router跳转
          this.$message(`选择了：${val.value}`)
        }
      }
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
        crumbOption: {
          data: [{
            value: '首页'
          }, {
            value: '子项一',
            nonclickable: true,
            separator: '/'
          }, {
            value: '子项二',
            separator: '&dash;'
          }, {
            value: '当前',
            customClass: 'crumb-custom'
          }],
          callback (val, index) {
            this.$message(`选择了：${val.value}`)
          }
        }
      }
    }
  }
</script>

<style>
  .crumb-custom {
    color: #54a5ff;
    font-weight: normal;
  }
</style>