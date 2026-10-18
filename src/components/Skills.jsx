const competences = ['PostgreSQL', 'SQL', 'React', 'Git & GitHub', 'HTML & CSS', 'JavaScript']

function Skills() {
  return (
    <section id="competences">
      <h2>Compétences</h2>
      <ul>
        {competences.map((competence) => (
          <li key={competence}>{competence}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills