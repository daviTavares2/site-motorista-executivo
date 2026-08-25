import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { fadeUpDelay } from '../lib/motion'
import SectionHeading from './SectionHeading'

const FAQS = [
  {
    question: 'Como faço para agendar uma corrida?',
    answer:
      'Direto pelo WhatsApp: informe a data, o horário e o trajeto, e você recebe a confirmação em poucos minutos.',
  },
  {
    question: 'Atende fora do horário comercial e finais de semana?',
    answer:
      'Sim, disponibilidade 24h mediante agendamento prévio pelo WhatsApp.',
  },
  {
    question: 'Como funciona o cancelamento?',
    answer:
      'É só avisar pelo WhatsApp com a maior antecedência possível, para reorganizar a agenda do dia.',
  },
  {
    question: 'É possível ter o mesmo motorista sempre?',
    answer:
      'Sim — esse é justamente o diferencial: você é atendido sempre pelo mesmo profissional, sem revezamento.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium text-text sm:text-base">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-text-secondary"
        >
          <Plus size={15} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 pr-10 text-sm leading-relaxed text-text-secondary">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />

        <div className="mt-12">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
