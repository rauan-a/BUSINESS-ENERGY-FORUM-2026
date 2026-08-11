import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'О форуме' },
  { href: '#audience', label: 'Участники' },
  { href: '#program', label: 'Программа' },
  { href: '#partners', label: 'Партнёрам' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем скролл фона, когда открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="site-header__brand" onClick={handleNavClick}>
          <span className="site-header__brand-mark" aria-hidden="true" />
          BUSINESS ENERGY&nbsp;FORUM
        </a>

        <nav className="site-header__nav" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="site-header__cta">
          Получить условия участия
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
      >
        <nav className="mobile-menu__nav" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacts" className="mobile-menu__cta" onClick={handleNavClick}>
            Получить условия участия
          </a>
        </nav>
      </div>
    </header>
  )
}
