'use client'

export default function Contact() {
  return (
    <section id="contact" className="section pb-24">
      <div className="section-inner">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Contact</h2>
          <p className="text-sm text-slate-400">
            Disponible pour missions remote WordPress, WooCommerce, React / Next.js.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <p>📍 Madagascar (Antananarivo) • Collaboration Réunion possible</p>
            <p>
              📞{' '}
              <a href="tel:+261388225478" className="text-indigo-300">
                +261 38 82 254 78
              </a>
            </p>
            <p>
              ✉️{' '}
              <a href="mailto:jrakoto280@gmail.com" className="text-indigo-300">
                jrakoto280@gmail.com
              </a>
            </p>
            <p>
              💼{' '}
              <a
                href="https://github.com/rakoto25"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300"
              >
                github.com/rakoto25
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}