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

const FONT_CHECKS = ['700 1em Montserrat', '800 1em Montserrat']
const FONT_TIMEOUT = 1200

function IntroSplash({ onFinish }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [ready, setReady] = useState(false)

  const showingPrefix = stepIndex < WORDS.length

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Wait for the Montserrat webfont to actually be loaded before showing any
  // text — on a slow connection (common on mobile), Safari/WebKit renders a
  // fallback font with different metrics first, which breaks this layout
  // (words overlap/wrap wrong) and can look like the page is broken.
  useEffect(() => {
    let cancelled = false
    const markReady = () => {
      if (!cancelled) setReady(true)
    }

    // Some mobile in-app browsers (Instagram/WhatsApp webviews, etc.) expose
    // a `document.fonts` object with a missing or non-conformant `load()`,
    // which can throw synchronously instead of rejecting a promise — that
    // throw would otherwise skip the `.then` below and strand the splash.
    try {
      if (typeof document !== 'undefined' && typeof document.fonts?.load === 'function') {
        Promise.race([
          Promise.all(FONT_CHECKS.map((font) => document.fonts.load(font))),
          new Promise((resolve) => setTimeout(resolve, FONT_TIMEOUT)),
        ]).then(markReady, markReady)
      } else {
        markReady()
      }
    } catch {
      markReady()
    }

    // Absolute safety net: whatever the browser does with font loading above,
    // never let the splash hide the site for longer than this.
    const hardFallback = setTimeout(markReady, FONT_TIMEOUT + 1500)

    return () => {
      cancelled = true
      clearTimeout(hardFallback)
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    const isLast = stepIndex === WORDS.length
    const delay = isLast ? FINAL_HOLD : WORD_HOLD

    const t = setTimeout(() => {
      if (isLast) {
        setDone(true)
        setTimeout(onFinish, 350)
      } else {
        setStepIndex((i) => i + 1)
      }
    }, delay)

    return () => clearTimeout(t)
  }, [ready, stepIndex, onFinish])

  const wordKey = showingPrefix ? WORDS[stepIndex] : FINAL_TEXT
  const wordText = showingPrefix ? WORDS[stepIndex] : FINAL_TEXT

  return (
    <motion.div
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: done ? 'none' : 'auto' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <motion.div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {ready && (
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
      )}
    </motion.div>
  )
}

export default IntroSplash
