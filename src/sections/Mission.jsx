import Reveal from '../components/Reveal.jsx'

export default function Mission() {
  return (
    <section id="mission" className="section mission">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          Об организаторе
        </Reveal>

        <Reveal as="p" className="mission__brand" delay={60}>
          BUSINESS ENERGY FORUM 2026 — закрытая B2B-площадка нефтегазовой
          отрасли. Независимая платформа для развития Вашего бизнеса.
        </Reveal>

        <Reveal as="div" className="mission__box" delay={120}>
          <h2 className="mission__title">Наша миссия</h2>
          <p className="mission__text">
            «Объединять лидеров бизнеса, создавать стратегические партнерства
            и формировать будущее международного сотрудничества посредством
            бизнес-мероприятий.»
          </p>
        </Reveal>
      </div>
    </section>
  )
}
