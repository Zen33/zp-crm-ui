import Vue from 'vue'
import ZpUI from 'zp-crm-ui'
// import { Collapse, Dropdownlist, Experience, AnimateNumber, CircleProgress } from 'zp-crm-ui'
import App from './App.vue'
import router from './routes'
import Highlight from './views/highlight'

Vue.config.debug = true

Vue.use(ZpUI)
// Vue.use(Collapse)
// Vue.use(Dropdownlist)
// Vue.use(Experience)
// Vue.use(AnimateNumber)
// Vue.use(CircleProgress)

Vue.use(Highlight)

router.afterEach(() => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#main',
  render: h => h(App)
})
