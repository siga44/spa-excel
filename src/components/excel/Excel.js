import { $ } from "@core/dom"

export class Excel {
  // getting transfered selector and params from index.js
  constructor(selector, options) {
    this.$el = $(selector) // id="app" - main wrapper selector
    this.components = options.components || [] // [Header, Toolbar, Formula, Table]
  }

  getRoot() {
    // transfering params to $ to create tag <div></div> with class="excel"
    const $root = $.create('div', 'excel')
    // Handling each of getted component with $.create
    // Then creating an instance of Component class with returned from dom.js element
    // Then adding a HTML with .toHTML method which specif for each class
    // Then appending each component to $root element
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    // After getting all components returning completed $root element
    return $root
  }

  render() {
    // Getting $root element to append it to main #app
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
  }
}
