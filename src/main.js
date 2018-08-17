import Vue from 'vue'
import ZpUI from 'zp-crm-ui'
// import {
//   Collapse,
//   Dropdownlist,
//   Experience,
//   AnimateNumber,
//   CircleProgress,
//   Table,
//   Pagination,
//   Timeline,
//   Checkbox,
//   CheckboxGroup,
//   Radio,
//   RadioGroup,
//   Switch,
//   Cascader,
//   Dialog,
//   Slider,
//   Tooltip,
//   Popover,
//   Scroller,
//   Carousel,
//   CarouselItem,
//   Breadcrumb,
//   Watermark,
//   WatermarkDirective,
//   Message,
//   DialogBox,
//   Information
// } from 'zp-crm-ui'
import App from './App.vue'
import router from './routes'
import Highlight from './views/highlight'
import Sparkline from 'vue-sparklines'

Vue.config.debug = true

Vue.use(ZpUI)
// Vue.use(Collapse)
// Vue.use(Dropdownlist)
// Vue.use(Experience)
// Vue.use(AnimateNumber)
// Vue.use(CircleProgress)
// Vue.use(Table)
// Vue.use(Pagination)
// Vue.use(Timeline)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(Switch)
// Vue.use(Cascader)
// Vue.use(Dialog)
// Vue.use(Slider)
// Vue.use(Tooltip)
// Vue.use(Popover)
// Vue.use(Scroller)
// Vue.use(Carousel)
// Vue.use(CarouselItem)
// Vue.use(Breadcrumb)

// Vue.directive(Watermark.name, WatermarkDirective)

// Vue.prototype.$alert = DialogBox.alert
// Vue.prototype.$confirm = DialogBox.confirm
// Vue.prototype.$message = Message
// Vue.prototype.$info = Information

Vue.use(Highlight)
Vue.use(Sparkline)

router.afterEach(() => {
  // window.scrollTo(0, 0)
  setTimeout(() => {
    const scroller = document.querySelector('.content-scroller .zp-scroller-wrap')
    scroller && (scroller.scrollTop = 0)
  }, 0)
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#main',
  render: h => h(App)
})
