import { Component } from 'react'
import { MessageCircle } from 'lucide-react'
import { DRIVER, WHATSAPP_LINK } from '../lib/constants'

// Without this, a runtime error anywhere in the tree below unmounts the
// entire app, leaving just the plain black <body> background — the site
// looks "gone" with no way to recover. This keeps a minimal, dependency-free
// fallback (no framer-motion, no other components) so the one thing that
// actually matters — getting the visitor to WhatsApp — still works.
class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="text-2xl font-bold tracking-tight text-text">
            {DRIVER.name} — Motorista Executivo
          </p>
          <p className="max-w-sm text-sm text-text-secondary">
            Estamos com uma instabilidade nesta página. Fale direto pelo
            WhatsApp para solicitar sua corrida.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
