<template>
  <div class="note">
    <div>
      该组件的意义在于补充现有UI组件业务，欢迎加入一并完善该UI库。zhen.tang@zhaopin.com.cn
      <p>
        *该库目前适配Vue 2.x &lt; 2.5，2.5将slot重命名为slot-scope，使用时请适量调整代码，我也将持续更新。
      </p>
      <!-- <p>
        *桌面端实例基于Element UI 1.4.x。
      </p> -->
    </div>
    <div>
      <!-- <div class="spinner"></div> -->
      组件可以完整引入，也可以部分引入。
      <div class="figure">
        <pre v-highlight><code class="javascript">// 完整引入
import ZpUI from 'zp-crm-ui'
Vue.use(ZpUI)
// 部分引入
import { Collapse, Dropdownlist} from 'zp-crm-ui'
Vue.use(Collapse)
Vue.use(Dropdownlist)</code></pre>
      </div>
    </div>
  </div>
</template>

<style>
  .note {
    font-size: 14px;
  }
  br {
    margin: 20px;
  }
  /* .spinner {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    -webkit-animation: spinner 1s linear infinite alternate;
    -moz-animation: spinner 1s linear infinite alternate;
    animation: spinner 1s linear infinite alternate;
    margin: 46px auto;
    position: relative; 
    left: -12px;
  }
  @-moz-keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  }
  @-webkit-keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  }
  @keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  } */
</style>