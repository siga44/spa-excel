export class TableSelection {
  constructor() {
    this.group = []
  }

  // $el is an instance of Dom class
  select($el) {
    this.group.push($el)
    $el.addClass('selected')
  }

  selectGroup() {}
}
