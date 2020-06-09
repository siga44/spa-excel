class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  on(eventType, callback) {
    // "on" method is a same as an addEventListener
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
}

// event.target
export function $(selector) {
  return new Dom(selector)
}

// "create" method for Class "$"
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    // Getting a class name (f.e. class="excel__table") and adding it into classList of an element
    el.classList.add(classes)
  }
  // Transfering el in $ to assign correct value
  return $(el)
}
