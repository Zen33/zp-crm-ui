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
</style>