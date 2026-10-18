const categories = [
  {
    titre: 'Développement web',
    competences: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    titre: 'Langages de programmation',
    competences: ['Java', 'Python', 'JavaScript'],
  },
  {
    titre: 'Bases de données',
    competences: ['SQL', 'PostgreSQL', 'pgAdmin 4', 'Bases de données avancées'],
  },
  {
    titre: 'Data & gestion',
    competences: ['Excel', 'Power BI', 'Power Query', 'Odoo', 'Microsoft Office'],
  },
  {
    titre: 'Réseaux & sécurité',
    competences: ['Cisco Packet Tracer', 'Kali Linux', 'Réseaux'],
  },
  {
    titre: 'Outils & innovation',
    competences: ['Git & GitHub', 'Vercel', 'Intelligence Artificielle'],
  },
]

function Skills() {
  return (
    <section id="competences">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {categories.map((categorie) => (
          <div className="skills-card" key={categorie.titre}>
            <h3>{categorie.titre}</h3>
            <div className="skills-tags">
              {categorie.competences.map((competence) => (
                <span key={competence}>{competence}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills