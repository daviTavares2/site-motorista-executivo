import CountUp from './CountUp'
import Reveal from './Reveal'
import { DRIVER } from '../lib/constants'

const STATS = [
  { value: Number(DRIVER.stats.years), suffix: '+', label: 'Anos de experiência' },
  {
    value: Number(DRIVER.stats.trips.replace(/\D/g, '')),
    suffix: '',
    thousands: true,
    label: 'Viagens realizadas',
  },
  { value: 10, suffix: ' mil+', label: 'Avaliações 5 estrelas' },
  { value: 24, suffix: 'h', label: 'Disponibilidade' },
]

function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-alt/50 py-14">
      <div
        className="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[70px]"
        style={{ animationDuration: '5s' }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            initial={{ opacity: 0, y: 24, scale: 0.85 }}
            target={{ opacity: 1, y: 0, scale: 1 }}
            ease={[0.34, 1.56, 0.64, 1]}
            className="relative text-center"
          >
            <p className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                thousands={stat.thousands}
                duration={1.6 + i * 0.15}
              />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-text-secondary sm:text-sm">
              {stat.label}
            </p>
            <Reveal
              as="span"
              delay={i * 0.1 + 1.4}
              initial={{ scaleX: 0 }}
              target={{ scaleX: 1 }}
              className="mx-auto mt-3 block h-px w-8 origin-center bg-accent/50"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
