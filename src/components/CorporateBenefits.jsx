import { ArrowRight, CalendarCheck, ShieldCheck, UserCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const BENEFITS = [
  {
    icon: UserCheck,
    title: 'Sempre o mesmo motorista',
    description:
      'Sem revezamento de profissionais — você é atendido sempre pela mesma pessoa, que já conhece sua rotina e preferências.',
  },
  {
    icon: CalendarCheck,
    title: 'Pontualidade comprovada',
    description:
      '7 anos de experiência e mais de 22 mil viagens sustentando agendas apertadas, sem atraso.',
  },
  {
    icon: ShieldCheck,
    title: 'Discrição e respeito à rotina',
    description:
      'Trajetos e conversas tratados com discrição, sem burocracia desnecessária.',
  },
]

function CorporateBenefits() {
  return (
    <section id="planos-corporativos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Planos corporativos"
          title="Atendimento dedicado para executivos e empresas"
          subtitle="Ideal para quem quer um ponto de contato fixo e de confiança, sem trocar de motorista a cada corrida."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 0.1}
              className="rounded-2xl border border-border bg-card p-7"
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
              <a
                href="#contato"
                className="group mt-5 flex items-center gap-1.5 text-sm font-medium text-text"
              >
                Saiba mais
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporateBenefits
