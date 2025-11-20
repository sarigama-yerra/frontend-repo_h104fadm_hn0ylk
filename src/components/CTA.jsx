export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 p-8 sm:p-12 text-center shadow-xl shadow-emerald-500/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">See your campus in real time</h3>
          <p className="mt-3 text-slate-200">
            Book a 30-minute demo with our product team. We'll plug in your data and show actionable insights from day one.
          </p>

          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input type="text" placeholder="Full name" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-400" />
            <input type="email" placeholder="Work email" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-400" />
            <button type="button" className="col-span-1 sm:col-span-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15">
              Request demo
            </button>
          </form>

          <p className="mt-4 text-xs text-emerald-200/80">No spam. We reply within one business day.</p>
        </div>
      </div>
    </section>
  );
}
