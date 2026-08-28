import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Same guarantee as Reveal.jsx: trigger on scroll-into-view when the
// browser's IntersectionObserver cooperates, but never leave the number
// stuck at 0 forever if it doesn't.
const FALLBACK_MS = 3000

function CountUp({ value, suffix = '', duration = 1.8, thousands = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [fallback, setFallback] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), FALLBACK_MS)
    return () => clearTimeout(t)
  }, [])

  const shouldCount = inView || fallback

  useEffect(() => {
    if (!shouldCount) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [shouldCount, value, duration])

  const formatted = thousands ? display.toLocaleString('pt-BR') : display

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}

export default CountUp
