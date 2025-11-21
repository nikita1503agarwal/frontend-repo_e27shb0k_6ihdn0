import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function run() {
      try {
        const r = await fetch(`${API}/projects`)
        const j = await r.json()
        setProjects(j)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">A blend of robotics, embedded, and software systems with emphasis on reliability and delightful UX.</p>

        {loading ? (
          <div className="mt-12 text-slate-400">Loading projects...</div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={i} className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition p-5 flex flex-col">
                {p.images?.[0] && (
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-800">
                    <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                  </div>
                )}
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-slate-300 text-sm">{p.tagline}</p>
                <p className="mt-3 text-slate-400 text-sm flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech?.map((t, ti) => (
                    <span key={ti} className="text-xs bg-slate-800 text-slate-200 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  {p.repo && <a className="text-sky-300 hover:text-sky-200 text-sm" href={p.repo} target="_blank">Code →</a>}
                  {p.demo && <a className="text-emerald-300 hover:text-emerald-200 text-sm" href={p.demo} target="_blank">Demo →</a>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
