'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <div
          className="card"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '1.75rem' : '2.5rem',
          }}
        >
          {/* Colonne texte */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              maxWidth: '36rem',
              flex: 1,
            }}
          >
            <span className="badge">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: '#34d399',
                }}
              />
              Disponible pour missions remote
            </span>

            <div>
              <h1
                style={{
                  fontSize: isMobile ? '1.6rem' : '2rem',
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
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  color: '#d1d5db',
                }}
              >
                Développeur WordPress Full‑Stack spécialisé WooCommerce, architectures
                headless React / Next.js et intégrations WP REST API.
              </p>
            </div>

            <p
              style={{
                fontSize: '0.8rem',
                color: '#9ca3af',
              }}
            >
              5+ ans d’expérience • 20+ projets en production • Madagascar
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <a href="#projects" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </div>
          </div>

          {/* Colonne avatar (photo) */}
          <div
            style={{
              width: isMobile ? '8rem' : '100%',
              maxWidth: isMobile ? '8rem' : '16rem',
              alignSelf: isMobile ? 'center' : 'flex-start',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                padding: '2px',
                background:
                  'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.4rem',
                  backgroundColor: '#020617',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src="/Assets/images/jean-dev.jpg"
                  alt="Portrait de Jean Rakotondrasoa"
                  fill
                  sizes="(max-width: 768px) 128px, 256px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <p
              style={{
                marginTop: '0.6rem',
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