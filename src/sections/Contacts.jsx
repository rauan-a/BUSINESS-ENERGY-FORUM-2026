import Reveal from '../components/Reveal.jsx'

export default function Contacts() {
  return (
    <section id="contacts" className="section contacts">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          Контакты
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Свяжитесь с организатором
        </Reveal>

        <Reveal as="div" className="contacts__card" delay={140}>
          <p className="contacts__org">CASPIAN BUSINESS ALLIANCE</p>
          <p className="contacts__person">Масугутова Жанара</p>
          <a href="tel:+77771694444" className="contacts__phone">
            +7 777 169 44 44
          </a>
          <a href="tel:+77771694444" className="btn btn--primary">
            Позвонить организатору
          </a>
        </Reveal>
      </div>
    </section>
  )
}
