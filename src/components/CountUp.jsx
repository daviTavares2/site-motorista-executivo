import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function CountUp({ value, suffix = '', duration = 1.8, thousands = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  const formatted = thousands ? display.toLocaleString('pt-BR') : display

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}

export default CountUp
