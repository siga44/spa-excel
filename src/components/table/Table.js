import {ExcelComponent} from '@core/ExcelComponent'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  // onClick() {
  //   console.log('click')
  // }

  // onMousedown(event) {
  //   console.log('mousedown', console.log(event.target))
  // }

  // onMousemove() {
  //   console.log('mousemove')
  // }

  // onMouseup() {
  //   console.log('mouseup')
  // }

  toHTML() {
    return createTable(20)
  }
}
