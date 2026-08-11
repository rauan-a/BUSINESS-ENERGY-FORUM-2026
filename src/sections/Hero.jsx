export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="hero__lines">
          <polyline
            className="hero__line hero__line--1"
            points="-50,620 220,620 340,420 620,420 720,560 1250,560"
          />
          <polyline
            className="hero__line hero__line--2"
            points="-50,260 260,260 380,160 780,160 900,320 1250,320"
          />
          <polyline
            className="hero__line hero__line--3"
            points="-50,720 160,720 260,660 1250,660"
          />
          <circle className="hero__node" cx="620" cy="420" r="5" />
          <circle className="hero__node" cx="780" cy="160" r="5" />
          <circle className="hero__node" cx="260" cy="660" r="5" />
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">12 сентября 2026 · Renaissance Aktau Hotel</p>

        <h1 className="hero__title">
          BUSINESS ENERGY
          <br />
          FORUM 2026
        </h1>

        <p className="hero__subtitle">Закрытая B2B-площадка нефтегазовой отрасли</p>

        <p className="hero__slogan">«Где встречаются те, кто принимает решения»</p>

        <div className="hero__actions">
          <a href="#contacts" className="btn btn--primary">
            Получить условия участия
          </a>
          <a href="#about" className="btn btn--ghost">
            О форуме
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Прокрутить к следующему разделу">
        <span />
      </a>
    </section>
  )
}
