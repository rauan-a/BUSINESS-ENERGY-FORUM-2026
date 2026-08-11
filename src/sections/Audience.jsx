import Reveal from '../components/Reveal.jsx'

const CATEGORIES = [
  {
    title: 'Нефтедобыча и сервис',
    text: 'Нефтедобывающие компании, нефтесервис и подрядные организации',
  },
  {
    title: 'Первые лица',
    text: 'Собственники бизнеса, коммерческие директора, директора по закупкам и технические руководители',
  },
  {
    title: 'Поставщики и логистика',
    text: 'Производители, поставщики оборудования и логистические компании',
  },
  {
    title: 'Смежные отрасли',
    text: 'Строительство, IT, банки и страхование — компании, работающие с нефтегазом',
  },
]

export default function Audience() {
  return (
    <section id="audience" className="section audience">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          Участники
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Кто будет в зале
        </Reveal>
        <Reveal as="p" className="audience__lead" delay={120}>
          120 релевантных участников — не массовая аудитория, а представители
          отрасли и компаний, заинтересованных в сотрудничестве с нефтегазовым
          сектором.
        </Reveal>

        <div className="audience__grid">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              as="article"
              className="card"
              delay={160 + i * 90}
              key={cat.title}
            >
              <span className="card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="card__title">{cat.title}</h3>
              <p className="card__text">{cat.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
