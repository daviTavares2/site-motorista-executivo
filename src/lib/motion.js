// `animate` (mount-triggered) instead of `whileInView` (scroll-triggered) on
// purpose: whileInView depends on IntersectionObserver actually firing, and
// on some mobile browsers/webviews it silently never does — which left
// entire sections stuck at opacity: 0 forever as soon as you scrolled to
// them. Animating on mount means every section fades in shortly after the
// page loads regardless of scroll position, trading the scroll-triggered
// stagger for a guarantee that content always becomes visible.
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export function fadeUpDelay(delay = 0) {
  return {
    ...fadeUp,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }
}
