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
      className={`inline-grid text-left align-baseline ${className}`}
      style={style}
    >
      {/* Every word stacked in the same grid cell reserves the width of the
          widest one, using the browser's own text layout — not a JS-measured
          pixel value that can go stale once the real webfont swaps in. */}
      {words.map((word) => (
        <span
          key={word}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
        >
          {word}
        </span>
      ))}
      <span className="col-start-1 row-start-1 whitespace-nowrap">{text}</span>
    </span>
  )
}

export default TypeCycle
