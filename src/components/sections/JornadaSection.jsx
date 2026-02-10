import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { fadeIn, staggerContainer, itemFadeIn, JOURNEY } from "@/lib/constants.jsx"

export default function JornadaSection() {
  return (
    <section id="jornada" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl bg-muted/10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-3xl bg-brand-petrol/10 text-brand-petrol px-4 py-1 text-sm font-medium">
            <Clock className="h-3.5 w-3.5" />
            Conteúdo da Palestra
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol">
            Temas Abordados na Palestra
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mx-auto max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-lg">
            Uma palestra completa que conecta 8 temas essenciais para transformar postura, mentalidade e resultados.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-6xl gap-3 py-6 sm:py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {JOURNEY.map((item, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="group relative overflow-hidden rounded-3xl border p-5 shadow-sm transition-all hover:shadow-md bg-background/80">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-orange/5 group-hover:bg-brand-orange/10 transition-all duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-petrol text-white flex items-center justify-center font-bold text-sm">
                  {item.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-orange">{item.icon}</span>
                    <h3 className="font-bold text-brand-petrol text-sm leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
