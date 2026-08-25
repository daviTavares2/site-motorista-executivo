import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP_LINK } from '../lib/constants'
import { fadeUpDelay } from '../lib/motion'

const INITIAL_FORM = { name: '', company: '', phone: '' }

function FinalCTA() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Informe seu nome'
    if (!form.phone.trim()) nextErrors.phone = 'Informe seu telefone'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const lines = [
      `Olá, Adriano! Meu nome é ${form.name} e quero solicitar uma cotação.`,
      form.company.trim() ? `Empresa: ${form.company}` : null,
      `Telefone para contato: ${form.phone}`,
    ].filter(Boolean)

    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noreferrer',
    )
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div {...fadeUpDelay(0)}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-text">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Solicitar cotação
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto pra sua próxima corrida?
          </h2>
          <p className="mt-4 max-w-md text-base text-text-secondary sm:text-lg">
            Preencha os dados abaixo e fale direto com o Adriano no WhatsApp
            — resposta rápida e prioridade na agenda.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-text-secondary">
            <CheckCircle2 size={16} className="text-accent" />
            Sem compromisso, sem burocracia.
          </div>
        </motion.div>

        <motion.form
          {...fadeUpDelay(0.12)}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-7 sm:p-8"
        >
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-text">Nome</span>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Seu nome"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors focus:border-accent/50"
              />
              {errors.name && (
                <span className="text-xs text-text-secondary">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-text">
                Empresa <span className="text-text-secondary">(opcional)</span>
              </span>
              <input
                type="text"
                value={form.company}
                onChange={handleChange('company')}
                placeholder="Nome da empresa"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors focus:border-accent/50"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-text">Telefone</span>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                placeholder="(00) 00000-0000"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors focus:border-accent/50"
              />
              {errors.phone && (
                <span className="text-xs text-text-secondary">
                  {errors.phone}
                </span>
              )}
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg"
            >
              Solicitar cotação
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default FinalCTA
