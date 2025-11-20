export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© 2025 CampusFlow IoT. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-slate-400 hover:text-white">Privacy</a>
          <a href="#" className="text-slate-400 hover:text-white">Terms</a>
          <a href="#" className="text-slate-400 hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}
