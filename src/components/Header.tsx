'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const items = [
  { label: 'Qui je suis', href: '#hero' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(18px)',
        background:
          'linear-gradient(to bottom, rgba(2,6,23,0.96), rgba(2,6,23,0.9), transparent)',
        borderBottom: '1px solid #1f2937',
      }}
    >
      <div
        className="section-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            src="/Assets/images/logo-jean.webp"
            alt="Logo Jean"
            width={130}
            height={32}
            style={{
              width: 'auto',
              height: '2rem',
              borderRadius: '0.5rem', // arrondi léger
            }}
            priority
          />
        </div>

        {/* Menu desktop */}
        <nav
          aria-label="Navigation principale"
          className="header-desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            marginLeft: 'auto',
          }}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                border: '1px solid #374151',
                background: 'rgba(15,23,42,0.9)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#d1d5db',
                textDecoration: 'none',
                transition:
                  'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background =
                  'linear-gradient(135deg, #4f46e5, #6366f1)'
                el.style.color = '#ffffff'
                el.style.borderColor = '#4f46e5'
                el.style.boxShadow = '0 15px 30px rgba(79,70,229,0.45)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(15,23,42,0.9)'
                el.style.color = '#d1d5db'
                el.style.borderColor = '#374151'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton burger mobile */}
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
          className="header-burger"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.9rem',
            border: '1px solid #374151',
            backgroundColor: 'rgba(15,23,42,0.9)',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '1.2rem',
              height: '1.2rem',
              position: 'relative',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '2px',
                  borderRadius: '9999px',
                  backgroundColor: '#e5e7eb',
                  top: `${i * 6}px`,
                  transition: 'transform 0.15s ease, opacity 0.15s ease, top 0.15s ease',
                  ...(open &&
                    (i === 0
                      ? { top: '6px', transform: 'rotate(45deg)' }
                      : i === 1
                      ? { opacity: 0 }
                      : { top: '6px', transform: 'rotate(-45deg)' })),
                }}
              />
            ))}
          </span>
        </button>
      </div>

      {/* Règles responsive */}
      <style jsx>{`
        @media (min-width: 768px) {
          .header-burger {
            display: none !important;
          }
          .header-desktop-nav {
            display: flex !important;
          }
        }
      `}</style>

      {/* Menu mobile déroulant */}
      {open && (
        <div
          style={{
            borderTop: '1px solid #1f2937',
            background:
              'linear-gradient(to bottom, rgba(15,23,42,0.98), rgba(15,23,42,0.96))',
          }}
        >
          <div
            className="section-inner"
            style={{
              paddingTop: '0.75rem',
              paddingBottom: '0.9rem',
            }}
          >
            <nav
              aria-label="Navigation mobile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.55rem 0.9rem',
                    borderRadius: '0.9rem',
                    border: '1px solid #1f2937',
                    background: 'rgba(15,23,42,0.95)',
                    fontSize: '0.85rem',
                    color: '#e5e7eb',
                    textDecoration: 'none',
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#6b7280',
                    }}
                  >
                    ↘
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}