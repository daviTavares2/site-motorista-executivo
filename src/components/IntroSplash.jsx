import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PREFIX = 'Viagens com'
const WORDS = ['conforto', 'qualidade', 'pontualidade']
const FINAL_TEXT = 'Entre em contato por aqui'

const WORD_HOLD = 1150
const FINAL_HOLD = 1600
const TRANSITION = { duration: 0.55, ease: [0.16, 1, 0.3, 1] }

const glow = { textShadow: '0 0 40px rgba(255,255,255,0.4)' }

const flip = {
  initial: { opacity: 0, y: 30, rotateX: -70 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  exit: { opacity: 0, y: -30, rotateX: 70 },
}

const flipStyle = {
  ...glow,
  backfaceVisibility: 'hidden',
  transformOrigin: 'center bottom',
}

// This overlay sits on top of the real site (which is always rendered
// underneath — see App.jsx) purely as a decorative reveal animation. It
// hides itself two independent ways on purpose:
//  1. The `done` state below, driven by the word-cycle timers — the
//     intended smooth cross-fade.
//  2. The `intro-force-hide` CSS animation (defined in index.css), which
//     unconditionally fades and disables this overlay a few seconds later
//     no matter what — even if this component's JS never runs at all (ad
//     blocker, crash, unsupported API, slow/failed font load). CSS
//     animations always win over inline styles, so this is a hard
//     guarantee independent of React.
// Because of that guarantee, nothing here needs to be bulletproof: if it
// breaks, the visitor sees the intro linger a couple seconds longer, not a
// permanently blank page.
function IntroSplash() {
  const [stepIndex, setStepIndex] = useState(0)
  const [done, setDone] = useState(false)

  const showingPrefix = stepIndex < WORDS.length

  useEffect(() => {
    const isLast = stepIndex === WORDS.length
    const delay = isLast ? FINAL_HOLD : WORD_HOLD

    const t = setTimeout(() => {
      if (isLast) {
        setDone(true)
      } else {
        setStepIndex((i) => i + 1)
      }
    }, delay)

    return () => clearTimeout(t)
  }, [stepIndex])

  const wordKey = showingPrefix ? WORDS[stepIndex] : FINAL_TEXT
  const wordText = showingPrefix ? WORDS[stepIndex] : FINAL_TEXT

  return (
    <motion.div
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: done ? 'none' : 'auto' }}
      className="intro-force-hide fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <div
        className="glow-pulse pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]"
        style={{ animationDuration: '4s' }}
      />

      <p
        className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 py-10 text-center text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl"
        style={{ perspective: 900 }}
      >
        <AnimatePresence>
          {showingPrefix && (
            <motion.span
              key="prefix"
              initial={flip.initial}
              animate={flip.animate}
              exit={flip.exit}
              transition={TRANSITION}
              style={flipStyle}
              className="inline-block"
            >
              {PREFIX}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.span
            key={wordKey}
            initial={flip.initial}
            animate={flip.animate}
            exit={flip.exit}
            transition={TRANSITION}
            style={flipStyle}
            className="inline-block"
          >
            {wordText}
          </motion.span>
        </AnimatePresence>
      </p>
    </motion.div>
  )
}

export default IntroSplash
