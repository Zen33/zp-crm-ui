<template>
  <div>
    <h2>级联菜单 Cascader</h2>
    <p>用于定制级联菜单。</p>
    <h3>基础级联菜单显示</h3>
    <div class="demo">
      <zp-cascader :cas-option="casOption1"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-cascader :cas-option="casOption1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      casOption1: {
        width: 200,
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
        zIndex: 3
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>默认值级联菜单</h3>
    <div class="demo">
      <zp-cascader :cas-option="casOption2"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-cascader :cas-option="casOption2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      casOption2: {
        // 默认值
        value: [1, 3, 7, 10],
        width: 300,
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
        zIndex: 2
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>选择即改变的级联菜单</h3>
    <div class="demo">
      <zp-cascader :cas-option="casOption3"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-cascader :cas-option="casOption3" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      casOption3: {
        // 选择即改变
        immediate: true,
        width: 300,
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
        zIndex: 1
      }
    }
  }
}</code></pre>
      </div>
    </div>
<h3>仅显示末位级</h3>
    <div class="demo">
      <zp-cascader :cas-option="casOption4"/>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-cascader :cas-option="casOption4" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight>
          <code class="javascript">export default {
  data () {
    return {
      casOption4: {
        // 是否显示全部级联
        allLevels: false,
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
        zIndex: 0
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
        casOption1: {
          width: 200,
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
          zIndex: 3
        },
        casOption2: {
          value: [1, 3, 7, 10],
          width: 300,
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
          zIndex: 2
        },
        casOption3: {
          immediate: true,
          width: 300,
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
        casOption4: {
          // 是否显示全部级联
          allLevels: false,
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
          zIndex: 0
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