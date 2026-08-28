import { motion } from 'framer-motion'
import { useInViewport } from '../lib/useInViewport'

const EASE = [0.16, 1, 0.3, 1]

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
  const [ref, visible] = useInViewport()
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
