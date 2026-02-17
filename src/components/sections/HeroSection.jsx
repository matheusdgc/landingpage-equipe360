import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { PulseBeams } from "@/components/ui/pulse-beams"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { fadeIn, ctaBeams, ctaGradientColors } from "@/lib/constants.jsx"
import profile1 from "@/public/images/profile1.jpeg"

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <PulseBeams
        className="!h-auto min-h-[100svh] sm:min-h-[90svh] md:min-h-[85svh]"
        beams={ctaBeams}
        gradientColors={ctaGradientColors}
        baseColor="rgba(255,255,255,0.08)"
        accentColor="rgba(232,119,46,0.3)"
        background={
          <div className="absolute inset-0 bg-gradient-to-br from-brand-petrol-dark via-brand-petrol to-brand-petrol-light" />
        }
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-6 xl:grid-cols-[1fr_440px] xl:gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="space-y-3 sm:space-y-4">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-3xl bg-white/10 border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-white/90">
                <Clock className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Palestra presencial
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:text-5xl/none leading-tight">
                Para empresários que se recusam a aceitar{" "}
                <span className="text-brand-orange">equipes comuns</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed">
                Você pode investir em tecnologia.<br />
                Pode melhorar processos.<br />
                Pode contratar consultorias técnicas.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="max-w-[560px] text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed">
                Mas se o comportamento da sua equipe continuar o mesmo...<br />
                o resultado continuará limitado.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="pt-1 sm:pt-2">
              <a href="#contato">
                <InteractiveHoverButton
                  text="Desperte o nível extraordinário da sua equipe"
                  className="border-white/30 bg-brand-orange text-white text-sm sm:text-base"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero photo – visible on all breakpoints */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex items-center justify-center order-first lg:order-last">
            <div className="relative w-72 h-72 sm:w-[336px] sm:h-[336px] md:w-96 md:h-96 lg:h-[340px] xl:h-[440px] lg:w-full overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5">
              <img src={profile1} alt="João Paulino" className="w-full h-full object-cover" draggable={false} />
            </div>
          </motion.div>
        </div>
      </PulseBeams>
    </section>
  )
}
