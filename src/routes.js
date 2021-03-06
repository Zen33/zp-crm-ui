import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/' // template: 'Not Found.'
  }, {
    path: '/dropdownlist',
    component: r => require.ensure([], () => r(require('./views/Dropdownlist.vue')), 'dropdownlist')
  }, {
    path: '/collapse',
    component: r => require.ensure([], () => r(require('./views/Collapse.vue')), 'collapse')
  }, {
    path: '/experience',
    component: r => require.ensure([], () => r(require('./views/Experience.vue')), 'experience')
  }, {
    path: '/progress',
    component: r => require.ensure([], () => r(require('./views/Progress.vue')), 'progress')
  }, {
    path: '/dynamicnumbers',
    component: r => require.ensure([], () => r(require('./views/DynamicNumbers.vue')), 'dynamicnumbers')
  }, {
    path: '/table',
    component: r => require.ensure([], () => r(require('./views/Table.vue')), 'table')
  }, {
    path: '/pagination',
    component: r => require.ensure([], () => r(require('./views/Pagination.vue')), 'pagination')
  }, {
    path: '/checkbox',
    component: r => require.ensure([], () => r(require('./views/Checkbox.vue')), 'checkbox')
  }, {
    path: '/radio',
    component: r => require.ensure([], () => r(require('./views/Radio.vue')), 'radio')
  }, {
    path: '/switch',
    component: r => require.ensure([], () => r(require('./views/Switch.vue')), 'switch')
  }, {
    path: '/cascader',
    component: r => require.ensure([], () => r(require('./views/Cascader.vue')), 'cascader')
  }, {
    path: '/timeline',
    component: r => require.ensure([], () => r(require('./views/Timeline.vue')), 'timeline')
  }, {
    path: '/watermark',
    component: r => require.ensure([], () => r(require('./views/Watermark.vue')), 'watermark')
  }, {
    path: '/dialog',
    component: r => require.ensure([], () => r(require('./views/Dialog.vue')), 'dialog')
  }, {
    path: '/message',
    component: r => require.ensure([], () => r(require('./views/Message.vue')), 'message')
  }, {
    path: '/slider',
    component: r => require.ensure([], () => r(require('./views/Slider.vue')), 'slider')
  }, {
    path: '/tooltip',
    component: r => require.ensure([], () => r(require('./views/Tooltip.vue')), 'tooltip')
  }, {
    path: '/popover',
    component: r => require.ensure([], () => r(require('./views/Popover.vue')), 'popover')
  }, {
    path: '/scroller',
    component: r => require.ensure([], () => r(require('./views/Scroller.vue')), 'scroller')
  }, {
    path: '/sparkline',
    component: r => require.ensure([], () => r(require('./views/Sparkline.vue')), 'sparkline')
  }, {
    path: '/dialogbox',
    component: r => require.ensure([], () => r(require('./views/DialogBox.vue')), 'dialogbox')
  }, {
    path: '/information',
    component: r => require.ensure([], () => r(require('./views/Information.vue')), 'information')
  }, {
    path: '/carousel',
    component: r => require.ensure([], () => r(require('./views/Carousel.vue')), 'carousel')
  }, {
    path: '/breadcrumb',
    component: r => require.ensure([], () => r(require('./views/Breadcrumb.vue')), 'breadcrumb')
  }, {
    path: '/upload',
    component: r => require.ensure([], () => r(require('./views/Upload.vue')), 'upload')
  }, {
    path: '/sheet',
    component: r => require.ensure([], () => r(require('./views/Sheet.vue')), 'sheet')
  }, {
    path: '/rate',
    component: r => require.ensure([], () => r(require('./views/Rate.vue')), 'rate')
  }, {
    path: '/loader',
    component: r => require.ensure([], () => r(require('./views/Loader.vue')), 'loader')
  }, {
    path: '/steps',
    component: r => require.ensure([], () => r(require('./views/Steps.vue')), 'steps')
  }, {
    path: '/card',
    component: r => require.ensure([], () => r(require('./views/Card.vue')), 'card')
  }, {
    path: '/tree',
    component: r => require.ensure([], () => r(require('./views/Tree.vue')), 'tree')
  }, {
    path: '/tabs',
    component: r => require.ensure([], () => r(require('./views/Tabs.vue')), 'tabs')
  }, {
    path: '/tag',
    component: r => require.ensure([], () => r(require('./views/Tag.vue')), 'tag')
  }, {
    path: '/datepicker',
    component: r => require.ensure([], () => r(require('./views/DatePicker.vue')), 'datepicker')
  }, {
    path: '/timepicker',
    component: r => require.ensure([], () => r(require('./views/TimePicker.vue')), 'timepicker')
  }, {
    path: '/datetimepicker',
    component: r => require.ensure([], () => r(require('./views/DateTimePicker.vue')), 'datetimespicker')
  }, {
    path: '/picker',
    component: r => require.ensure([], () => r(require('./views/Picker.vue')), 'picker')
  }, {
    path: '/sensor',
    component: r => require.ensure([], () => r(require('./views/Sensor.vue')), 'sensor')
  }, {
    path: '/',
    component: r => require.ensure([], () => r(require('./views/Landing.vue')), 'landing')
  }]
})
