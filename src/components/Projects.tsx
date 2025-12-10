'use client'

const projects = [
  {
    icon: '🚗',
    name: 'FDLocation',
    url: 'fdlocation.fr',
    href: 'https://fdlocation.fr',
    desc: 'Plateforme de location de véhicules avec réservation en ligne, gestion des disponibilités et devis automatisés.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Bootstrap'],
    role: 'Lead dev WordPress & WooCommerce',
  },
  {
    icon: '🪑',
    name: 'Ballou',
    url: 'dev.balloupro.mg',
    href: 'https://dev.balloupro.mg',
    desc: 'E‑commerce mobilier B2B, front React/TypeScript connecté à un backend WooCommerce via WP REST API.',
    tech: ['React', 'TypeScript', 'Tailwind', 'WP REST API', 'WooCommerce'],
    role: 'Front React & intégrations API',
  },
  {
    icon: '💻',
    name: 'FD Informatique',
    url: 'fdinformatique.re',
    href: 'https://fdinformatique.re',
    desc: 'Site vitrine + catalogue produits pour un revendeur informatique, synchronisé avec un stock interne.',
    tech: ['WordPress', 'Bootstrap', 'JS', 'CSS', 'WooCommerce'],
    role: 'Intégration & catalogue produit',
  },
  {
    icon: '🏠',
    name: 'Hlapilote',
    url: 'hlapilote.com',
    href: 'https://hlapilote.com',
    desc: 'Pilotage, OPC conseil à La Réunion dans le secteur de la construction.',
    tech: ['WordPress', 'JS', 'Bootstrap', 'CSS', 'Optimisation UX'],
    role: 'UX technique & intégration',
  },
  {
    icon: '🧩',
    name: 'Espace Pièces',
    url: 'espacepiecesautos.com',
    href: 'https://espacepiecesautos.com',
    desc: 'Catalogue de pièces détachées avec recherche filtrée et gestion fine des références.',
    tech: ['WooCommerce', 'Filtres produits', 'Bootstrap', 'CSS', 'JS', 'Performance'],
    role: 'Architecture produit & filtres',
  },
  {
    icon: '🪷',
    name: 'Abbylena',
    url: 'abbylena.fr',
    href: 'https://abbylena.fr',
    desc: 'Site de présentation pour massages bien‑être, soins du visage, mains & pieds — un lieu pour souffler et se recentrer.',
    tech: ['WooCommerce', 'WordPress', 'CSS', 'JS', 'Performance'],
    role: 'Intégration & expérience utilisateur',
  },
  {
    icon: '💻',
    name: 'Dilajo',
    url: 'dilajo.com',
    href: 'https://dilajo.com',
    desc: 'Site e‑commerce de vente de produits informatiques.',
    tech: ['WooCommerce', 'Tailwind CSS', 'PHP', 'Performance'],
    role: 'Architecture e‑commerce & intégration',
  },
  {
    icon: '🪵',
    name: 'Art de La Pieuvre',
    url: 'artdelapieuvre.fr',
    href: 'https://artdelapieuvre.fr',
    desc: "Site vitrine de présentation de pièces d'art à La Réunion.",
    tech: ['WordPress', 'Bootstrap', 'PHP', 'CSS', 'Performance'],
    role: 'UX technique & intégration',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        {/* En-tête + stats */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                className="badge"
                style={{
                  borderColor: '#4f46e5',
                  background:
                    'radial-gradient(circle at top left, rgba(79,70,229,0.25), rgba(15,23,42,0.9))',
                  marginBottom: '0.6rem',
                  display: 'inline-flex',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '9999px',
                    backgroundColor: '#4f46e5',
                  }}
                />
                Projets en production
              </span>

              <h2
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#e5e7eb',
                  marginBottom: '0.3rem',
                }}
              >
                Mes projets récents
              </h2>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  maxWidth: '32rem',
                }}
              >
                Sélection de projets WordPress, WooCommerce et fronts React/Next.js en
                production, avec un focus sur la performance, la stabilité et le ROI business.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontSize: '0.8rem',
                color: '#9ca3af',
              }}
            >
              <div
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '0.9rem',
                  border: '1px solid #1f2937',
                  background:
                    'radial-gradient(circle at top left, rgba(34,197,94,0.18), rgba(15,23,42,0.95))',
                  minWidth: '8rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#bbf7d0' }}>20+ projets</div>
                <div style={{ fontSize: '0.7rem' }}>déployés en prod</div>
              </div>
              <div
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '0.9rem',
                  border: '1px solid #1f2937',
                  background:
                    'radial-gradient(circle at top left, rgba(129,140,248,0.18), rgba(15,23,42,0.95))',
                  minWidth: '8rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#bfdbfe' }}>E‑commerce</div>
                <div style={{ fontSize: '0.7rem' }}>WordPress & headless</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille projets */}
        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Halo coloré */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-40%',
                  opacity: 0.16,
                  background:
                    'radial-gradient(circle at top left, rgba(79,70,229,1), transparent 55%)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {/* Titre + icône */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: '0.9rem',
                      background:
                        'radial-gradient(circle at 30% 0, #4f46e5, #0f172a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: '0 10px 25px rgba(15,23,42,0.9)',
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>

                  <div>
                    <div className="project-name" style={{ marginBottom: '0.1rem' }}>
                      {p.name}
                    </div>
                    <div className="project-url">{p.url}</div>
                  </div>
                </div>

                {/* Rôle */}
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#a5b4fc',
                    fontStyle: 'italic',
                  }}
                >
                  {p.role}
                </p>

                {/* Description */}
                <p className="project-desc">{p.desc}</p>

                {/* Tags techno */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginTop: '0.25rem',
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        border: '1px solid #1f2937',
                        background: 'rgba(15,23,42,0.9)',
                        color: '#e5e7eb',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}