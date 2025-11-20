import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.25),transparent_30%)]" />

      <div className="absolute inset-0 opacity-80" aria-hidden>
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm">
              Real-time Campus IoT Platform
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Smarter, safer, greener campuses — in real time
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Monitor occupancy, air quality, energy usage, and security across your entire campus with a single, unified web app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/20">
                Get a live walkthrough
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 bg-slate-800/40">
                Explore features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-xs text-slate-400">Buildings monitored</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white">250k</p>
                <p className="text-xs text-slate-400">Sensors connected</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white"><span className="text-emerald-400">-18%</span></p>
                <p className="text-xs text-slate-400">Energy usage</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 h-[420px] lg:h-[560px] relative">
            {/* Spline canvas already fills background; empty right column keeps layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
