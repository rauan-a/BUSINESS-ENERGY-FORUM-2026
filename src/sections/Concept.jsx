import Reveal from '../components/Reveal.jsx'

const CHAIN = [
  { from: 'Реклама', to: 'внимание' },
  { from: 'Личная встреча', to: 'доверие' },
  { from: 'Доверие', to: 'переговоры' },
  { from: 'Переговоры', to: 'потенциальное сотрудничество' },
]

export default function Concept() {
  return (
    <section id="concept" className="section concept">
      <div className="section__inner">
        <Reveal as="h2" className="concept__title">
          Реклама создаёт узнаваемость.
          <br />
          Личное знакомство создаёт доверие
        </Reveal>

        <div className="concept__chain">
          {CHAIN.map((step, i) => (
            <Reveal
              as="div"
              className="concept__step"
              delay={i * 90}
              key={step.from}
            >
              <span className="concept__from">{step.from}</span>
              <span className="concept__arrow" aria-hidden="true">
                →
              </span>
              <span className="concept__to">{step.to}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
