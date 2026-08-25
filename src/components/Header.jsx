import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DRIVER, WHATSAPP_LINK } from '../lib/constants'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos corporativos', href: '#planos-corporativos' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <motion.a
          href="#top"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-bold tracking-tight text-text ring-1 ring-accent/30">
            AS
          </span>
          <span className="text-base font-semibold tracking-tight text-text">
            {DRIVER.name}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-text-secondary sm:block">
            Motorista Executivo
          </span>
        </motion.a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
              className="group relative text-xs font-medium uppercase tracking-widest text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            whileHover={{
              scale: 1.04,
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.4), 0 8px 24px rgba(255,255,255,0.25)',
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
          >
            <MessageCircle size={15} strokeWidth={2.25} />
            Entrar em contato
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest text-text-secondary transition-colors hover:bg-card hover:text-text"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg"
              >
                <MessageCircle size={15} strokeWidth={2.25} />
                Entrar em contato
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
