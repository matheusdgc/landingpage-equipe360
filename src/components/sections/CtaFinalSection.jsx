import { motion } from "framer-motion"
import { PulseBeams } from "@/components/ui/pulse-beams"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ctaBeams, ctaGradientColors } from "@/lib/constants.jsx"

export default function CtaFinalSection() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <PulseBeams
          className="!h-auto min-h-[340px] sm:min-h-[360px] md:min-h-[400px] rounded-3xl"
          beams={ctaBeams}
          gradientColors={ctaGradientColors}
          baseColor="rgba(255,255,255,0.06)"
          accentColor="rgba(232,119,46,0.25)"
          background={
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-petrol-dark via-brand-petrol to-brand-petrol-light" />
          }
        >
          <div className="text-center text-white px-4 sm:px-8 md:px-12 max-w-3xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Equipes mais maduras geram menos problemas e{" "}
              <span className="text-brand-orange">mais resultado</span>.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mx-auto mt-4 sm:mt-6 max-w-[600px] text-sm sm:text-base text-white/80 md:text-lg leading-relaxed">
              Leve a palestra EQUIPE 360 para a sua empresa e transforme o comportamento do seu time em resultado sustentável.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-6 sm:mt-8 flex justify-center">
              <a href="#contato">
                <InteractiveHoverButton
                  text="Quero levar para minha empresa"
                  className="border-white/30 bg-brand-orange text-white text-sm sm:text-base"
                />
              </a>
            </motion.div>
          </div>
        </PulseBeams>
      </div>
    </section>
  )
}
