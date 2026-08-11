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

        <Reveal as="div" delay={200}>
          <a href="tel:+77771694444" className="btn btn--primary btn--large">
            Забронируйте пакет
          </a>
        </Reveal>

        <Reveal as="p" className="final-cta__hint" delay={260}>
          Отсканируйте QR-код или свяжитесь с организаторами для получения
          условий участия
        </Reveal>
      </div>
    </section>
  )
}
