import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('~~No root provided for DomListener~~')
    } else {
      this.$root = $root
      this.listeners = listeners
    }
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`~~Method ${method} is not implemented in ${this.name} Component~~`)
      }
      console.log(this[method])
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDomListeners() {

  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}