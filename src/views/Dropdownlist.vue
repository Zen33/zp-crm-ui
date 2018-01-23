<template>
  <div>
    <h2>下拉菜单 Dropdownlist</h2>
    <p>用于定制下拉菜单。</p>
    <h3>基础下拉菜单显示</h3>
    <div class="demo">
      <zp-dropdownlist :ddl-option="ddlOption1">
        <a slot="ddlSelf" href="javascript:;">点击我</a>
      </zp-dropdownlist>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption1"&gt;
  &lt;a slot="ddlSelf" href="javascript:;"&gt;点击我&lt;/a&gt;
&lt;/zp-dropdownlist&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      ddlOption1: {
        // key关键字属性名（对应data中的key）
        key: 'key',
        // value关键字属性名（对应data中的value）
        value: 'value',
        data: [{
          key: 0,
          value: 'TBD'
        }, {
          key: 1,
          value: 'Others'
        }],
        // 当前下拉菜单的堆叠顺序（默认为999），通常为了不被遮挡，可定制该属性
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
        <a slot="ddlSelf" href="javascript:;">点击我</a>
      </zp-dropdownlist>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-dropdownlist :ddl-option="ddlOption2"&gt;
  &lt;a slot="ddlSelf" href="javascript:;"&gt;点击我&lt;/a&gt;
&lt;/zp-dropdownlist&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight>
          <code class="javascript">export default {
  data () {
    return {
      ddlOption2: {
        key: 'key',
        value: 'value',
        data: [{
          key: 0,
          value: 'TBD',
          // 样式自定义，通常用于定制icon
          itemClass: 'arrow'
        }, {
          key: 1,
          value: 'Others',
          children: [{
            key: 2,
            value: 'Item 1',
            children: [{
              key: 11,
              value: 'Item 1 - 1'
            }]
          }, {
            key: 3,
            value: 'Item 2',
            children: [{
              key: 5,
              value: 'Item 2 - 1'
            }, {
              key: 6,
              value: 'Item 2 - 2'
            }, {
              key: 7,
              value: 'Item 2 - 3',
              children: [{
                key: 10,
                value: 'Last'
              }]
            }, {
              key: 8,
              value: 'Item 2 - 4'
            }, {
              key: 9,
              value: 'Item 2 - 5'
            }]
          }, {
            key: 4,
            value: 'Item 3'
          }]
        }],
        zIndex: 4
      }
    }
  }
}</code>
        </pre>
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
        // 设置默认值
        setDefault: true
      }
    }
  },
  methods: {
    // 定制回调事件
    onSelectItem (val) {
      alert(val)
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
        key: 'key',
        value: 'value',
        data: [{
          key: 0,
          value: 'Aquaman'
        }, {
          key: 1,
          value: 'Arisia Rrab'
        }, {
          key: 2,
          value: 'Batman'
        }, {
          key: 3,
          value: 'Doctor Fate'
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
        key: 'key',
        value: 'value',
        // 异步请求uri
        url: './ddl.json',
        // 返回数据对象值
        dotNotation: 'data.result',
        zIndex: 1,
        // 回调事件
        onSelect (val) {
          alert(val)
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
      "key": 0,
      "value": "Aquaman"
    }, {
      "key": 1,
      "value": "Arisia Rrab"
    }, {
      "key": 2,
      "value": "Batman"
    }, {
      "key": 3,
      "value": "Doctor Fate"
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
          key: 'key',
          value: 'value',
          data: [{
            key: 0,
            value: 'TBD'
          }, {
            key: 1,
            value: 'Others'
          }],
          zIndex: 5
        },
        ddlOption2: {
          key: 'key',
          value: 'value',
          data: [{
            key: 0,
            value: 'TBD',
            itemClass: 'arrow'
          }, {
            key: 1,
            value: 'Others',
            children: [{
              key: 2,
              value: 'Item 1',
              children: [{
                key: 11,
                value: 'Item 1 - 1'
              }]
            }, {
              key: 3,
              value: 'Item 2',
              children: [{
                key: 5,
                value: 'Item 2 - 1'
              }, {
                key: 6,
                value: 'Item 2 - 2'
              }, {
                key: 7,
                value: 'Item 2 - 3',
                children: [{
                  key: 10,
                  value: 'Last'
                }]
              }, {
                key: 8,
                value: 'Item 2 - 4'
              }, {
                key: 9,
                value: 'Item 2 - 5'
              }]
            }, {
              key: 4,
              value: 'Item 3'
            }]
          }],
          zIndex: 4
        },
        ddlOption3: {
          data: [10, 50, 100],
          width: 60,
          zIndex: 3, // 防止彼此遮挡
          setDefault: true
        },
        ddlOption4: {
          key: 'key',
          value: 'value',
          data: [{
            key: 0,
            value: 'Aquaman'
          }, {
            key: 1,
            value: 'Arisia Rrab'
          }, {
            key: 2,
            value: 'Batman'
          }, {
            key: 3,
            value: 'Doctor Fate'
          }],
          editable: true,
          zIndex: 2
        },
        ddlOption5: {
          key: 'key',
          value: 'value',
          url: './ddl.json',
          dotNotation: 'data.result',
          zIndex: 1,
          onSelect (val) {
            alert(val)
          }
        }
      }
    },
    methods: {
      onSelectItem (val) {
        alert(val)
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