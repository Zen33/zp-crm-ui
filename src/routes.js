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
    path: '/circleprogress',
    component: r => require.ensure([], () => r(require('./views/CircleProgress.vue')), 'circleprogress')
  }, {
    path: '/animatenumber',
    component: r => require.ensure([], () => r(require('./views/AnimateNumber.vue')), 'animatenumber')
  }, {
    path: '/table',
    component: r => require.ensure([], () => r(require('./views/Table.vue')), 'table')
  }, {
    path: '/checkbox',
    component: r => require.ensure([], () => r(require('./views/Checkbox.vue')), 'checkbox')
  }, {
    path: '/radio',
    component: r => require.ensure([], () => r(require('./views/Radio.vue')), 'radio')
  }, {
    path: '/timeline',
    component: r => require.ensure([], () => r(require('./views/Timeline.vue')), 'timeline')
  }, {
    path: '/watermark',
    component: r => require.ensure([], () => r(require('./views/Watermark.vue')), 'watermark')
  }, {
    path: '/',
    component: r => require.ensure([], () => r(require('./views/Landing.vue')), 'landing')
  }]
})
