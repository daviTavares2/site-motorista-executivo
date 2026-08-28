import { WHATSAPP_LINK } from '../lib/constants'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STEPS = [
  {
    title: 'Chame no WhatsApp',
    description: 'Envie a data, o horário e o trajeto da corrida.',
  },
  {
    title: 'Confirmação rápida',
    description: 'Resposta em poucos minutos com o horário combinado.',
  },
  {
    title: 'Adriano te busca',
    description: 'No local e horário combinados, sem atraso.',
  },
  {
    title: 'Chegue com pontualidade',
    description: 'E o conforto de sempre ter o mesmo motorista.',
  },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do pedido à chegada, sem fricção"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <span
                className="text-6xl font-bold text-transparent"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Solicitar motorista
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default HowItWorks
