// Mets ici le lien de ta boutique (Instagram, WhatsApp, site...).
// Laisse vide '' si tu ne veux pas afficher de bouton.
const lien = ''

const activites = [
  {
    titre: 'Gestion commerciale',
    texte: 'Relation client, suivi des ventes et fidélisation.',
  },
  {
    titre: 'Marketing digital',
    texte: 'Communication et présence en ligne de la marque.',
  },
  {
    titre: 'Stocks et commandes',
    texte: 'Suivi des produits, approvisionnement et préparation des commandes.',
  },
  {
    titre: 'Image de marque',
    texte: 'Développement de la visibilité et de l’identité de la marque.',
  },
]

function Rayhan() {
  return (
    <section id="entrepreneuriat">
      <h2>Entrepreneuriat</h2>

      <div className="rayhan-header">
        <div>
          <h3>Rayhan Parfumerie</h3>
          <p className="rayhan-role">Fondateur & gérant · Mars 2025 — Aujourd'hui</p>
        </div>
        {lien && (
          <a href={lien} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Découvrir la boutique
          </a>
        )}
      </div>

      <p className="rayhan-intro">
        En parallèle de mes études en informatique, j'ai créé et je dirige
        Rayhan Parfumerie. Cette expérience m'a appris à gérer une activité de
        A à Z, à écouter les besoins des clients et à prendre des décisions,
        des qualités que j'apporte aussi dans mes projets techniques.
      </p>

      <div className="rayhan-grid">
        {activites.map((a) => (
          <div className="rayhan-card" key={a.titre}>
            <h4>{a.titre}</h4>
            <p>{a.texte}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rayhan