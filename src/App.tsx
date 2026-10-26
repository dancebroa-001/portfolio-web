
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900">

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed top-0 left-1/2 z-0 h-[400px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-indigo-100/60 via-purple-50/30 to-transparent blur-[120px]" />

      <div className="pointer-events-none fixed right-0 bottom-0 z-0 h-[500px] w-[500px] bg-sky-100/40 blur-[140px]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <TechStack />
      </main>

    </div>
  )
}

export default App
