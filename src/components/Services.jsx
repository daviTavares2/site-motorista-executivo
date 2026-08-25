import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, CalendarClock, Plane, Route } from 'lucide-react'
import { whatsappLinkWithMessage } from '../lib/constants'
import { fadeUpDelay } from '../lib/motion'
import SectionHeading from './SectionHeading'

const SERVICES = [
  {
    icon: CalendarClock,
    title: 'Corridas agendadas',
    description: 'Reserve com antecedência para compromissos e reuniões.',
    bullets: ['Horário combinado com folga', 'Confirmação pelo WhatsApp'],
  },
  {
    icon: Plane,
    title: 'Transfer aeroporto',
    description: 'Traslados de e para o aeroporto, com monitoramento do voo.',
    bullets: ['Acompanhamento de horário de voo', 'Ajuda com bagagem'],
  },
  {
    icon: Briefcase,
    title: 'Transporte executivo',
    description: 'Deslocamentos para reuniões, eventos e compromissos de trabalho.',
    bullets: ['Discrição e pontualidade', 'Veículo confortável e limpo'],
  },
  {
    icon: Route,
    title: 'Viagens',
    description: 'Trajetos mais longos entre cidades, no seu ritmo.',
    bullets: ['Rota combinada com você', 'Mesmo motorista o trajeto todo'],
  },
]

function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Serviços"
          title="Um motorista para cada momento da sua rotina"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description, bullets }, i) => (
            <motion.div
              key={title}
              {...fadeUpDelay(i * 0.1)}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/25">
                <Icon size={19} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLinkWithMessage(
                  `Olá, Adriano! Quero saber mais sobre o serviço de ${title.toLowerCase()}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 flex items-center gap-1.5 text-sm font-medium text-text"
              >
                Solicitar
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
