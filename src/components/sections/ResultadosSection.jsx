import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, RESULTS } from "@/lib/constants.jsx"

export default function ResultadosSection() {
  return (
    <section id="resultados" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block rounded-3xl bg-brand-green-light text-brand-green px-4 py-1 text-sm font-medium">
            Resultados
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol">
            O que muda quando o{" "}
            <span className="text-brand-green">comportamento muda</span>
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-4xl gap-3 sm:gap-4 py-6 sm:py-10 grid-cols-1 md:grid-cols-2">
          {RESULTS.map((r, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="flex items-center gap-4 rounded-3xl border-l-4 border-l-brand-green border border-muted p-5 shadow-sm hover:shadow-md transition-all bg-background/80">
              <div className="rounded-2xl bg-brand-green-light p-2.5 text-brand-green flex-shrink-0">
                {r.icon}
              </div>
              <p className="font-medium text-foreground leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
