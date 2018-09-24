<template>
  <div>
    <h2>选择器 Picker</h2>
    <p>用于多平台选择操作。</p>
    <h3>基础选择器</h3>
    <div class="demo picker-left">
      <zp-picker :items="items1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-picker :items="items1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <zp-scroller>
          <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      items1: [{
        values: [
          '赤',
          '橙',
          '黄',
          '绿',
          '青',
          '蓝',
          '紫'
        ]
      }]
    }
  }
}</code></pre>
        </zp-scroller>
      </div>
    </div>
    <div class="demo picker-right">
      <zp-picker :items="items2" v-model="data2" valueKey="label" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-picker v-model="data2" :items="items2" valueKey="label" /&gt;</code></pre>
      </div>
      <div class="figure">
        <zp-scroller>
          <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data2: [{
        label: '蓝',
        className: 'picker-blue',
        value: 6
      }],
      items2: [{
        values: [{
          label: '赤',
          value: 1,
          className: 'picker-red'
        }, {
          label: '橙',
          className: 'picker-orange',
          value: 2
        }, {
          label: '黄',
          value: 3,
          className: 'picker-yellow'
        }, {
          label: '绿',
          value: 4,
          className: 'picker-green'
        }, {
          label: '青',
          className: 'picker-cyan',
          value: 5
        }, {
          label: '蓝',
          className: 'picker-blue',
          value: 6
        }, {
          label: '紫',
          className: 'picker-purple',
          value: 7
        }],
        align: 'center'
      }]
    }
  }
}</code></pre>
        </zp-scroller>
      </div>
    </div>
    <h3 style="clear: both;">含有禁选项选择器</h3>
    <div class="demo">
      <zp-picker :items="items3" v-model="data3" :row-number="rowNumber3" valueKey="label" @change="getVal" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-picker :items="items3" v-model="data3" :row-number="rowNumber3" valueKey="label" /&gt;</code></pre>
      </div>
      <div class="figure">
          <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data3: null,
      // 显示行数
      rowNumber3: 3,
      items3: [{
        values: [{
          label: 'K111（已售罄）',
          value: 1,
          disabled: true
        }, {
          label: 'K222',
          value: 2
        }, {
          label: 'K333',
          value: 3
        }, {
          label: 'G222（已售罄）',
          value: 4,
          disabled: true
        }, {
          label: 'G333',
          value: 5
        }, {
          label: 'G111（已售罄）',
          value: 6,
          disabled: true
        }],
        align: 'center'
      }]
    }
  },
  methods: {
  getVal (val) {
    this.val && this.$info(this.val.label)
  }
}</code></pre>
      </div>
    </div>
    <h3>组合选择器</h3>
    <div class="demo">
      <label>当前套餐：{{ suit }}</label>
      <zp-picker style="width: 450px;" :items="items4" @change="getMultiVal" ref="picker" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;label&gt;当前套餐：{ { suit } }&lt;/label&gt;
&lt;zp-picker :items="items4" @change="getMultiVal" ref="picker" /&gt;</code></pre>
      </div>
      <div class="figure">
          <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      items4: [{
        values: ['热咖啡', '芒果冰饮', '港式奶茶', '豆浆'],
        // 分隔符
        separator: ' + '
      }, {
        values: ['芝士汉堡', '猪肉汉堡', '鸡肉汉堡', '牛肉汉堡', '火腿蛋堡'],
        separator: ' + '
      }, {
        values: ['鸡翅', '薯条（大）', '薯条（中）', '鸡块']
      }],
      suit: ''
    }
  },
  methods: {
    getMultiVal () {
      const picker = this.$refs.picker
      picker && (this.suit = picker.getValues().join(' + '))
    }
  },
  mounted () {
    this.getMultiVal()
  }
}</code></pre>
      </div>
    </div>
    <h3>级联选择器</h3>
    <div class="demo">
      <label>当前城市：{{ city }}</label>
      <zp-picker :items="items5" valueKey="name" v-model="data5" @change="getCasVal" ref="picker2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;label&gt;当前城市：{ { city } }&lt;/label&gt;
