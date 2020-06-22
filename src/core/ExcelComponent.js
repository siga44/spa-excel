import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubs = []

    this.prepare()
  }

  // Sets component before init()
  prepare() {}

  // Returns component template
  toHTML() {
    return ''
  }

  // Notifying listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribing on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }

  // Initing component, adding dom listeners
  init() {
    this.initDomListeners()
  }

  // Removing component, clearing listeners
  destroy() {
    this.removeDomListeners()
    this.unsubs.forEach(unsub => unsub())
  }
}
