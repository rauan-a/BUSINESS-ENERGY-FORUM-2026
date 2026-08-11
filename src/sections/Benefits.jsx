import Reveal from '../components/Reveal.jsx'

const BENEFITS = [
  { title: 'Видимость', text: '120 ключевых лиц отрасли в одном зале' },
  { title: 'Доверие', text: 'Личное общение и демонстрация продукции' },
  { title: 'Контакты', text: 'Прямые связи с клиентами и партнёрами' },
  { title: 'Переговоры', text: 'B2B-формат, созданный для сделок' },
  { title: 'Репутация', text: 'Статус официального партнёра форума' },
  { title: 'Партнёрства', text: 'Новые клиенты и долгосрочное сотрудничество' },
]

export default function Benefits() {
  return (
    <section id="partners" className="section benefits">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          Партнёрам
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Не просто реклама. Прямое присутствие перед целевой аудиторией
        </Reveal>

        <div className="benefits__grid">
          {BENEFITS.map((b, i) => (
            <Reveal
              as="article"
              className="card card--compact"
              delay={120 + i * 70}
              key={b.title}
            >
              <h3 className="card__title">{b.title}</h3>
              <p className="card__text">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
