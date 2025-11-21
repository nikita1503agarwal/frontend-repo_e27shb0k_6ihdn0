import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (!data.name || !data.email || !data.message) {
      setStatus({ ok: false, msg: 'Please fill required fields.' })
      return
    }
    setLoading(true)
    try {
      const r = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const j = await r.json()
      if (r.ok) setStatus({ ok: true, msg: 'Thanks! I will get back to you shortly.' })
      else setStatus({ ok: false, msg: j.detail || 'Failed to send.' })
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-slate-950 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <input name="email" type="email" placeholder="Email" className="bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <input name="subject" placeholder="Subject (optional)" className="bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <textarea name="message" rows="5" placeholder="Your message" className="bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 disabled:opacity-50">{loading ? 'Sending...' : 'Send Message'}</button>
            {status && (
              <div className={status.ok ? 'text-emerald-400' : 'text-rose-400'}>{status.msg}</div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
