import { motion } from 'framer-motion'
import { fadeUpDelay } from '../lib/motion'

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <motion.div
          {...fadeUpDelay(0)}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-text"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        {...fadeUpDelay(0.08)}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...fadeUpDelay(0.16)}
          className="mt-4 text-base text-text-secondary sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
