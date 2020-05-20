class Dom {}

export function $() {
  return new Dom()
}

// Creating a "create" method for Class "$"
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    // Getting a class name (f.e. class="excel__table") and adding it into classList of an element
    el.classList.add(classes)
  }
  return el
}
