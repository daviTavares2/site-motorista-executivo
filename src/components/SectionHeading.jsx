import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal
          as="div"
          delay={0}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-text"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.08}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={0.16}
          className="mt-4 text-base text-text-secondary sm:text-lg"
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeading
