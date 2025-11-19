import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/40 p-8 sm:p-12">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-blue-400/20 blur-2xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold">Spin up your defense console</h3>
              <p className="mt-3 text-slate-300">Provision a tenant, connect your estate, and watch anomalies stream in — all in minutes.</p>
            </div>
            <div className="flex lg:justify-end">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 text-white font-medium shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                Request Access
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
