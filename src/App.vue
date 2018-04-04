<template>
  <div>
    <div>
      <div class="header">
        <router-link to="/" class="zp-logo"></router-link>
        <div class="nav">
        </div>
      </div>
      <zp-scroller class="sidebar-scroller">
        <div class="sidebar-outer">
          <div class="sidebar">
            <div class="sidebar-inner">
              <ul class="sidebar-menu">
                <li>
                  <router-link to="/sparkline">迷你图 Sparkline</router-link>
                </li>
                <li>
                  <router-link to="/experience">经验值 Experience</router-link>
                </li>
                <li>
                  <router-link to="/circleprogress">环形进度 Circle Progress</router-link>
                </li>
                <li>
                  <router-link to="/animatenumber">动态数字 Animate Number</router-link>
                </li>
                <li>
                  <router-link to="/dropdownlist">下拉菜单 Dropdownlist</router-link>
                </li>
                <li>
                  <router-link to="/collapse">折叠面板 Collapse</router-link>
                </li>
                <li>
                  <router-link to="/radio">单选框 Radio</router-link>
                </li>
                <li>
                  <router-link to="/checkbox">复选框 Checkbox</router-link>
                </li>
                <li>
                  <router-link to="/switch">开关 Switch</router-link>
                </li>
                <li>
                  <router-link to="/tooltip">文字提示 Tooltip</router-link>
                </li>
                <li>
                  <router-link to="/popover">气泡信息 Popover</router-link>
                </li>
                <li>
                  <router-link to="/slider">滑块 Slider</router-link>
                </li>
                <li>
                  <router-link to="/cascader">级联菜单 Cascader</router-link>
                </li>
                <li>
                  <router-link to="/table">表格 Table</router-link>
                </li>
                <li>
                  <router-link to="/pagination">分页 Pagination</router-link>
                </li>
                <li>
                  <router-link to="/dialog">对话框 Dialog</router-link>
                </li>
                <li>
                  <router-link to="/message">消息对话框 Message</router-link>
                </li>
                <li>
                  <router-link to="/scroller">滚动条 Scroller</router-link>
                </li>
                <li>
                  <router-link to="/timeline">时间轴 Timeline</router-link>
                </li>
                <li>
                  <router-link to="/watermark">水印 Watermark</router-link>
                </li>
              </ul>
            </div>
          </div>
       </div>
      </zp-scroller>
    </div>
    <zp-scroller class="content-scroller">
      <router-view class="content"></router-view>
    </zp-scroller>
  </div>
</template>

<style>
  html,
  body {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .sidebar-scroller {
    position: fixed;
    margin-top: 80px;
    width: 200px;
    height: -webkit-calc(100vh - 80px);
    height: -moz-calc(100vh - 80px);
    height: calc(100vh - 80px);
  }
  .content-scroller {
    position: relative;
    margin-left: 200px;
    height: 100vh;
    z-index: 0;
  }
  .zp-btn,
  button {
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
  .zp-logo {
    width: 100px;
    height: 30px;
    background: url('data:image/png;base64,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') no-repeat;
    background-size: contain;
    margin: 20px 15px;
    flex: .6;
  }
  .nav-item {
    margin-top: 20px;
  }
  *:focus {
    outline: none;
  }
  /* body,
  html {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  } */
  body {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #323c47;
  }
  .header {
    height: 80px;
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: space-between;
    z-index: 0;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .header a {
    text-decoration: none;
    color: #323c47;
  }
  .nav {
    flex: .4;
    font-size: 12px;
  }
  /* .sidebar-outer {
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    width: 200px;
  } */
  .sidebar-menu {
    margin: 0;
    margin-bottom: 20px;
    padding-left: 0;
    list-style-type: none;
    line-height: 1;
  }
  .sidebar-menu a {
    color: #666;
    font-size: 12px;
    text-decoration: none;
    display: block;
    line-height: 30px;
    text-indent: 20px;
    border-bottom: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  .sidebar-menu a.router-link-active {
    color: #333;
    font-weight: 600;
  }
  /* .content {
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 200px;
  } */
  .content {
    margin-top: 15px;
    margin-right: 30px;
  }
  h2 {
    font-weight: 400;
    font-size: 28px;
    margin: 0;
    display: block;
  }
  h3 {
    font-weight: 400;
    font-size: 22px;
    margin: 20px 0;
    display: block;
  }
  .demo {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 12px;
  }
  pre {
    background: #f0f0f0;
    margin: 0;
    display: block;
    font-family: monospace;
    white-space: pre;
  }
  code:before {
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    text-align: right;
    font-size: 14px;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
  }
  .html:before {
    content: 'HTML';
  }
  .javascript:before {
    content: 'JS';
  }
  .json:before {
    content: 'JSON';
  }
  .other:before {
    content: '';
  }
  .figure {
    position: relative;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
  }
  /* highlight style */
  .hljs{display:block;overflow-x:auto;padding:0.5em;background:#eee;color:black}.hljs-link,.hljs-emphasis,.hljs-attribute,.hljs-addition{color:#070}.hljs-emphasis{font-style:italic}.hljs-strong,.hljs-string,.hljs-deletion{color:#d14}.hljs-strong{font-weight:bold}.hljs-quote,.hljs-comment{color:#998;font-style:italic}.hljs-section,.hljs-title{color:#900}.hljs-class .hljs-title,.hljs-type{color:#458}.hljs-variable,.hljs-template-variable{color:#336699}.hljs-bullet{color:#997700}.hljs-meta{color:#3344bb}.hljs-code,.hljs-number,.hljs-literal,.hljs-keyword,.hljs-selector-tag{color:#099}.hljs-regexp{background-color:#fff0ff;color:#880088}.hljs-symbol{color:#990073}.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class{color:#007700}
  code {
    font-size: 14px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
  code.html {
    padding: 20px 0.5em;
  }
  .hljs {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .zp-input,
  input[type="text"] {
    height: 25px;
    line-height: 25px;
    padding: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>