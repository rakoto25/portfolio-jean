'use client'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '4rem' }}>
      <div className="section-inner">
        <div
          className="card"
          style={{
            padding: '2.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* En-tête */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              maxWidth: '36rem',
            }}
          >
            <span
              className="badge"
              style={{
                borderColor: '#4f46e5',
                background:
                  'radial-gradient(circle at top left, rgba(79,70,229,0.25), rgba(15,23,42,0.95))',
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
              Travaillons ensemble
            </span>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#e5e7eb',
              }}
            >
              Contact & disponibilités
            </h2>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
              }}
            >
              Disponible pour des missions remote autour de WordPress, WooCommerce, React
              / Next.js et intégrations API. Réponse rapide par e‑mail ou WhatsApp.
            </p>
          </div>

          {/* Grille contact */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.25rem',
              fontSize: '0.9rem',
              color: '#e5e7eb',
            }}
          >
            {/* Bloc coordonnées */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(59,130,246,0.18), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e5e7eb',
                  marginBottom: '0.2rem',
                }}
              >
                Coordonnées directes
              </h3>

              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                N’hésite pas à me contacter pour un devis, un audit technique ou un renfort
                ponctuel sur un projet en cours.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  marginTop: '0.3rem',
                }}
              >
                <p>
                  <span style={{ marginRight: '0.4rem' }}>📍</span>
                  <span>Antananarivo, Madagascar</span>
                </p>
                <p>
                  <span style={{ marginRight: '0.4rem' }}>📞</span>
                  <a
                    href="tel:+261388225478"
                    style={{
                      color: '#a5b4fc',
                      textDecoration: 'none',
                    }}
                  >
                    +261 38 82 254 78
                  </a>
                </p>
                <p>
                  <span style={{ marginRight: '0.4rem' }}>✉️</span>
                  <a
                    href="mailto:jrakoto280@gmail.com"
                    style={{
                      color: '#a5b4fc',
                      textDecoration: 'none',
                    }}
                  >
                    jrakoto280@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Bloc profils & format de mission */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(129,140,248,0.2), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e5e7eb',
                  marginBottom: '0.2rem',
                }}
              >
                Profils & formats de mission
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  color: '#d1d5db',
                }}
              >
                <li>• Freelance remote, collaboration avec agences ou équipes internes</li>
                <li>• Création ou refonte e‑commerce WooCommerce</li>
                <li>• Intégration front React / Next.js sur back WordPress existant</li>
              </ul>

              <div
                style={{
                  marginTop: '0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  fontSize: '0.85rem',
                }}
              >
                <p>
                  <span style={{ marginRight: '0.4rem' }}>💼</span>
                  <a
                    href="https://github.com/rakoto25"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#a5b4fc',
                      textDecoration: 'none',
                    }}
                  >
                    github.com/rakoto25
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Ligne de bas de bloc */}
          <div
            style={{
              marginTop: '0.4rem',
              paddingTop: '0.8rem',
              borderTop: '1px solid #111827',
              fontSize: '0.8rem',
              color: '#9ca3af',
            }}
          >
            Indique simplement le contexte de ton projet (budget, délais, stack actuelle) et
            une première réponse te sera faite sous 24–48h.
          </div>
        </div>
      </div>
    </section>
  )
}