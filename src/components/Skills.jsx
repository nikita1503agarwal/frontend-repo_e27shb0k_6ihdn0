import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Skills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    async function run() {
      try {
        const r = await fetch(`${API}/skills`)
        const j = await r.json()
        setSkills(j)
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  return (
    <section className="bg-slate-950 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Tools</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-white font-semibold">{s.name}</div>
              <div className="text-slate-400 text-sm">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
