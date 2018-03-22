<template>
  <div>
    <h2>下拉菜单 Dropdownlist</h2>
    <p>用于定制下拉菜单。</p>
    <h3>基础下拉菜单显示</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption1">
        <a href="javascript:;">点击我</a>
      </zp-dropdownlist>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption1"&gt;
  &lt;a href="javascript:;"&gt;点击我&lt;/a&gt;
&lt;/zp-dropdownlist&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption1: {
        data: [{
          value: 0,
          label: 'TBD'
        }, {
          value: 1,
          label: 'Others'
        }],
        // 当前下拉菜单的堆叠顺序（默认为当前最高），通常为了不被遮挡，可定制该属性
        zIndex: 5
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>无限子菜单显示</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption2">
        <a href="javascript:;">点击我</a>
      </zp-dropdownlist>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption2"&gt;
  &lt;a href="javascript:;"&gt;点击我&lt;/a&gt;
&lt;/zp-dropdownlist&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption2: {
        data: [{
          value: 0,
          label: 'TBD',
          // 样式自定义，通常用于定制icon
          itemClass: 'arrow'
        }, {
          value: 1,
          label: 'Others',
          children: [{
            value: 2,
            label: 'Item 1',
            children: [{
              value: 11,
              label: 'Item 1 - 1'
            }]
          }, {
            value: 3,
            label: 'Item 2',
            children: [{
              value: 5,
              label: 'Item 2 - 1'
            }, {
              value: 6,
              label: 'Item 2 - 2'
            }, {
              value: 7,
              label: 'Item 2 - 3',
              children: [{
                value: 10,
                label: 'Last'
              }]
            }, {
              value: 8,
              label: 'Item 2 - 4'
            }, {
              value: 9,
              label: 'Item 2 - 5'
            }]
          }, {
            value: 4,
            label: 'Item 3'
          }]
        }],
        zIndex: 4
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>纯数字下拉菜单</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption3" @ddl-action="onSelectItem" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption3" @ddl-action="onSelectItem" /&gt; </code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption3: {
        data: [10, 50, 100],
        width: 60,
        zIndex: 3,
        // 设置默认值（暂不支持无限子菜单场景）
        setDefault: 50
      }
    }
  },
  methods: {
    // 定制回调事件
    onSelectItem (val) {
      this.$alert(val, '选择项')
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>可查询下拉菜单</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption4" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption4" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption4: {
        data: [{
          value: 0,
          label: 'Aquaman'
        }, {
          value: 1,
          label: 'Arisia Rrab'
        }, {
          value: 2,
          label: 'Batman'
        }, {
          value: 3,
          label: 'Doctor Fate'
        }],
        // 设置可查询
        editable: true,
        zIndex: 2
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>异步下拉菜单</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption5" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption5" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption5: {
        // 异步请求uri
        url: './ddl.json',
        // 返回数据对象值
        dotNotation: 'data.result',
        zIndex: 1,
        // 回调事件
        onSelect (val) {
          this.$alert(val)
        },
        // 异常处理
        onFail (e) {
          //
        }
      }
    }
  }
}</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="json">{
  "data": {
    "result": [{
      "value": 0,
      "label": "Aquaman"
    }, {
      "value": 1,
      "label": "Arisia Rrab"
    }, {
      "value": 2,
      "label": "Batman"
    }, {
      "value": 3,
      "label": "Doctor Fate"
    }]
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
        ddlOption1: {
          value: 'key',
          label: 'value',
          data: [{
            value: 0,
            label: 'TBD'
          }, {
            value: 1,
            label: 'Others'
          }],
          zIndex: 5
        },
        ddlOption2: {
          value: 'key',
          label: 'value',
          data: [{
            value: 0,
            label: 'TBD',
            itemClass: 'arrow'
          }, {
            value: 1,
            label: 'Others',
            children: [{
              value: 2,
              label: 'Item 1',
              children: [{
                value: 11,
                label: 'Item 1 - 1'
              }]
            }, {
              value: 3,
              label: 'Item 2',
              children: [{
                value: 5,
                label: 'Item 2 - 1'
              }, {
                value: 6,
                label: 'Item 2 - 2'
              }, {
                value: 7,
                label: 'Item 2 - 3',
                children: [{
                  value: 10,
                  label: 'Last'
                }]
              }, {
                value: 8,
                label: 'Item 2 - 4'
              }, {
                value: 9,
                label: 'Item 2 - 5'
              }]
            }, {
              value: 4,
              label: 'Item 3'
            }]
          }],
          zIndex: 4
        },
        ddlOption3: {
          data: [10, 50, 100],
          width: 60,
          zIndex: 3, // 防止彼此遮挡
          setDefault: 50
        },
        ddlOption4: {
          value: 'key',
          label: 'value',
          data: [{
            value: 0,
            label: 'Aquaman'
          }, {
            value: 1,
            label: 'Arisia Rrab'
          }, {
            value: 2,
            label: 'Batman'
          }, {
            value: 3,
            label: 'Doctor Fate'
          }],
          editable: true,
          zIndex: 2
        },
        ddlOption5: {
          value: 'key',
          label: 'value',
          url: './ddl.json',
          dotNotation: 'data.result',
          zIndex: 1,
          onSelect (val) {
            this.$alert(val, '选择项')
          }
        }
      }
    },
    methods: {
      onSelectItem (val) {
        this.$alert(val)
      }
    }
  }
</script>

<style>
  .arrow {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-right: 6px solid transparent;
    border-top: 6px solid red;
    border-left: 6px solid red;
    border-bottom: 6px solid red;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>