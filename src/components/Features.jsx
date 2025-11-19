import { motion } from 'framer-motion'
import { Lock, Radar, Code2, Activity } from 'lucide-react'

const cards = [
  {
    icon: Lock,
    title: 'Zero‑Trust Access',
    desc: 'Adaptive policies enforced at the edge. Every request verified. Every identity attested.',
    glow: 'from-purple-500/30 to-blue-400/30'
  },
  {
    icon: Radar,
    title: 'Threat Graph',
    desc: 'Streaming telemetry fused into a real‑time attack graph for instant blast‑radius mapping.',
    glow: 'from-cyan-400/30 to-emerald-400/30'
  },
  {
    icon: Code2,
    title: 'Agentic Response',
    desc: 'Autonomous playbooks that isolate, patch, and heal in seconds — not hours.',
    glow: 'from-fuchsia-400/30 to-purple-400/30'
  },
  {
    icon: Activity,
    title: 'Quantum‑safe Crypto',
    desc: 'Post‑quantum primitives and lattice‑based handshakes secure data for the long haul.',
    glow: 'from-amber-400/30 to-pink-400/30'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.08),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineered for intrusion‑proof operations</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">Built on streaming analytics, secure enclaves, and verifiable compute.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative">
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${c.glow} blur-xl`} />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full">
                <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center text-white">
                  <c.icon size={20} />
                </div>
                <h3 className="mt-4 text-white font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
