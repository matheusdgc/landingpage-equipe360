import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { PulseBeams } from "@/components/ui/pulse-beams"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { fadeIn, ctaBeams, ctaGradientColors } from "@/lib/constants.jsx"

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
        <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:gap-8 xl:grid-cols-[1fr_440px] w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="space-y-3 sm:space-y-4">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-3xl bg-white/10 border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-white/90">
                <Clock className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Palestra presencial
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:text-5xl/none">
                PROGRAMA{" "}
                <span className="text-brand-orange">EQUIPE 360</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-snug">
                Desenvolvimento comportamental<br className="hidden sm:block" /> para quem quer crescer onde está
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="max-w-[560px] text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                Uma palestra presencial, vivencial e prática que desenvolve postura, maturidade emocional e atitude de dono em colaboradores.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="pt-1 sm:pt-2">
              <a href="#contato">
                <InteractiveHoverButton
                  text="Quero levar para minha empresa"
                  className="border-white/30 bg-brand-orange text-white text-sm sm:text-base"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero photo */}
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hidden lg:flex items-center justify-center">
            <div className="relative h-[400px] xl:h-[440px] w-full overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5 flex flex-col items-center justify-center text-white/40 gap-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="30" r="14" fill="rgba(255,255,255,0.15)" /><ellipse cx="40" cy="62" rx="22" ry="14" fill="rgba(255,255,255,0.15)" /></svg>
              <span className="text-sm font-medium">Foto João Paulino</span>
            </div>
          </motion.div>
        </div>
      </PulseBeams>
    </section>
  )
}