&lt;zp-picker :items="items5" valueKey="name" @change="getCasVal" ref="picker2" /&gt;</code></pre>
      </div>
      <div class="figure">
          <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      data5: [],
      city: '',
      items5: [{
        values: [{
          name: ''
        }]
      }, {
        values: [{
          name: ''
        }]
      }],
      cityList: [{
        name: '北京',
        children: [{
          name: '北京'
        }]
      }, {
        name: '福建',
        children: [{
          name: '福州'
        }, {
          name: '厦门'
        }, {
          name: '莆田'
        }, {
          name: '三明'
        }, {
          name: '泉州'
        }, {
          name: '漳州'
        }, {
          name: '南平'
        }, {
          name: '龙岩'
        }, {
          name: '宁德'
        }]
      }, {
        name: '上海',
        children: [{
          name: '上海'
        }]
      }]
    }
  },
  methods: {
    getCasVal (val, index) {
      const picker = this.$refs.picker2
      if (!index) {
        picker && picker.setItemValues(index + 1, val.children)
      }
      this.city = ''
      this.data5.forEach((datum, i) => {
        const mark = i ? ' - ' : '' 
        this.city += `${mark}${datum.name}`
      })
    },
    setCasVal (index, vals) {
      const picker = this.$refs.picker2
      picker && picker.setItemValues(index, vals)
    }
  },
  mounted () {
    this.setCasVal(0, this.cityList)
    this.setCasVal(1, this.cityList[0].children)
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
        items1: [{
          values: ['赤', '橙', '黄', '绿', '青', '蓝', '紫']
        }],
        data2: [{
          label: '蓝',
          className: 'picker-blue',
          value: 6
        }],
        items2: [{
          values: [{
            label: '赤',
            value: 1,
            className: 'picker-red'
          }, {
            label: '橙',
            className: 'picker-orange',
            value: 2
          }, {
            label: '黄',
            value: 3,
            className: 'picker-yellow'
          }, {
            label: '绿',
            value: 4,
            className: 'picker-green'
          }, {
            label: '青',
            className: 'picker-cyan',
            value: 5
          }, {
            label: '蓝',
            className: 'picker-blue',
            value: 6
          }, {
            label: '紫',
            className: 'picker-purple',
            value: 7
          }],
          align: 'center'
        }],
        rowNumber3: 3,
        items3: [{
          values: [{
            label: 'K111（已售罄）',
            value: 1,
            disabled: true
          }, {
            label: 'K222',
            value: 2
          }, {
            label: 'K333',
            value: 3
          }, {
            label: 'G222（已售罄）',
            value: 4,
            disabled: true
          }, {
            label: 'G333',
            value: 5
          }, {
            label: 'G111（已售罄）',
            value: 6,
            disabled: true
          }],
          align: 'center'
        }],
        items4: [{
          values: ['热咖啡', '芒果冰饮', '港式奶茶', '豆浆'],
          separator: ' + '
        }, {
          values: ['芝士汉堡', '猪肉汉堡', '鸡肉汉堡', '牛肉汉堡', '火腿蛋堡'],
          separator: ' + '
        }, {
          values: ['鸡翅', '薯条（大）', '薯条（中）', '鸡块']
        }],
        data3: [],
        suit: '',
        items5: [{
          values: [{
            name: ''
          }]
        }, {
          values: [{
            name: ''
          }]
        }],
        data5: [],
        city: '',
        cityList: [{
          name: '北京',
          children: [{
            name: '北京'
          }]
        }, {
          name: '福建',
          children: [{
            name: '福州'
          }, {
            name: '厦门'
          }, {
            name: '莆田'
          }, {
            name: '三明'
          }, {
            name: '泉州'
          }, {
            name: '漳州'
          }, {
            name: '南平'
          }, {
            name: '龙岩'
          }, {
            name: '宁德'
          }]
        }, {
          name: '上海',
          children: [{
            name: '上海'
          }]
        }]
      }
    },
    methods: {
      getVal (val) {
        this.val && this.$info(this.val.label)
      },
      getMultiVal () {
        const picker = this.$refs.picker
        picker && (this.suit = picker.getValues().join(' + '))
      },
      getCasVal (val, index) {
        const picker = this.$refs.picker2
        if (!index) {
          picker && picker.setItemValues(index + 1, val.children)
        }
        this.city = ''
        this.data5.forEach((datum, i) => {
          const mark = i ? ' - ' : '' 
          this.city += `${mark}${datum.name}`
        })
      },
      setCasVal (index, vals) {
        const picker = this.$refs.picker2
        picker && picker.setItemValues(index, vals)
      }
    },
    mounted () {
      this.getMultiVal()
      this.setCasVal(0, this.cityList)
      this.setCasVal(1, this.cityList[0].children)
    }
  }
</script>

<style>
  .picker-left,
  .picker-right {
    float: left;
    width: 45%;
    min-width: 100px;
  }
  .picker-left {
    margin-right: 10px;
  }
  .picker-red {
    color: red!important;
  }
  .picker-orange {
    color: orange!important;
  }
  .picker-yellow {
    color: yellow!important;
  }
  .picker-green {
    color: green!important;
  }
  .picker-cyan {
    color: cyan!important;
  }
  .picker-blue {
    color: blue!important;
  }
  .picker-purple {
    color: purple!important;
  }
</style>