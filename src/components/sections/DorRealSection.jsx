import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import { fadeIn, staggerContainer, itemFadeIn, PAINS } from "@/lib/constants.jsx"

export default function DorRealSection() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-20 lg:py-28" id="dor">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block rounded-3xl bg-red-50 text-red-600 px-4 py-1 text-sm font-medium">
            O desafio real
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol">
            O problema não é técnico.{" "}
            <span className="text-brand-orange">É comportamental.</span>
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-3xl gap-3 py-8 md:grid-cols-2">
          {PAINS.map((pain, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -4, transition: { duration: 0.2 } }} className={`group flex items-start gap-4 rounded-3xl border p-5 shadow-sm transition-all hover:shadow-md bg-background/80 ${i === PAINS.length - 1 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}>
              <div className="rounded-2xl bg-red-50 p-2.5 text-red-500 group-hover:bg-red-100 transition-colors">
                {pain.icon}
              </div>
              <p className="text-foreground font-medium leading-relaxed pt-1">{pain.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="inline-flex items-center gap-2 rounded-3xl bg-brand-petrol text-white px-6 py-3 text-base font-semibold">
            <Eye className="h-5 w-5" />
            O EQUIPE 360 nasce para resolver isso pela raiz.
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
