import {range} from "@/core/utils"

export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function isShift(event) {
  return event.shiftKey
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  return rows.reduce((acc, row) => {
    cols.forEach(col => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, {col, row}) {
  const MIN_VALUE = 0
  const MAX_COL_VALUE = 25
  const MAX_ROW_VALUE = 254
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row = row + 1 > MAX_ROW_VALUE ? MAX_ROW_VALUE : row + 1
      break
    case 'Tab':
    case 'ArrowRight':
      col = col + 1 > MAX_COL_VALUE ? MAX_COL_VALUE : col + 1
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }
  return `[data-id="${row}:${col}"]`
}
