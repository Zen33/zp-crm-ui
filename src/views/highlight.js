const hljs = require('highlight.js')
// import hljs from 'highlight.js'

const Highlight = {
  install (Vue) {
    Vue.directive('highlight', {
      deep: true,
      bind (el, binding) {
        const targets = el.querySelectorAll('code')
        const len = targets.length
        let target
        let i = 0
        for (; i < len; i += 1) {
          target = targets[i]
          if (typeof binding.value === 'string') {
            target.textContent = binding.value
          }
          hljs.highlightBlock(target)
        }
      },
      componentUpdated (el, binding) {
        const targets = el.querySelectorAll('code')
        const len = targets.length
        let target
        let i = 0
        for (; i < len; i += 1) {
          target = targets[i]
          if (typeof binding.value === 'string') {
            target.textContent = binding.value
            hljs.highlightBlock(target)
          }
        }
      }
    })
  }
}

export default Highlight
