import Reveal from '../components/Reveal.jsx'

export default function FinalCta() {
  return (
    <section id="final-cta" className="section final-cta">
      <div className="section__inner">
        <Reveal as="h2" className="final-cta__title">
          Ваш следующий крупный клиент может быть именно в этом зале
        </Reveal>

        <Reveal as="p" className="final-cta__note" delay={80}>
          Количество партнерских пакетов ограничено.
        </Reveal>

        <Reveal as="p" className="final-cta__meta" delay={140}>
          12 сентября 2026 · Renaissance Aktau Hotel
        </Reveal>

        <Reveal as="div" delay={200} className="final-cta__action">
          <a
            href="https://wa.me/77771694444"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Написать в WhatsApp
          </a>
        </Reveal>

        <Reveal as="p" className="final-cta__hint" delay={260}>
          Свяжитесь с организаторами для получения условий участия
        </Reveal>
      </div>
    </section>
  )
}
