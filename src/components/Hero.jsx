import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient veil to blend with content without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-slate-50/40 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-4 py-1 text-xs tracking-wide uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Mechatronics • DeKUT
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Robotics, Control and Embedded Systems
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-slate-100/90 drop-shadow">
          I build playful, resilient robots and smart devices that bridge hardware and software — from PID loops to cloud dashboards.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-black/80 text-white px-5 py-3 hover:bg-black transition">
            See Projects
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-5 py-3 hover:bg-white transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
