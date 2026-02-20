import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, ENTREPRENEUR_CHALLENGES } from "@/lib/constants.jsx"

export default function EmpatiaSection() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-brand-petrol mb-6"
            >
              Eu sei o que você{" "}
              <span className="text-brand-orange">enfrenta</span>
            </motion.h2>
          </div>

          {/* Cards de desafios */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-12 sm:mb-16"
          >
            {ENTREPRENEUR_CHALLENGES.map((challenge, i) => (
              <motion.div
                key={i}
                variants={itemFadeIn}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative flex flex-col items-center gap-4 rounded-3xl border-2 border-brand-petrol/20 p-6 sm:p-7 shadow-lg transition-all hover:shadow-xl bg-background hover:border-brand-orange hover:bg-brand-orange/5"
              >
                {/* Número decorativo */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm">{i + 1}</span>
                </div>

                <div className="rounded-2xl bg-linear-to-br from-brand-petrol to-brand-petrol/80 p-4 text-white shadow-md group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <p className="text-center text-brand-petrol font-bold leading-relaxed text-sm sm:text-base group-hover:text-brand-orange transition-colors">
                  {challenge.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Conclusão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-brand-petrol/5 via-brand-orange/5 to-brand-petrol/5 rounded-3xl blur-xl" />
            <div className="relative bg-linear-to-br from-brand-petrol to-brand-petrol/90 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border-2 border-brand-orange/30">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-brand-orange rounded-full" />
                <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse" />
                <div className="w-12 h-1 bg-brand-orange rounded-full" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white text-center leading-tight">
                EQUIPE 360 existe para formar{" "}
                <span className="text-brand-orange">esse tipo de colaborador</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
