# Motorista Executivo — Landing Page

Landing page de conversão para um serviço de motorista executivo particular, construída em React com uma UI escura, tipografia forte e microinterações — pensada para transmitir confiança, discrição e status para um público executivo/corporativo.

**[Ver demo local](#como-rodar-localmente)** · Stack: React 19 · Vite · Tailwind CSS v4 · Framer Motion

---

## Sobre o projeto

O site foi construído para o Adriano Silva, motorista executivo particular com 7 anos de experiência e mais de 22 mil corridas. Em vez de um "modelo genérico de motorista", o conteúdo do site usa dados reais do perfil dele (histórico de corridas, avaliações, elogios de passageiros) — sem preços ou depoimentos inventados. Onde não havia dado real disponível (preços, política de cancelamento, seguro), o texto foi escrito para não fazer afirmações que não podem ser sustentadas, em vez de preencher com números fictícios.

O projeto foi desenvolvido de forma incremental, seção por seção, com verificação visual (Playwright/screenshots) a cada etapa — cada componente foi testado isoladamente antes de compor a página final.

## Stack e por quê

| Camada | Escolha | Motivo |
|---|---|---|
| Build/dev server | **Vite** | Cold start rápido, HMR instantâneo |
| UI | **React 19** | Componentização das 11 seções + estado local simples (splash, form, FAQ accordion) |
| Estilo | **Tailwind CSS v4** | Utilitários + tema custom via `@theme` (cores, fontes) direto no CSS, sem `tailwind.config.js` |
| Animação | **Framer Motion** | `whileInView` para entrada ao rolar, `AnimatePresence` para transições de estado (menu mobile, FAQ, splash) |
| Ícones | **lucide-react** | Ícones SVG leves e consistentes |

Não há backend: o formulário de contato monta a mensagem e abre o WhatsApp do motorista via `wa.me` com o texto pré-preenchido (`window.open` com a query `?text=`), evitando a necessidade de servidor só para captar lead.

## Estrutura da página

A página é montada em `src/App.jsx` como uma sequência de seções independentes, na ordem:

1. **Intro splash** (`IntroSplash.jsx`) — animação de abertura em tela cheia inspirada na tela "Hello" de setup do iPhone: a frase "Viagens com [conforto → qualidade → pontualidade]" se alterna com uma transição 3D (flip no eixo X, como um "mortal" para cima), depois dá lugar a "Entre em contato por aqui" e revela o site com um cross-fade.
2. **Header** (`Header.jsx`) — fixa, ganha blur/sombra ao rolar, menu mobile animado.
3. **Hero** (`Hero.jsx`) — layout dividido: headline + CTAs à esquerda, vídeo do carro em loop à direita, badges flutuantes sincronizadas.
4. **TrustBar** (`TrustBar.jsx`) — estatísticas com contagem animada (`CountUp.jsx`) disparada quando a seção entra na viewport.
5. **WhyChoose** (`WhyChoose.jsx`) — citação com efeito "type-cycle" (`TypeCycle.jsx`, máquina de escrever com largura reservada para não deslocar o layout) + cards com flutuação sincronizada.
6. **Testimonials** (`Testimonials.jsx`) — carrossel infinito (CSS `@keyframes`) que pausa ao passar o mouse, com os depoimentos reais dos passageiros.
7. **HowItWorks** (`HowItWorks.jsx`) — 4 passos do processo de solicitação.
8. **Services** (`Services.jsx`) — grid de serviços, cada um linkando para o WhatsApp com mensagem pré-preenchida específica.
9. **CorporateBenefits** (`CorporateBenefits.jsx`) — benefícios para quem contrata recorrente/empresas.
10. **FAQ** (`FAQ.jsx`) — accordion animado.
11. **FinalCTA** (`FinalCTA.jsx`) — formulário (nome, empresa opcional, telefone) com validação básica que gera a mensagem e abre o WhatsApp.
12. **Footer** (`Footer.jsx`) + **WhatsAppFloat** (`WhatsAppFloat.jsx`) — botão flutuante fixo, presente em todas as seções.

Componentes de apoio, sem seção própria:
- `SectionHeading.jsx` — cabeçalho padrão (eyebrow + título + subtítulo) reusado nas seções internas.
- `CountUp.jsx` / `TypeCycle.jsx` — animações de texto reutilizáveis.
- `lib/constants.js` — fonte única dos dados reais do motorista (nome, telefone, estatísticas, depoimentos) e do link do WhatsApp.
- `lib/motion.js` — variantes de animação (`fadeUp`) compartilhadas entre seções.

## Decisões de design

- **Paleta preto e branco** — sem cor de destaque colorida. O branco faz o papel de "accent" (botões, glows, ícones), com o texto sobre fundos brancos usando a cor de fundo (`text-bg`) para manter contraste.
- **Tipografia Montserrat**, carregada via Google Fonts, com pesos 400–800.
- **Tema no CSS, não em JS**: cores e fonte vivem em `src/index.css` dentro de um bloco `@theme` (convenção do Tailwind v4), o que evita duplicar tokens entre um `tailwind.config.js` e o CSS.

## Como rodar localmente

Pré-requisito: Node.js instalado.

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Alterações em qualquer arquivo em `src/` recarregam automaticamente (HMR do Vite).

Outros scripts:

```bash
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # lint com oxlint
```

## Estrutura de pastas

```
src/
├── components/        # um arquivo por seção/bloco reutilizável
├── lib/
│   ├── constants.js    # dados reais do motorista + link do WhatsApp
│   └── motion.js        # variantes de animação compartilhadas
├── App.jsx             # composição das seções + controle da intro splash
├── main.jsx             # entry point React
└── index.css            # import do Tailwind + tema (@theme) + fontes
public/
├── favicon.svg
└── videos/hero-driver.mp4   # vídeo de fundo do hero
```

## Pendências conhecidas

- **Preços dos serviços**: os cards de serviço usam "Solicitar"/"sob consulta" propositalmente — não há preços reais definidos ainda.
- **Política de cancelamento e seguro do veículo**: as respostas do FAQ foram escritas de forma genérica por não haver uma política formal definida; vale revisar com o motorista antes de publicar em produção.
- **Sem analytics/tracking** configurado ainda.
