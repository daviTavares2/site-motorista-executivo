import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInViewport } from '../lib/useInViewport'

function CountUp({ value, suffix = '', duration = 1.8, thousands = false }) {
  const [ref, visible] = useInViewport()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [visible, value, duration])

  const formatted = thousands ? display.toLocaleString('pt-BR') : display

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}

export default CountUp
