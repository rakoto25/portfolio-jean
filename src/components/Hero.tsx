'use client'

export default function Hero() {
  return (
    <section className="section">
      <div className="section-inner">
        <div
          className="card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Colonne texte */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '36rem' }}>
            <span className="badge">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: '#34d399', // emerald-400
                }}
              />
              Disponible pour missions remote
            </span>

            <div>
              <h1
                style={{
                  fontSize: '2rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#e5e7eb',
                  marginBottom: '0.5rem',
                }}
              >
                Jean Rakotondrasoa
              </h1>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#d1d5db',
                }}
              >
                Développeur WordPress Full‑Stack spécialisé WooCommerce, architectures
                headless React / Next.js et intégrations WP REST API.
              </p>
            </div>

            <p
              style={{
                fontSize: '0.85rem',
                color: '#9ca3af',
              }}
            >
              5+ ans d’expérience • 20+ projets en production • Madagascar ↔ Réunion
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="#projects" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </div>
          </div>

          {/* Colonne avatar */}
          <div style={{ width: '100%', maxWidth: '16rem', marginLeft: 'auto' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                padding: '2px',
                background:
                  'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                aspectRatio: '1 / 1',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.4rem',
                  backgroundColor: '#020617',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '2.75rem' }}>JR</span>
              </div>
            </div>
            <p
              style={{
                marginTop: '0.75rem',
                fontSize: '0.7rem',
                color: '#9ca3af',
                textAlign: 'center',
              }}
            >
              WordPress • WooCommerce • React • Next.js • TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}