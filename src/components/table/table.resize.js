import {$} from '@core/dom'

export function resizeHandler($root, event, target) {
  const rootCoords = $root.getCoords()
  const height = rootCoords.height
  const width = rootCoords.width
  let value

  if (target) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()

    if (target === 'col') {
      $resizer.css({
        opacity: 1,
        bottom: `${-height + coords.height + 18}px`
      })
      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        value = coords.width + delta
        $resizer.css({right: `${-delta}px`})
      }
    } else {
      $resizer.css({
        opacity: 1,
        right: `${-width}px`
      })
      document.onmousemove = e => {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({bottom: `${-delta}px`})
      }
    }

    document.onmouseup = e => {
      if (target === 'col') {
        $root.findAll(`[data-col="${$parent.data.col}"]`).forEach(el => $(el).css({width: value + 'px'}))
      } else {
        $parent.css({height: value + 'px'})
      }
      document.onmousemove = null
      document.onmouseup = null
      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      })
    }
  }
}
