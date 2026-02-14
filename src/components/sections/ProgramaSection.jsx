import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, EQUIPE_ACRONYM } from "@/lib/constants.jsx"

export default function ProgramaSection() {
  return (
    <section id="programa" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            O significado de{" "}
            <span className="text-brand-orange">E.Q.U.I.P.E</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-[800px] text-sm sm:text-base text-muted-foreground md:text-lg leading-relaxed"
          >
            Cada letra representa um pilar essencial para formar colaboradores que assumem responsabilidade, pensam como donos e executam com padrão elevado.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl items-stretch gap-3 sm:gap-4 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {EQUIPE_ACRONYM.map((item, i) => (
            <motion.div
              key={i}
              variants={itemFadeIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-3xl border-2 border-muted p-6 sm:p-7 shadow-sm transition-all hover:shadow-lg hover:border-brand-orange/50 bg-background text-center h-full flex flex-col"
            >
              {/* Letra grande no background */}
              <div className="absolute -right-4 -top-4 text-[120px] sm:text-[140px] font-black text-brand-orange/5 group-hover:text-brand-orange/10 transition-colors leading-none select-none">
                {item.letter}
              </div>

              <div className="relative space-y-3 sm:space-y-4 flex flex-col flex-1 z-10">
                {/* Ícone */}
                <div className="mb-2 flex justify-center">
                  {item.icon}
                </div>

                {/* Letra destacada */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-petrol flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-white">
                      {item.letter}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-petrol leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-orange uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                </div>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
