import { useState } from 'react'

const contacts = [
  {
    nom: 'Email',
    valeur: 'ngomkhalifa7@gmail.com',
    lien: 'mailto:ngomkhalifa7@gmail.com',
  },
  {
    nom: 'LinkedIn',
    valeur: 'Seydi Aboubacar Sy Ngom',
    lien: 'https://www.linkedin.com/in/seydi-aboubacar-sy-ngom-830b77307',
  },
  {
    nom: 'GitHub',
    valeur: 'ngomkhalifa7-commits',
    lien: 'https://github.com/ngomkhalifa7-commits',
  },
]

function Contact() {
  const [statut, setStatut] = useState('')

  const envoyer = async (e) => {
    e.preventDefault()
    const formulaire = e.target
    setStatut('envoi')

    try {
      const reponse = await fetch('https://formspree.io/f/meaedpav', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formulaire),
      })

      if (reponse.ok) {
        setStatut('succes')
        formulaire.reset()
      } else {
        setStatut('erreur')
      }
    } catch {
      setStatut('erreur')
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="contact-intro">
        Une opportunité, un projet ou une collaboration ? N'hésite pas à me
        contacter, je réponds avec plaisir.
      </p>

      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            key={c.nom}
            href={c.lien}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">{c.nom}</span>
            <span className="contact-value">{c.valeur}</span>
          </a>
        ))}
      </div>

      <form className="contact-form" onSubmit={envoyer}>
        <h3>Envoie-moi un message</h3>

        <label htmlFor="nom">Nom</label>
        <input id="nom" type="text" name="nom" placeholder="Ton nom" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="ton@email.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Ton message..." required />

        <button type="submit" className="btn btn-primary" disabled={statut === 'envoi'}>
          {statut === 'envoi' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {statut === 'succes' && (
          <p className="form-message succes">Merci ! Ton message a bien été envoyé.</p>
        )}
        {statut === 'erreur' && (
          <p className="form-message erreur">
            Oups, une erreur est survenue. Réessaie ou écris-moi directement par email.
          </p>
        )}
      </form>

      <footer className="footer">
        © 2026 Seydi Aboubacar Sy Ngom. Tous droits réservés.
      </footer>
    </section>
  )
}

export default Contact