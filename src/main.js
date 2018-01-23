import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import ZpUI from 'zp-crm-ui'
// import { Collapse, Dropdownlist, Experience, AnimateNumber, CircleProgress } from 'zp-crm-ui'
import Highlight from './views/highlight'

Vue.config.debug = true

Vue.use(ZpUI)
// Vue.use(Collapse)
// Vue.use(Dropdownlist)
// Vue.use(Experience)
// Vue.use(AnimateNumber)
// Vue.use(CircleProgress)
Vue.use(Highlight)

Vue.filter('substring', (value, len, hasDot) => { // 字串截取（含中文）
  let newLength = 0
  let newStr = ''
  let singleChar = ''
  const chineseRegex = /[^\x00-\xff]/g
  const strLength = value.replace(chineseRegex, '**').length
  for (let i = 0; i < strLength; i++) {
    singleChar = value.charAt(i).toString()
    if (singleChar.match(chineseRegex) !== null) {
      newLength += 2
    } else {
      newLength++
    }
    if (newLength > len) {
      break
    }
    newStr += singleChar
  }
  if (hasDot && strLength > len) {
    newStr += '...'
  }
  return newStr
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#main',
  render: h => h(App)
})
