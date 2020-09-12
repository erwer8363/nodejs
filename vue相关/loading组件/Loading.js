/**
 * Created by ever on 2020/6/27.
 */
import Vue from 'Vue'
import LoadingComponent from './loading'

const LoadingConstructor = Vue.extend(LoadingComponent)

Vue.directive('loading', {
  bind(el, binding) {
    const instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: {},
    })
    el.appendChild(instance.$el)
    el.instance = instance
    Vue.nextTick(() => {
      el.instance.visible = binding.value
    })
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.instance.visible = binding.value
    }
  },
  unbind(el) {
    const mask = el.instance.$el
    if (mask.parentNode) {
      mask.parentNode.removeChild(mask)
    }
    el.instance.$destory()
    el.instance = undefined
  },
})
