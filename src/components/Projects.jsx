const projets = [
  {
    titre: 'Gaindé Eats',
    description:
      "Création et configuration d'une base de données PostgreSQL pour une plateforme digitale, réalisée dans le cadre du cours de SGBD.",
    technos: ['PostgreSQL', 'pgAdmin 4', 'SQL'],
  },
  {
    titre: 'Mini ERP Parfumerie',
    description:
      "Mini ERP pour une parfumerie fictive : gestion des produits, des stocks et des commandes avec une base de données relationnelle.",
    technos: ['PostgreSQL', 'SQL'],
  },
  {
    titre: 'Projet Cloud (groupe)',
    description:
      "Projet de groupe sur une solution basée sur le cloud. J'étais en charge de la sécurité et de la sauvegarde.",
    technos: ['Cloud Computing', 'Sécurité', 'Sauvegarde'],
  },
  {
    titre: 'Sites web dynamiques',
    description:
      "Développement de sites web dynamiques et responsives, dont ce portfolio déployé sur Vercel.",
    technos: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    titre: 'Analyse de données',
    description:
      "Analyse et visualisation de données avec tableaux de bord pour faciliter la prise de décision.",
    technos: ['Excel', 'Power BI', 'Power Query'],
  },
  {
    titre: 'Réseaux informatiques',
    description:
      "Configuration et simulation de réseaux informatiques.",
    technos: ['Cisco Packet Tracer'],
  },
]

function Projects() {
  return (
    <section id="projets">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projets.map((projet) => (
          <article key={projet.titre}>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="project-tags">
              {projet.technos.map((techno) => (
                <span key={techno}>{techno}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects