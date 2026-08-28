import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const EASE = [0.16, 1, 0.3, 1]

// A "reveal-on-scroll, but with a guarantee" wrapper: it uses framer-motion's
// IntersectionObserver-backed useInView for the nice fade-in-as-you-scroll
// effect, but never trusts it completely — on some mobile browsers/webviews
// that observer can silently never fire, which used to leave whole sections
// stuck at opacity: 0 forever. The timer below forces the reveal after a few
// seconds regardless, so content is always guaranteed to show up eventually
// even if the scroll-triggered version never plays.
const FALLBACK_MS = 3000

function Reveal({
  as = 'div',
  delay = 0,
  duration = 0.6,
  ease = EASE,
  initial = { opacity: 0, y: 24 },
  target = { opacity: 1, y: 0 },
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), FALLBACK_MS)
    return () => clearTimeout(t)
  }, [])

  const visible = inView || fallback
  const MotionTag = motion[as]

  return (
    <MotionTag
      ref={ref}
      initial={initial}
      animate={visible ? target : undefined}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
