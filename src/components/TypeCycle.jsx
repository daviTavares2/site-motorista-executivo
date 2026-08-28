import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TYPING_SPEED = 55
const DELETING_SPEED = 30
const PAUSE_AFTER_TYPE = 1700
const PAUSE_AFTER_DELETE = 300

function TypeCycle({ words, className = '', style }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

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
      className={`relative inline-block whitespace-nowrap text-left align-baseline ${className}`}
      style={style}
    >
      {text}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        className="ml-0.5 inline-block w-[2px] translate-y-[0.1em] bg-current align-middle"
        style={{ height: '0.85em' }}
      />
    </span>
  )
}

export default TypeCycle
