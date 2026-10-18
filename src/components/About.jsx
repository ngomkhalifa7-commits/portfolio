const formations = [
  { titre: 'Licence Informatique (3e année)', lieu: 'ESCOA Dakar' },
  { titre: 'Baccalauréat', lieu: 'ESGBS (2023)' },
]

const langues = [
  { nom: 'Wolof', niveau: 'Courant' },
  { nom: 'Français', niveau: 'Courant' },
  { nom: 'Anglais', niveau: 'Intermédiaire' },
]

const qualites = [
  'Leadership',
  "Esprit d'équipe",
  'Communication',
  'Adaptabilité',
  'Intelligence émotionnelle',
]

const interets = [
  'Programmation & bases de données',
  'Graphisme & marketing digital',
  'Horlogerie',
  'Football',
]

function About() {
  return (
    <section id="apropos">
      <h2>À propos</h2>

      <p className="about-intro">
        Je suis étudiant en troisième année d'informatique à ESCOA Dakar,
        passionné par le développement web, les bases de données et
        l'innovation numérique. Je suis aussi le fondateur de Rayhan
        Parfumerie, ce qui m'a donné une vraie expérience en gestion,
        communication, marketing et leadership.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Formation</h3>
          <ul>
            {formations.map((f) => (
              <li key={f.titre}>
                <strong>{f.titre}</strong>
                <span>{f.lieu}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3>Expérience</h3>
          <ul>
            <li>
              <strong>Fondateur & gérant, Rayhan Parfumerie</strong>
              <span>Mars 2025 — Aujourd'hui</span>
              <span>
                Gestion commerciale, marketing digital, gestion des stocks et
                des commandes, image de marque.
              </span>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Langues</h3>
          <ul>
            {langues.map((l) => (
              <li key={l.nom}>
                <strong>{l.nom}</strong>
                <span>{l.niveau}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3>Qualités</h3>
          <div className="tags">
            {qualites.map((q) => (
              <span key={q}>{q}</span>
            ))}
          </div>
        </div>

        <div className="about-card">
          <h3>Centres d'intérêt</h3>
          <div className="tags">
            {interets.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About