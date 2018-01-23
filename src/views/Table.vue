<template>
  <div>
    <h2>表格 Table</h2>
    <p>用于展示数据汇总信息。</p>
    <h3>基础表格</h3>
    <div class="demo">
      <zp-table class="zp-table-wrapper-600" :tableOption="tableOption1" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-table :tableOption="tableOption1" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tableOption1: {
        columns: [{
          // 表格头标题
          title: '日期',
          // 对应列内容字段名
          prop: 'date',
          // 单元列宽
          width: 200
        }, {
          title: '姓名',
          prop: 'name',
          width: 100
        }, {
          title: '年龄',
          prop: 'age',
          width: 100
        }],
        data: [{
          date: '2018-01-01',
          name: '张三',
          age: 19
        }, {
          date: '2018-01-02',
          name: '李四',
          age: 20
        }, {
          date: '2018-01-02',
          name: '王五',
          age: 101
        }],
        // 表格高度
        height: 200,
        // 行样式
        rowClass: 'non-border'
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>事件表格</h3>
    <div class="demo">
      <zp-table class="zp-table-wrapper-800" :tableOption="tableOption2" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-table :tableOption="tableOption2" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tableOption2: {
        columns: [{
          // 当前列为checkbox，true默认选中，false默认非选中
          checkable: true,
          width: 60
        }, {
          // 表格头标题
          title: '日期',
          // 对应列内容字段名
          prop: 'date',
          // 单元列宽
          width: 200,
          // 单元过滤器，用于处理字符的转义修饰等场景
          filter (val) {
            const d = new Date(Number(val))
            return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
          }
        }, {
          title: '姓名',
          prop: 'name',
          width: 100
        }, {
          title: '年龄',
          prop: 'age',
          width: 100
        }, {
          title: '操作',
          // 自定义内容（JSX）
          render: (h, row) => {
            return h('div', [
              h('Button', {
                on: {
                  click () {
                    alert(row.age)
                  }
                },
                'class': 'zp-btn'
              }, '年龄'),
              // 可嵌入ZP UI组件
              h('zp-dropdownlist', {
                props: {
                  ddlOption: {
                    data: [10, 50, 100],
                    width: 60,
                    setDefault: true
                  }
                },
                style: {
                  marginLeft: '20px'
                }
              })
            ])
          }
        }],
        data: [{
          date: '1516155885323',
          name: '张三',
          age: 19
        }, {
          date: '1516155885323',
          name: '李四',
          age: 20
        }, {
          date: '1516155885323',
          name: '王五',
          age: 101
        }],
        // 数据为空显示内容
        emptyText: '暂无数据',
        // 表格高度
        height: 200,
        // 点击行事件
        rowClick (evt, row) {
          alert(JSON.stringify(row))
        }
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>固定列表格</h3>
    <div class="demo">
      <zp-table class="zp-table-wrapper-600" :tableOption="tableOption3" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-table :tableOption="tableOption3" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tableOption3: {
        columns: [{
          // 表格头标题
          title: '日期',
          // 对应列内容字段名
          prop: 'date',
          // 表格头标题样式
          headClass: 'head-class',
          // 列单元样式
          itemClass: 'item-class',
          // 单元列宽
          width: 200
        }, {
          title: '姓名',
          prop: 'name',
          width: 100
        }, {
          title: '年龄',
          prop: 'age',
          width: 100
        }, {
          title: '身高',
          prop: 'height',
          width: 200
        }, {
          title: '体重',
          prop: 'weight'
        }],
        data: [{
          date: '2018-01-01',
          name: '张三',
          age: 19,
          height: '180cm',
          weight: '80kg'
        }, {
          date: '2018-01-02',
          name: '李四',
          age: 20,
          height: '170cm',
          weight: '70kg'
        }, {
          date: '2018-01-02',
          name: '王五',
          age: 101
        }, {
          date: '2018-01-02',
          name: '张小三',
          age: 101
        }, {
          date: '2018-01-02',
          name: '李小四',
          age: 101,
          height: '185cm',
          weight: '80kg'
        }, {
          date: '2018-01-02',
          name: '王老五',
          age: 101
        }, {
          date: '2018-01-02',
          name: '周吴郑王',
          age: 101
        }],
        // 是否固定第一列
        fixed: true,
        // 表格高度
        height: 200
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>展开项表格</h3>
    <div class="demo">
      <zp-table class="zp-table-wrapper-800" :tableOption="tableOption4" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-table :tableOption="tableOption4" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tableOption4: {
          columns: [{
            // 表格头标题
            title: '商家',
            // 单元列宽
            width: 200,
            // 对应列内容字段名
            prop: 'vendor',
          }, {
            title: '信誉',
            width: 100,
            itemClass: 'item-center',
            // 当前为折叠项目，有且仅有一个
            expandProp: true,
            // 自定义内容（JSX）
            render (h, row) {
              let honerClass
              if (row.honer === '优') {
                honerClass = ' good'
              } else if (row.honer === '差') {
                honerClass = ' bad'
              } else {
                honerClass = ' normal'
              }
              return h('div', {
                'class': `zp-btn${honerClass}`,
                on: {
                  click (evt) {
                    const expand = evt.target.previousElementSibling
                    expand && expand.click()
                  }
                }
              }, row.honer)
            }
          }, {
            title: '备注',
            prop: 'mark'
          }],
          data: [{
            vendor: '商家一',
            honer: '优',
            mark: '无',
            about: '该商户提供促销优惠。'
          }, {
            vendor: '商家二',
            honer: '良',
            mark: '无',
            about: '该商户支持积分抵现。'
          }, {
            vendor: '商家二',
            honer: '差',
            mark: '无'
          }],
          // 折叠类型：expand/tree
          expand: 'expand',
          // 折叠项自定义内容（JSX）
          expandRender (h, row) {
            return h('div', [
              h('div', {
                'class': 'tag'
              }, row.about || '暂无。')
            ])
          }
        }
      }
    }
  }
}</code></pre>
      </div>
    </div>
    <h3>树表格</h3>
    <div class="demo">
      <zp-table class="zp-table-wrapper-800" :tableOption="tableOption5" />
      <div class="figure">
        <pre v-highlight><code class="html">&lt;zp-table :tableOption="tableOption5" /&gt;</code></pre>
      </div>
      <div class="figure">
        <pre v-highlight><code class="javascript">export default {
  data () {
    return {
      tableOption5: {
        columns: [{
          // 表格头标题
          title: '范围',
          // 对应列内容字段名
          prop: 'scope',
          // 单元列宽
          width: 200
        }, {
          title: '姓名',
          prop: 'name',
          width: 200
        }, {
          title: '年龄',
          prop: 'age',
          width: 100
        }, {
          title: '积分',
          prop: 'score',
          width: 200
        }],
        data: [{
          id: 0,
          scope: '总部',
          name: '张三',
          age: 19,
          score: 999,
          isLeaf: true // 是否有分支
        }],
        // 分支字段名称，如果该名称变化则data中也需要相应变化，不填写默认为isLeaf
        isLeaf: 'isLeaf',
        // 标识字段名称，如果该名称变化则data中也需要相应变化，不填写默认为id
        id: 'id',
        // 父级标识字段名称，根数据不需要提供，不填写默认为parentId
        parentId: 'parentId',
        // 表格高度
        height: 300,
        // 是否为树表格
        expand: 'tree',
        // 树表格展开事件
        expandClick (index, row) {
          const getNumber = (min = 10000, max = 99999) => { // 随机数
            return Math.round(Math.random() * (max - min) + min)
          }
          const len = getNumber(3, 7)
          let data = []
          for (let i = 0; i < len; i++) {
            data.push({
              parentId: row.id,
              id: getNumber(),
              scope: `下级${getNumber()}`,
              name: `张三下级${getNumber(200, 300)}`,
              age: getNumber(5, 99),
              score: getNumber(),
              isLeaf: getNumber(1, 5) % 2 === 0,
              expand: false
            })
          }
          return data
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
        tableOption1: {
          columns: [{
            title: '日期',
            prop: 'date',
            width: 200,
            headClass: 'zp-cell-left'
          }, {
            title: '姓名',
            prop: 'name',
            width: 150,
            headClass: 'zp-cell-left'
          }, {
            title: '年龄',
            prop: 'age',
            headClass: 'zp-cell-left'
          }],
          data: [{
            date: '2018-01-01',
            name: '张三',
            age: 19
          }, {
            date: '2018-01-02',
            name: '李四',
            age: 20
          }, {
            date: '2018-01-02',
            name: '王五',
            age: 101
          }],
          height: 200,
          rowClass: 'non-border'
        },
        tableOption2: {
          columns: [{
            checkable: true,
            width: 60
          }, {
            title: '日期',
            prop: 'date',
            width: 200,
            filter (val) {
              const d = new Date(Number(val))
              return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
            },
            headClass: 'zp-cell-left'
          }, {
            title: '姓名',
            prop: 'name',
            width: 100,
            headClass: 'zp-cell-left'
          }, {
            title: '年龄',
            prop: 'age',
            width: 100,
            headClass: 'zp-cell-left'
          }, {
            title: '操作',
            render (h, row) {
              return h('div', [
                h('Button', {
                  on: {
                    click () {
                      alert(row.age)
                    }
                  },
                  'class': 'zp-btn'
                }, '年龄'),
                h('zp-dropdownlist', {
                  props: {
                    ddlOption: {
                      data: [10, 50, 100],
                      width: 60,
                      setDefault: true
                    }
                  },
                  style: {
                    marginLeft: '20px'
                  }
                })
              ])
            },
            headClass: 'zp-cell-left'
          }],
          data: [{
            date: '1516155885323',
            name: '张三',
            age: 19
          }, {
            date: '1516155885323',
            name: '李四',
            age: 20
          }, {
            date: '1516155885323',
            name: '王五',
            age: 101
          }],
          emptyText: '暂无数据',
          height: 200,
          rowClick (evt, row) {
            alert(JSON.stringify(row))
          }
        },
        tableOption3: {
          columns: [{
            title: '日期',
            prop: 'date',
            headClass: 'head-class zp-cell-left',
            itemClass: 'item-class',
            width: 200
          }, {
            title: '姓名',
            prop: 'name',
            width: 100,
            headClass: 'zp-cell-left'
          }, {
            title: '年龄',
            prop: 'age',
            width: 100,
            headClass: 'zp-cell-left'
          }, {
            title: '身高',
            prop: 'height',
            width: 200,
            headClass: 'zp-cell-left'
          }, {
            title: '体重',
            prop: 'weight',
            headClass: 'zp-cell-left'
          }],
          data: [{
            date: '2018-01-01',
            name: '张三',
            age: 19,
            height: '180cm',
            weight: '80kg'
          }, {
            date: '2018-01-02',
            name: '李四',
            age: 20,
            height: '170cm',
            weight: '70kg'
          }, {
            date: '2018-01-02',
            name: '王五',
            age: 101
          }, {
            date: '2018-01-02',
            name: '张小三',
            age: 101
          }, {
            date: '2018-01-02',
            name: '李小四',
            age: 101,
            height: '185cm',
            weight: '80kg'
          }, {
            date: '2018-01-02',
            name: '王老五',
            age: 101
          }, {
            date: '2018-01-02',
            name: '周吴郑王',
            age: 101
          }],
          fixed: true,
          height: 200
        },
        tableOption4: {
          columns: [{
            title: '商家',
            width: 200,
            prop: 'vendor'
          }, {
            title: '信誉',
            width: 100,
            itemClass: 'item-center',
            expandProp: true,
            render (h, row) {
              let honerClass
              if (row.honer === '优') {
                honerClass = ' good'
              } else if (row.honer === '差') {
                honerClass = ' bad'
              } else {
                honerClass = ' normal'
              }
              return h('div', {
                'class': `zp-btn${honerClass}`,
                on: {
                  click (evt) {
                    const expand = evt.target.previousElementSibling
                    expand && expand.click()
                  }
                }
              }, row.honer)
            }
          }, {
            title: '备注',
            prop: 'mark'
          }],
          data: [{
            vendor: '商家一',
            honer: '优',
            mark: '无',
            about: '该商户提供促销优惠。'
          }, {
            vendor: '商家二',
            honer: '良',
            mark: '无',
            about: '该商户支持积分抵现。'
          }, {
            vendor: '商家二',
            honer: '差',
            mark: '无'
          }],
          expand: 'expand',
          expandRender (h, row) {
            return h('div', [
              h('div', {
                'class': 'tag'
              }, row.about || '暂无。')
            ])
          }
        },
        tableOption5: {
          columns: [{
            title: '范围',
            prop: 'scope',
            width: 200
          }, {
            title: '姓名',
            prop: 'name',
            width: 200
          }, {
            title: '年龄',
            prop: 'age',
            width: 100
          }, {
            title: '积分',
            prop: 'score',
            width: 200
          }],
          data: [{
            id: 0,
            scope: '总部',
            name: '张三',
            age: 19,
            score: 999,
            isLeaf: true
          }],
          isLeaf: 'isLeaf',
          id: 'id',
          parentId: 'parentId',
          height: 300,
          expand: 'tree',
          expandClick (index, row) {
            const getNumber = (min = 10000, max = 99999) => { // 随机数
              return Math.round(Math.random() * (max - min) + min)
            }
            const len = getNumber(3, 7)
            let data = []
            for (let i = 0; i < len; i++) {
              data.push({
                parentId: row.id,
                id: getNumber(),
                scope: `下级${getNumber()}`,
                name: `张三下级${getNumber(200, 300)}`,
                age: getNumber(5, 99),
                score: getNumber(),
                isLeaf: getNumber(1, 5) % 2 === 0,
                expand: false
              })
            }
            return data
          }
        }
      }
    }
  }
</script>

<style>
  .zp-table-wrapper-600 {
    width: 600px;
  }
  .zp-table-wrapper-800 {
    width: 800px;
  }
  .zp-btn {
    padding: 7px 9px;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
    background-color: #54a5ff;
    border: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    font-weight: normal;
  }
  .non-border th,
  .non-border td {
    border-right: none;
  }
  .head-class {
    background: #54a5ff!important;
    color: #fff;
  }
  .item-class {
    color: #54a5ff;
  }
  .good {
    background-color: #00c853;
  }
  .normal {
    background-color: #ffab00;
  }
  .bad {
    background-color: #dd2c00;
  }
  .tag {
    background-color: #cfd8dc;
    color: #263238;
    display: inline-block;
    padding: 0 5px;
    height: 24px;
    line-height: 22px;
    font-size: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #b0bec5;
    white-space: nowrap;
  }
  .item-center {
    text-align: center;
  }
</style>