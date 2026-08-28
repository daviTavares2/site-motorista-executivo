import { motion } from 'framer-motion'
import { ArrowRight, Clock, MessageCircle, Star } from 'lucide-react'
import { INTRO_REVEAL_DELAY } from './IntroSplash'
import { DRIVER, WHATSAPP_LINK } from '../lib/constants'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(160,160,170,0.14) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div
        className="glow-pulse pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]"
        style={{ animationDuration: '6s' }}
      />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: INTRO_REVEAL_DELAY }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Motorista executivo particular
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: INTRO_REVEAL_DELAY + 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-[4rem]"
          >
            <span className="block">Te levo</span>
            <span
              className="block text-accent"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}
            >
              onde quiser.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: INTRO_REVEAL_DELAY + 0.2 }}
            className="mt-6 max-w-md text-base text-text-secondary sm:text-lg"
          >
            7 anos de experiência, {DRIVER.stats.trips}{' '}
            viagens realizadas e atendimento {DRIVER.stats.availability} —
            sempre com o mesmo motorista.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: INTRO_REVEAL_DELAY + 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.4), 0 10px 30px rgba(255,255,255,0.3)',
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
            >
              Entrar em contato
              <ArrowRight size={16} />
            </motion.a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
            >
              <MessageCircle size={16} className="text-accent" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: INTRO_REVEAL_DELAY + 0.4 }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/30">
              <Star size={18} className="fill-accent text-accent" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-text">
                Motorista parceiro superestrela
              </p>
              <p className="text-xs text-text-secondary">
                {DRIVER.stats.trips} viagens · {DRIVER.stats.fiveStarTrips}{' '}
                avaliações 5 estrelas
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: INTRO_REVEAL_DELAY + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              src="/videos/hero-driver.mp4"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: INTRO_REVEAL_DELAY + 0.9, duration: 0.5 },
              y: { delay: 1.4, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -right-4 top-8 flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <Clock size={16} className="text-accent" />
            <div className="text-xs">
              <p className="font-semibold text-text">24h</p>
              <p className="text-text-secondary">Disponível</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: INTRO_REVEAL_DELAY + 1.1, duration: 0.5 },
              y: { delay: 1.6, duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <div className="flex items-center gap-1 text-sm font-semibold text-text">
              <Star size={13} className="fill-accent text-accent" /> Superestrela
            </div>
            <p className="text-xs text-text-secondary">{DRIVER.stats.trips} viagens</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
