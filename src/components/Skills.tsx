'use client'

import { DiWordpress, DiReact, DiPhp, DiMysql, DiGit } from 'react-icons/di'
import { SiWoocommerce, SiNextdotjs, SiTypescript, SiTailwindcss, SiBootstrap } from 'react-icons/si'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div
          className="card"
          style={{
            padding: '2.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Titre + intro */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              maxWidth: '40rem',
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
              Compétences
            </span>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#e5e7eb',
              }}
            >
              Stack WordPress headless & front moderne
            </h2>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
              }}
            >
              Intégration complète de sites e‑commerce WooCommerce, backends PHP robustes
              et interfaces Next.js / React typées TypeScript, avec une attention forte
              portée aux performances et à la maintenabilité.
            </p>
          </div>

          {/* Grille de compétences */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.4rem',
            }}
          >
            {/* Bloc WordPress / WooCommerce */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(59,130,246,0.18), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                boxShadow: '0 18px 35px rgba(15,23,42,0.85)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.1rem',
                }}
              >
                <div
                  style={{
                    width: '2.3rem',
                    height: '2.3rem',
                    borderRadius: '0.9rem',
                    background:
                      'radial-gradient(circle at 30% 0, #2563eb, #0f172a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(148,163,184,0.5)',
                  }}
                >
                  <DiWordpress size={20} color="#60a5fa" />
                </div>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#e5e7eb',
                  }}
                >
                  WordPress & WooCommerce
                </h3>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  color: '#d1d5db',
                }}
              >
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <SiWoocommerce size={16} color="#a855f7" />
                  <span>Thèmes & plugins sur mesure, tunnels e‑commerce complets</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      background:
                        'radial-gradient(circle, #a855f7, #6366f1 60%, transparent)',
                      boxShadow: '0 0 6px rgba(129,140,248,0.8)',
                    }}
                  />
                  <span>Optimisation panier, checkout, frais & méthodes de livraison</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: '#4b5563',
                    }}
                  />
                  <span>WP REST API, webhooks, intégrations externes (CRM, outils métier)</span>
                </li>
              </ul>
            </div>

            {/* Bloc React / Next / TypeScript */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(45,212,191,0.22), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                boxShadow: '0 18px 35px rgba(15,23,42,0.85)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.1rem',
                }}
              >
                <div
                  style={{
                    width: '2.3rem',
                    height: '2.3rem',
                    borderRadius: '0.9rem',
                    background:
                      'radial-gradient(circle at 30% 0, #22c55e, #0f172a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(148,163,184,0.5)',
                  }}
                >
                  <DiReact size={20} color="#22d3ee" />
                </div>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#e5e7eb',
                  }}
                >
                  Front‑end moderne
                </h3>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  color: '#d1d5db',
                }}
              >
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <SiNextdotjs size={16} color="#e5e7eb" />
                  <span>React / Next.js App Router, interfaces SPA & SSR</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <SiTypescript size={16} color="#38bdf8" />
                  <span>TypeScript, typage fort & composants réutilisables</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <SiTailwindcss size={16} color="#38bdf8" />
                  <SiBootstrap size={16} color="#c084fc" />
                  <span>Tailwind CSS & Bootstrap pour des UI rapides et cohérentes</span>
                </li>
              </ul>
            </div>

            {/* Bloc PHP / MySQL */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(147,197,253,0.18), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                boxShadow: '0 18px 35px rgba(15,23,42,0.85)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.1rem',
                }}
              >
                <div
                  style={{
                    width: '2.3rem',
                    height: '2.3rem',
                    borderRadius: '0.9rem',
                    background:
                      'radial-gradient(circle at 30% 0, #38bdf8, #0f172a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(148,163,184,0.5)',
                  }}
                >
                  <DiPhp size={20} color="#93c5fd" />
                </div>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#e5e7eb',
                  }}
                >
                  Back‑end & base de données
                </h3>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  color: '#d1d5db',
                }}
              >
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <DiPhp size={16} color="#bfdbfe" />
                  <span>PHP 7.4+, architectures propres, bonnes pratiques WordPress</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <DiMysql size={16} color="#f97316" />
                  <span>MySQL, requêtes optimisées, indexation & performance</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: '#4b5563',
                    }}
                  />
                  <span>APIs custom, endpoints sécurisés pour front headless</span>
                </li>
              </ul>
            </div>

            {/* Bloc outils / workflow */}
            <div
              style={{
                borderRadius: '1rem',
                border: '1px solid #111827',
                background:
                  'radial-gradient(circle at top left, rgba(168,85,247,0.18), rgba(15,23,42,0.96))',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                boxShadow: '0 18px 35px rgba(15,23,42,0.85)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.1rem',
                }}
              >
                <div
                  style={{
                    width: '2.3rem',
                    height: '2.3rem',
                    borderRadius: '0.9rem',
                    background:
                      'radial-gradient(circle at 30% 0, #a855f7, #0f172a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(148,163,184,0.5)',
                  }}
                >
                  <DiGit size={20} color="#f97316" />
                </div>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#e5e7eb',
                  }}
                >
                  Outils & workflow
                </h3>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  color: '#d1d5db',
                }}
              >
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <DiGit size={16} color="#fb923c" />
                  <span>Git / GitHub, branches propres & revues de code</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: '#4b5563',
                    }}
                  />
                  <span>CI/CD, environnements de staging & déploiements maîtrisés</span>
                </li>
                <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: '#4b5563',
                    }}
                  />
                  <span>Debug avancé, logs, monitoring de performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ligne de résumé */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              fontSize: '0.75rem',
              color: '#9ca3af',
              borderTop: '1px solid #111827',
              paddingTop: '0.9rem',
              marginTop: '0.5rem',
            }}
          >
            <span>Qualité de code & revues régulières</span>
            <span>•</span>
            <span>Perf front & Core Web Vitals</span>
            <span>•</span>
            <span>Architecture pensée pour évoluer dans le temps</span>
          </div>
        </div>
      </div>
    </section>
  )
}