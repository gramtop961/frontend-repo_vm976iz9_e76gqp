import { useState } from 'react'
import { Menu, Shield, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 blur-md rounded-full bg-gradient-to-tr from-purple-500/40 to-cyan-400/40" />
                <div className="relative z-10 h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 grid place-items-center">
                  <Shield className="text-white" size={20} />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">NovaGuard</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(true)} className="md:hidden text-slate-200">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-white/10 text-white">
              <X size={18} />
            </button>
          </div>
          <div className="mt-24 mx-4 rounded-2xl border border-white/10 bg-slate-900/80 p-6 space-y-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 text-base py-2">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-3 text-sm font-medium">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
