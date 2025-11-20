import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(1200px_600px_at_90%_-10%,rgba(6,182,212,0.15),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
