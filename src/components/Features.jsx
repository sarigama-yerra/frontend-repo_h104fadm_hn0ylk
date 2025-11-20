import { ShieldCheck, BarChart3, AlarmClock, Trees, Wifi, Building2 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Unified Campus Map",
    desc: "Live floor-by-floor view of occupancy, temperature, and device status.",
  },
  {
    icon: Wifi,
    title: "Device Orchestration",
    desc: "Provision, update, and monitor thousands of sensors without friction.",
  },
  {
    icon: BarChart3,
    title: "Insights & Forecasts",
    desc: "AI-driven trends for utilization, comfort, and energy optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    desc: "End-to-end encrypted data with role-based access and audit logs.",
  },
  {
    icon: AlarmClock,
    title: "Real-time Alerts",
    desc: "Smart thresholds and anomaly detection keep teams informed instantly.",
  },
  {
    icon: Trees,
    title: "Sustainability",
    desc: "Track emissions, water usage, and waste to meet green targets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for modern campuses</h2>
          <p className="mt-3 text-slate-300">Everything you need to manage facilities, safety, and sustainability.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-emerald-600/40 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
