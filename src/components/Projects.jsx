const projets = [
  {
    titre: 'Gaindé Eats',
    description: 'Base de données PostgreSQL réalisée dans le cadre du cours de SGBD.',
    technos: ['PostgreSQL', 'pgAdmin 4'],
  },
  {
    titre: 'Mini ERP Parfumerie',
    description: 'Mini ERP pour une parfumerie fictive, projet noté de SGBD.',
    technos: ['PostgreSQL', 'SQL'],
  },
  {
    titre: 'Projet Cloud',
    description: 'Projet de groupe sur une solution basée sur le cloud (sécurité et sauvegarde).',
    technos: ['Cloud Computing'],
  },
]

function Projects() {
  return (
    <section id="projets">
      <h2>Projets</h2>
      {projets.map((projet) => (
        <article key={projet.titre}>
          <h3>{projet.titre}</h3>
          <p>{projet.description}</p>
          <p>{projet.technos.join(' • ')}</p>
        </article>
      ))}
    </section>
  )
}

export default Projects