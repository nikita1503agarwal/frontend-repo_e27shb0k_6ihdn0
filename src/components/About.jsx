import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function About() {
  const [profile, setProfile] = useState(null)
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    async function run() {
      try {
        const [pr, tr] = await Promise.all([
          fetch(`${API}/profile`).then(r => r.json()),
          fetch(`${API}/timeline`).then(r => r.json())
        ])
        setProfile(pr)
        setTimeline(tr)
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-slate-300 max-w-xl">
            Passionate about designing robust electromechanical systems with clean software layers.
            I enjoy tight control loops, sensor fusion, and shipping polished user experiences.
          </p>

          {profile && (
            <div className="mt-6 text-slate-300">
              <div className="font-semibold text-white">{profile.university}</div>
              <div className="text-sm text-slate-400">{profile.location}</div>
              <div className="mt-4 flex gap-4">
                {profile.links?.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" className="text-sky-300 hover:text-sky-200 text-sm">{l.label} →</a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold">Timeline</h3>
          <div className="mt-4 space-y-6">
            {timeline.map((t, i) => (
              <div key={i}>
                <div className="text-slate-200 font-medium">{t.year}</div>
                <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                  {t.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
