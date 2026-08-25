import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { DRIVER } from '../lib/constants'
import { fadeUpDelay } from '../lib/motion'
import SectionHeading from './SectionHeading'

const TRACK_REVIEWS = [...DRIVER.reviews, ...DRIVER.reviews]

function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Avaliações reais"
          title="O que dizem os passageiros"
          subtitle="Comentários verificados de corridas realizadas por Adriano."
        />
      </div>

      <motion.div
        {...fadeUpDelay(0.1)}
        className="group relative mt-14 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-40" />

        <div className="flex w-max animate-marquee gap-5 px-6 group-hover:[animation-play-state:paused] lg:px-10">
          {TRACK_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <Quote size={22} className="text-accent" />
              <p className="text-sm leading-relaxed text-text">{review}</p>
              <p className="mt-auto text-xs uppercase tracking-widest text-text-secondary">
                Avaliação verificada
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          {...fadeUpDelay(0.3)}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {DRIVER.badges.map((badge) => (
            <span
              key={badge.label}
              className="rounded-full border border-border bg-bg-alt px-4 py-2 text-xs font-medium text-text-secondary"
            >
              <span className="text-text">{badge.count}</span> elogios ·{' '}
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
