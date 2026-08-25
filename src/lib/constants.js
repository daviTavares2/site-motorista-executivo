export const DRIVER = {
  name: 'Adriano Silva',
  firstName: 'Adriano',
  phoneDisplay: '(12) 98105-6578',
  phoneDigits: '5512981056578',
  tagline: 'Conforto, segurança e pontualidade!',
  vehicle: 'Hyundai HB20S',
  stats: {
    years: '7',
    trips: '22.501',
    fiveStarTrips: '10 mil+',
    availability: '24h',
  },
  badges: [
    { label: 'Motorista parceiro superestrela', count: 82 },
    { label: 'Ótimo atendimento', count: 247 },
    { label: 'Muito simpático', count: 26 },
  ],
  reviews: [
    'Motorista muito atencioso, fez uma ótima viagem em uma rota muito ágil.',
    'Simpático, carro limpo, confortável e ótimo atendimento.',
    'Um ótimo motorista.',
  ],
  services: [
    'Corridas agendadas',
    'Translados até o aeroporto',
    'Transporte executivo',
    'Viagens',
  ],
}

export const WHATSAPP_LINK = `https://wa.me/${DRIVER.phoneDigits}`

export function whatsappLinkWithMessage(message) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
}
