import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    const target = event.target.dataset.resize
    if (target) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      if (target === 'col') {
        const cols = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

        document.onmousemove = e => {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          cols.forEach(el => $(el).css({width: value + 'px'}))
        }
      } else {
        document.onmousemove = e => {
          const delta = e.pageY - coords.bottom
          const value = coords.height + delta
          $parent.css({height: value + 'px'})
        }
      }

      document.onmouseup = e => {
        document.onmousemove = null
      }
    }
  }
}
