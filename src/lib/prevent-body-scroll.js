import { useCallback, useEffect, useState } from 'react'

/**
 * Toggle the body scroll / overflow and additional styling
 * necessary to preserve scroll position and body width (scrollbar replacement)
 * @param {boolean} isScrollInitiallyLocked - whether or not to prevent body scrolling
 */
export default function usePreventBodyScroll(isScrollInitiallyLocked = false) {
  const { overflow, paddingRight } = window.getComputedStyle(document.body)
  const [isScrollLocked, setScrollLock] = useState(isScrollInitiallyLocked)
  const [originalOverflow] = useState(overflow || '')
  const [originalPaddingRight] = useState(paddingRight || '')

  const resetStyles = useCallback(() => {
    document.body.style.overflow = originalOverflow
    document.body.style.paddingRight = originalPaddingRight
  }, [originalOverflow, originalPaddingRight])

  useEffect(() => {
    /** Get the width before toggling the style so we can calculate the scrollbar width for a smooth, jankless style change */
    const originalWidth = document.body.getBoundingClientRect().width

    /** Apply or remove overflow style */
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden'

      /** Get the _new width_ of the body (this will tell us the scrollbar width) */
      const newWidth = document.body.getBoundingClientRect().width
      const scrollBarWidth = newWidth - originalWidth

      /** If there's a diff due to scrollbars, then account for it with padding */
      document.body.style.paddingRight = Math.max(0, scrollBarWidth || 0) + 'px'
    } else {
      resetStyles()
    }

    return resetStyles
  }, [isScrollLocked])

  return [isScrollLocked, setScrollLock]
}
