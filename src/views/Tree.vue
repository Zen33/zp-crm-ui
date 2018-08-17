<template>
  <div>
    <h2>树控件 Tree</h2>
    <p>用于数据层级结构化树形呈现。</p>
    <h3>基础树</h3>
    <div class="demo">
      <zp-tree :data="data1" :indent="indent" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data1" :indent="indent" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      indent: 10,
      data1: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }, {
          label: '二级 1-2',
          children: [{
            label: '三级 1-2-1',
            children: [{
              label: '四级 1-2-1-1',
              disabled: true
            }]
          }, {
            label: '三级 1-2-2',
            children: [{
              label: '四级 1-2-2-1'
            }]
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }]
      }]
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>可选择树</h3>
    <div class="demo">
      <zp-tree :data="data2" showCheckbox />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data2" showCheckbox /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data2: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }, {
          label: '二级 1-2',
          children: [{
            label: '三级 1-2-1',
            children: [{
              label: '四级 1-2-1-1',
              disabled: true
            }]
          }, {
            label: '三级 1-2-2',
            children: [{
              label: '四级 1-2-2-1'
            }]
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }]
      }]
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>异步树</h3>
    <div class="demo">
      <zp-tree :data="data4" showCheckbox :load="loadData" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data4" showCheckbox :load="loadData" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data4: [{
        label: 'root',
        children: []
      }]
    }
  },
  methods: {
    getSeed () {
      return `node-${Math.random().toString(36).substr(2, 9)}`
    },
    loadData () {
      return new Promise((resolve, reject) => {
        // 模拟异步请求
        setTimeout(() => {
          resolve([{
            label: this.getSeed(),
            children: []
          }, {
            label: this.getSeed()
          }])
        }, 1000)
      })
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>默认展开树</h3>
    <div class="demo">
      <zp-tree :data="data3" showCheckbox node-key="id" :default-expand-key="expandKey" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data3" showCheckbox node-key="id" :default-expand-key="expandKey" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data3: [{
        // node-key也即当前指定的id为唯一标识
        id: 1,
        label: 'tree-node',
        children: [{
          id: 2,
          label: 'tree-node-1'
        }, {
          id: 3,
          label: 'tree-node-2',
          children: [{
            id: 4,
            label: 'tree-node-2-1',
            children: [{
              id: 5,
              label: 'tree-node-2-1-1',
              disabled: true
            }]
          }, {
            id: 7,
            label: 'tree-node-2-2',
            children: [{
              id: 8,
              label: 'tree-node-2-2-1'
            }]
          }]
        }]
      }, {
        id: 6,
        label: 'tree-node-other',
        disabled: true
      }],
      expandKey: 4
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>手风琴树</h3>
    <div class="demo">
      <zp-tree :data="data5" accordion ref="tree" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data5" accordion /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data5: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }, {
          label: '二级 1-2',
          children: [{
            label: '三级 1-2-1',
            children: [{
              label: '四级 1-2-1-1',
              disabled: true
            }]
          }, {
            label: '三级 1-2-2',
            children: [{
              label: '四级 1-2-2-1'
            }]
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }]
      }]
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>树节点操作</h3>
    <div class="demo">
      <zp-tree :data="data6" ref="tree" />
      <button @click="append">追加子节点</button>
      <button @click="update">更新当前节点</button>
      <button @click="remove">移除当前节点</button>
      <button @click="before">前插入节点</button>
      <button @click="after">后插入节点</button>
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-tree :data="data6" /&gt;
&lt;button @click="append"&gt;追加子节点&lt;/button&gt;
&lt;button @click="update"&gt;更新当前节点&lt;/button&gt;
&lt;button @click="remove"&gt;移除当前节点&lt;/button&gt;
&lt;button @click="before"&gt;前插入节点&lt;/button&gt;
&lt;button @click="after"&gt;后插入节点&lt;/button&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data6: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }]
      }]
    }
  },
  methods: {
    getSeed () {
      return `node-${Math.random().toString(36).substr(2, 9)}`
    },
    append () { // 追加
      this.$refs.tree.append([{
        label: this.getSeed()
      }, {
        label: this.getSeed()
      }])
    },
    update () { // 更新
      this.$refs.tree.update({
        label: this.getSeed()
      })
    },
    remove () { // 删除
      this.$refs.tree.remove()
    },
    before () { // 前增加
      this.$refs.tree.insertBefore([{
        label: this.getSeed()
      }, {
        label: this.getSeed()
      }])
    },
    after () { // 后增加
      this.$refs.tree.insertAfter([{
        label: this.getSeed()
      }, {
        label: this.getSeed()
      }])
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
        indent: 10,
        data1: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }, {
            label: '二级 1-2',
            children: [{
              label: '三级 1-2-1',
              children: [{
                label: '四级 1-2-1-1',
                disabled: true
              }]
            }, {
              label: '三级 1-2-2',
              children: [{
                label: '四级 1-2-2-1'
              }]
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }]
        }],
        data2: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }, {
            label: '二级 1-2',
            children: [{
              label: '三级 1-2-1',
              children: [{
                label: '四级 1-2-1-1',
                disabled: true
              }]
            }, {
              label: '三级 1-2-2',
              children: [{
                label: '四级 1-2-2-1'
              }]
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }]
        }],
        data3: [{
          id: 1,
          label: 'tree-node',
          children: [{
            id: 2,
            label: 'tree-node-1'
          }, {
            id: 3,
            label: 'tree-node-2',
            children: [{
              id: 4,
              label: 'tree-node-2-1',
              children: [{
                id: 5,
                label: 'tree-node-2-1-1',
                disabled: true
              }]
            }, {
              id: 7,
              label: 'tree-node-2-2',
              children: [{
                id: 8,
                label: 'tree-node-2-2-1'
              }]
            }]
          }]
        }, {
          id: 6,
          label: 'tree-node-other',
          disabled: true
        }],
        data4: [{
          label: 'root',
          children: []
        }],
        data5: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }, {
            label: '二级 1-2',
            children: [{
              label: '三级 1-2-1',
              children: [{
                label: '四级 1-2-1-1',
                disabled: true
              }]
            }, {
              label: '三级 1-2-2',
              children: [{
                label: '四级 1-2-2-1'
              }]
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }]
        }],
        data6: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }]
        }],
        expandKey: 5
      }
    },
    methods: {
      getSeed () {
        return `node-${Math.random().toString(36).substr(2, 9)}`
      },
      loadData () {
        return new Promise((resolve, reject) => {
          // 模拟异步请求
          setTimeout(() => {
            resolve([{
              label: this.getSeed(),
              children: []
            }, {
              label: this.getSeed()
            }])
          }, 1000)
        })
      },
      append () {
        this.$refs.tree.append([{
          label: this.getSeed()
        }, {
          label: this.getSeed()
        }])
      },
      update () {
        this.$refs.tree.update({
          label: this.getSeed()
        })
      },
      remove () {
        this.$refs.tree.remove()
      },
      before () {
        this.$refs.tree.insertBefore([{
          label: this.getSeed()
        }, {
          label: this.getSeed()
        }])
      },
      after () {
        this.$refs.tree.insertAfter([{
          label: this.getSeed()
        }, {
          label: this.getSeed()
        }])
      }
    }
  }
</script>
