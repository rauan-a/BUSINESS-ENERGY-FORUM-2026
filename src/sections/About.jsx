import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <Reveal as="p" className="section__eyebrow">
          О форуме
        </Reveal>

        <Reveal as="h2" className="about__stat" delay={80}>
          200
          <span className="about__stat-label">
            представителей нефтегазовой и смежных отраслей
          </span>
        </Reveal>

        <Reveal as="div" className="about__quotes" delay={160}>
          <p className="about__quote">
            «Пока ваши конкуренты ищут клиентов — мы собираем их в одном зале»
          </p>
          <p className="about__quote">
            «Ваши потенциальные клиенты уже будут здесь. Вопрос только в том,
            увидят ли они вашу компанию»
          </p>
        </Reveal>
      </div>
    </section>
  )
}
