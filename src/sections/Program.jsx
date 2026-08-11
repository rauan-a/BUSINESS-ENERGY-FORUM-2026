import Reveal from '../components/Reveal.jsx'

const BLOCKS = [
  {
    hour: '1 час',
    title: 'B2B Networking',
    items: [
      'Премиальный кофе-брейк',
      'Выставочная зона',
      'Личные знакомства и переговоры',
      'Демонстрация продукции',
      'Обмен контактами',
    ],
  },
  {
    hour: '1 час',
    title: 'Business Forum',
    items: [
      'Выступления спикеров',
      'Презентации партнеров',
      'Обсуждение актуальных вопросов отрасли',
      'Деловое общение',
    ],
  },
]

export default function Program() {
  return (
    <section id="program" className="section program">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          Программа
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Два часа, построенные вокруг делового результата
        </Reveal>

        <div className="program__timeline">
          {BLOCKS.map((block, i) => (
            <Reveal
              as="article"
              className="program__block"
              delay={140 + i * 120}
              key={block.title}
            >
              <div className="program__hour">{block.hour}</div>
              <h3 className="program__block-title">{block.title}</h3>
              <ul className="program__list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
