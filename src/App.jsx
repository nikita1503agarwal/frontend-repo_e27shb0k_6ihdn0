import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/20 border-b border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900">Mechatronics @ DeKUT</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-800">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm">Hire Me</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Mechatronics Portfolio</div>
        <div className="text-sm">Built with love for robotics • DeKUT</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950" id="home">
      <Navbar />
      <Hero />
      <div id="skills"><Skills /></div>
      <div id="about"><About /></div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
