import { motion } from 'framer-motion'
import { Clock3, Repeat, ShieldCheck, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import TypeCycle from './TypeCycle'

const ATTRIBUTES = [
  { icon: Clock3, label: 'Pontualidade' },
  { icon: Sparkles, label: 'Conforto e segurança' },
  { icon: Repeat, label: 'Sempre o mesmo motorista' },
  { icon: ShieldCheck, label: 'Atendimento 24h' },
]

const QUOTE_STATS = ['mais de 22 mil viagens', '+ de 10 mil avaliações']

function WhyChoose() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal
          as="blockquote"
          delay={0}
          className="text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl"
        >
          "Após 7 anos e{' '}
          <TypeCycle
            words={QUOTE_STATS}
            className="text-accent"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.35)' }}
          />
          , a nossa prioridade continua a mesma:{' '}
          <span
            className="text-accent"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.35)' }}
          >
            te levar com conforto, segurança e pontualidade
          </span>
          — sempre com o mesmo motorista, sem surpresas."
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ATTRIBUTES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={0.12 + i * 0.08} className="h-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
                className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/25">
                  <Icon size={19} strokeWidth={2} />
                </span>
                <p className="text-sm font-medium text-text">{label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
