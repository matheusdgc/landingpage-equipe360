import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, RESULTS } from "@/lib/constants.jsx"

export default function ResultadosSection() {
  return (
    <section id="resultados" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol">
            Comportamento é a variável que{" "}
            <span className="text-brand-green">define o resultado</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Quando a equipe desenvolve equilíbrio emocional, responsabilidade, postura profissional, iniciativa e execução consistente...
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl font-bold text-brand-petrol"
          >
            O que acontece?
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-4xl gap-3 sm:gap-4 py-6 sm:py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {RESULTS.map((r, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }} className="flex flex-col items-center gap-3 rounded-3xl border-2 border-brand-green/30 p-6 shadow-sm hover:shadow-lg hover:border-brand-green transition-all bg-background/80">
              <div className="rounded-2xl bg-brand-green-light p-3 text-brand-green flex-shrink-0">
                {r.icon}
              </div>
              <p className="font-bold text-foreground leading-relaxed text-center text-lg">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center py-6"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold">
            Não é motivação. É causa e efeito.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
