<template>
  <div>
    <h2>分页 Pagination</h2>
    <p>用于离散连续的较为庞大的数据。</p>
    <h3>基础分页</h3>
    <div class="demo">
      <zp-pagination :pageOption="pageOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-pagination :pageOption="pageOption1"/&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      pageOption1: {
        // 总页数
        pageCount: 3
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>定制分页</h3>
    <div class="demo">
      <zp-pagination :pageOption="pageOption2" @page-action="onChangePage" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-pagination :pageOption="pageOption2" @page-action="onChangePage" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      pageOption2: {
        // 是否有跳转项
        jumpTo: true,
        // 当前页
        currentPage: 3,
        // 总页数
        pageCount: 10,
        // 每页显示数量
        pageSize: 40,
        // 每页显示数量设置
        pageSizes: [20, 30, 40]
      }
    }
  },
  methods: {
    onChangePage (page) {
      alert(page)
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
        pageOption1: {
          pageCount: 3
        },
        pageOption2: {
          jumpTo: true,
          currentPage: 3,
          pageCount: 10,
          pageSize: 40,
          pageSizes: [20, 30, 40]
        }
      }
    },
    methods: {
      onChangePage (page) {
        alert(page)
      }
    }
  }
</script>