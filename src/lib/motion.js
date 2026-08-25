export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

export function fadeUpDelay(delay = 0) {
  return {
    ...fadeUp,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }
}
