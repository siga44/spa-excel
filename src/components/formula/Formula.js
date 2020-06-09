import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
    <div class="excel__formula-logo">f(x)=</div>
    <div 
      class="excel__formula-input" 
      contenteditable 
      spellcheck="false">
    </div>
    `
  }

  onInput(e) {
    console.log('onInput', e)
  }

  onClick(e) {
    console.log('onClick', e)
  }
}
