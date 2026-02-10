import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, PILLARS } from "@/lib/constants.jsx"

export default function ProgramaSection() {
  return (
    <section id="programa" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl bg-muted/20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block rounded-3xl bg-brand-petrol/10 text-brand-petrol px-4 py-1 text-sm font-medium">
            O Programa
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol">
            O que é o Programa EQUIPE 360
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mx-auto max-w-[800px] text-sm sm:text-base text-muted-foreground md:text-lg leading-relaxed">
            O Programa EQUIPE 360 é um programa de desenvolvimento comportamental voltado para colaboradores que desejam evoluir profissionalmente, assumir mais responsabilidade e construir um futuro melhor para suas vidas — começando pelo comportamento no trabalho.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-5xl items-stretch gap-3 sm:gap-4 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PILLARS.map((p, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80 text-center h-full flex flex-col">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-orange/5 group-hover:bg-brand-orange/10 transition-all duration-300" />
              <div className="relative space-y-3 flex flex-col flex-1">
                <div className="mb-2 flex justify-center">{p.icon}</div>
                <h3 className="text-lg font-bold text-brand-petrol">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
