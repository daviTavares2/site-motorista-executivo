import { MessageCircle, Phone } from 'lucide-react'
import { DRIVER, WHATSAPP_LINK } from '../lib/constants'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos corporativos', href: '#planos-corporativos' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-alt/50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-bold tracking-tight text-text ring-1 ring-accent/30">
                AS
              </span>
              <span className="text-base font-semibold text-text">
                {DRIVER.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Motorista executivo particular, {DRIVER.stats.years} anos de
              experiência e mais de {DRIVER.stats.trips} viagens realizadas.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${DRIVER.phoneDigits}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text"
                >
                  <Phone size={15} />
                  {DRIVER.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-text-secondary">
            © {year} {DRIVER.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
