import { useState, useEffect } from 'react'

function Navbar() {
  const [ouvert, setOuvert] = useState(false)
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const fermer = () => setOuvert(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav>
      <a href="#accueil" className="logo" onClick={fermer}>Seydi Aboubacar Sy Ngom</a>

      <ul className={ouvert ? 'open' : ''}>
        <li><a href="#apropos" onClick={fermer}>À propos</a></li>
        <li><a href="#projets" onClick={fermer}>Projets</a></li>
        <li><a href="#entrepreneuriat" onClick={fermer}>Entrepreneuriat</a></li>
        <li><a href="#competences" onClick={fermer}>Compétences</a></li>
        <li><a href="#contact" onClick={fermer}>Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Changer de thème"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          className="burger"
          onClick={() => setOuvert(!ouvert)}
          aria-label="Menu"
          aria-expanded={ouvert}
        >
          {ouvert ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar