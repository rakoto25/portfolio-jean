'use client'

const skills = [
  'WordPress, thèmes & plugins sur mesure',
  'WooCommerce & tunnels e‑commerce',
  'WP REST API, webhooks, intégrations externes',
  'React / Next.js / TypeScript',
  'PHP 7.4+ / Symfony • MySQL',
  'Tailwind CSS / Bootstrap • Git',
]

export default function Skills() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Compétences</h2>
          <p className="text-sm text-slate-400">
            Stack orientée WordPress headless, e‑commerce performant et front moderne.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-sm text-slate-200">
            {skills.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}