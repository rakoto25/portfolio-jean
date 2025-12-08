'use client'

const projects = [
  {
    icon: '🏠',
    name: 'FDLocation',
    url: 'fdlocation.fr',
    href: 'https://fdlocation.fr',
    desc: 'Plateforme de location de véhicules avec réservation en ligne.',
    tech: 'WordPress • WooCommerce • PHP • Bootstrap',
  },
  {
    icon: '📦',
    name: 'Ballou Pro',
    url: 'dev.balloupro.mg',
    href: 'https://dev.balloupro.mg',
    desc: 'E‑commerce mobilier, front React/TS, backend WooCommerce.',
    tech: 'React • TypeScript • Tailwind • WP REST API',
  },
  // Ajoute ici : Abbyléna, FD Informatique, Hlapilote, Espace Pièces, etc.
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#e5e7eb',
              marginBottom: '0.25rem',
            }}
          >
            Mes projets
          </h2>
          <p
            style={{
              fontSize: '0.85rem',
              color: '#9ca3af',
            }}
          >
            Sélection de projets WordPress, WooCommerce et front React/Next.js en
            production.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                <div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-url">{p.url}</div>
                </div>
              </div>

              <p className="project-desc">{p.desc}</p>
              <p className="project-tech">{p.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}