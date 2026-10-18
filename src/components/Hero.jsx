import { useState, useEffect } from 'react'

const titres = [
  'Étudiant en informatique',
  'Informaticien ',
  'Passionné de développement web',
  'Entrepreneur',
]

function Hero() {
  const [index, setIndex] = useState(0)
  const [texte, setTexte] = useState('')
  const [suppression, setSuppression] = useState(false)

  useEffect(() => {
    const titre = titres[index]
    let delai = suppression ? 40 : 90

    if (!suppression && texte === titre) delai = 1500
    else if (suppression && texte === '') delai = 400

    const timer = setTimeout(() => {
      if (!suppression && texte === titre) {
        setSuppression(true)
      } else if (suppression && texte === '') {
        setSuppression(false)
        setIndex((index + 1) % titres.length)
      } else {
        setTexte(titre.substring(0, texte.length + (suppression ? -1 : 1)))
      }
    }, delai)

    return () => clearTimeout(timer)
  }, [texte, suppression, index])

  return (
    <section id="accueil" className="hero">
      <div className="hero-text">
        <p className="hero-hello">Salut, moi c'est Seydi Aboubacar</p>
        <h1>Seydi Aboubacar Sy Ngom</h1>
        <h2 className="typing">
          {texte}
          <span className="curseur">|</span>
        </h2>
        <p className="hero-desc">
          Étudiant en 3e année d'informatique à ESCOA Dakar, passionné par le
          développement web, les bases de données et l'innovation numérique.
          Fondateur de Rayhan Parfumerie.
        </p>
        <div className="hero-buttons">
          <a href="#projets" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
          <a href="/cv.pdf" download="CV-Khalifa.pdf" className="btn btn-secondary">Télécharger mon CV</a>
        </div>
      </div>
      <img src="/photo.png" alt="Portrait de Khalifa" className="hero-photo" />
    </section>
  )
}

export default Hero