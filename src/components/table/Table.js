import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {shouldResize} from './table.functions'
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
    return createTable(20)
  }

  prepare() {}

  init() {
    super.init()

    this.selection = new TableSelection()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    const target = shouldResize(event)
    if (target) resizeHandler(this.$root, event, target)
  }
}
