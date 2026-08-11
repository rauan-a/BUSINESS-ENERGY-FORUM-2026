import Reveal from '../components/Reveal.jsx'

export default function FinalCta() {
  return (
    <section id="final-cta" className="section final-cta">
      <div className="sectioninner">
        <Reveal as="h2" className="final-ctatitle">
          Ваш следующий крупный клиент может быть именно в этом зале
        </Reveal>

        <Reveal as="p" className="final-ctanote" delay={80}>
          Количество партнерских пакетов ограничено.
        </Reveal>

        <Reveal as="p" className="final-ctameta" delay={140}>
          12 сентября 2026 · Renaissance Aktau Hotel
        </Reveal>

        <Reveal as="div" delay={200}>
          <a
  href="https://wa.me/77771694444"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  написать в WhatsApp
</a>
        </Reveal>

        <Reveal as="p" className="final-cta__hint" delay={260}>
         свяжитесь с организаторами для получения
          условий участия
        </Reveal>
      </div>
    </section>
  )
}
