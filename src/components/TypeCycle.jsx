import { motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const TYPING_SPEED = 55
const DELETING_SPEED = 30
const PAUSE_AFTER_TYPE = 1700
const PAUSE_AFTER_DELETE = 300

function TypeCycle({ words, className = '', style }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  const [maxWidth, setMaxWidth] = useState(null)
  const measureRefs = useRef([])

  useLayoutEffect(() => {
    const widths = measureRefs.current.map((el) => el?.offsetWidth || 0)
    setMaxWidth(Math.max(...widths, 0))
  }, [words])

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        const t = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          TYPING_SPEED,
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE)
      return () => clearTimeout(t)
    }

    if (text.length > 0) {
      const t = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        DELETING_SPEED,
      )
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length)
      setPhase('typing')
    }, PAUSE_AFTER_DELETE)
    return () => clearTimeout(t)
  }, [text, phase, wordIndex, words])

  return (
    <span
      className={`relative inline-block text-left align-baseline ${className}`}
      style={{ ...style, width: maxWidth ? `${maxWidth}px` : 'auto' }}
    >
      <span className="pointer-events-none invisible absolute left-0 top-0" aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              measureRefs.current[i] = el
            }}
            className="absolute left-0 top-0 whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </span>

      <span className="whitespace-nowrap">
        {text}
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          className="ml-0.5 inline-block w-[2px] translate-y-[0.1em] bg-current align-middle"
          style={{ height: '0.85em' }}
        />
      </span>
    </span>
  )
}

export default TypeCycle
