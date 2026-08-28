import { useEffect, useRef, useState } from 'react'

const MARGIN_PX = 80
const POLL_MS = 500

// Drives "has this scrolled into view" off plain scroll/resize events and
// getBoundingClientRect, instead of IntersectionObserver (via Framer
// Motion's useInView) — which on some mobile browsers we've hit on this
// project doesn't fire reliably, leaving whileInView-style reveals stuck.
// A direct position check on a well-supported event can't silently fail to
// fire the way an observer callback can.
//
// A single shared scroll/resize listener and polling interval track every
// element that wants this, instead of each one setting up its own — a page
// with a few dozen reveal-on-scroll elements would otherwise run that many
// independent listeners and timers, which adds up on a phone.
const watched = new Set()
let started = false

function checkAll() {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  for (const entry of watched) {
    const rect = entry.el.getBoundingClientRect()
    if (rect.top < viewportHeight - entry.marginPx && rect.bottom > 0) {
      entry.onVisible()
    }
  }
}

function ensureStarted() {
  if (started) return
  started = true
  window.addEventListener('scroll', checkAll, { passive: true })
  window.addEventListener('resize', checkAll)
  setInterval(checkAll, POLL_MS)
}

export function useInViewport(marginPx = MARGIN_PX) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView || !ref.current) return

    ensureStarted()
    const entry = { el: ref.current, marginPx, onVisible: () => setInView(true) }
    watched.add(entry)
    checkAll()

    return () => {
      watched.delete(entry)
    }
  }, [inView, marginPx])

  return [ref, inView]
}
