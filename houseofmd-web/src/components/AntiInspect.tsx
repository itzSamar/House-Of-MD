import { useEffect } from 'react'

/**
 * Deterrents only. Not a security boundary.
 * Users can always bypass via browser settings, disabling JS, screenshots, etc.
 */
export function AntiInspect() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      e.preventDefault()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      const isMac = navigator.platform.toLowerCase().includes('mac')
      const metaOrCtrl = isMac ? e.metaKey : e.ctrlKey

      // F12
      if (e.key === 'F12') {
        e.preventDefault()
        return
      }

      // Ctrl+Shift+I/J/C, Cmd+Opt+I/J/C
      if ((e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) || (e.metaKey && e.altKey && ['i', 'j', 'c'].includes(key))) {
        e.preventDefault()
        return
      }

      // View source: Ctrl+U / Cmd+U
      if (metaOrCtrl && key === 'u') {
        e.preventDefault()
        return
      }

      // Save page: Ctrl+S / Cmd+S
      if (metaOrCtrl && key === 's') {
        e.preventDefault()
        return
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    window.addEventListener('keydown', onKeyDown, { capture: true })

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
      window.removeEventListener('keydown', onKeyDown, { capture: true } as any)
    }
  }, [])

  return null
}

