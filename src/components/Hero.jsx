import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] pt-28">
      {/* glow grid bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.08),transparent_40%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Spline 3D */}
      <div className="relative h-[480px] sm:h-[560px] lg:h-[640px]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/60" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center -mt-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Cyber defense for the next frontier
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-xl">
                Real-time threat detection, attack surface mapping, and autonomous response — delivered in a minimal, sci‑fi interface.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#cta" className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all">
                  Launch Console
                </a>
                <a href="#features" className="rounded-xl border border-white/15 px-5 py-3 text-slate-200 hover:bg-white/5 transition-colors">
                  Explore Features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <span>Zero Trust</span>
                <span>•</span>
                <span>Agentic Defense</span>
                <span>•</span>
                <span>Quantum‑safe Crypto</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }} className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 blur-2xl" />
                <div className="relative">
                  <dl className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-400">Signals/min</dt>
                      <dd className="mt-1 text-2xl font-semibold text-white">120k</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-400">MTTR</dt>
                      <dd className="mt-1 text-2xl font-semibold text-white">3.2s</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-400">Coverage</dt>
                      <dd className="mt-1 text-2xl font-semibold text-white">99.98%</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
