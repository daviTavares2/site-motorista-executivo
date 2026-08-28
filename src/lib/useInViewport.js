import { useEffect, useRef, useState } from 'react'

const MARGIN_PX = 80

// Drives "has this scrolled into view" off plain scroll/resize events and
// getBoundingClientRect, instead of IntersectionObserver (via Framer
// Motion's useInView) — which on some mobile browsers we've hit on this
// project doesn't fire reliably, leaving whileInView-style reveals stuck.
// A direct position check on a well-supported event can't silently fail to
// fire the way an observer callback can.
export function useInViewport(marginPx = MARGIN_PX) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return

    const check = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < viewportHeight - marginPx && rect.bottom > 0) {
        setInView(true)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [inView, marginPx])

  return [ref, inView]
}
