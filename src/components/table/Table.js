import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {shouldResize, isCell, isShift, matrix} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(255)
  }

  prepare() {}

  init() {
    super.init()

    this.selection = new TableSelection()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event, shouldResize(event))
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (isShift(event)) {
        const $cells = matrix($target, this.selection.current).map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}
