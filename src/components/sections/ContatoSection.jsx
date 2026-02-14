import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react"
import { fadeIn, staggerContainer, itemFadeIn } from "@/lib/constants.jsx"

const TRUST_BADGES = [
  { icon: Shield, text: "Sem compromisso" },
  { icon: Clock, text: "Resposta em até 24h" },
  { icon: Sparkles, text: "Palestra personalizada" },
]

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-brand-petrol-dark via-brand-petrol to-brand-petrol-light relative overflow-hidden"
    >
      {/* Subtle decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Leve o <span className="text-brand-orange">EQUIPE 360</span> para
            sua empresa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl"
          >
            Fale com a nossa equipe e descubra como transformar o comportamento
            do seu time em resultado real.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8"
          >
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={i}
                variants={itemFadeIn}
                className="flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm text-white/80"
              >
                <badge.icon className="h-4 w-4 text-brand-orange shrink-0" />
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl"
          >
            {/* WhatsApp - Primary CTA */}
            <motion.a
              href="https://wa.me/5515997133311?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20palestra%20EQUIPE%20360!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-emerald-500 p-6 sm:p-8 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow cursor-pointer"
            >
              <div className="rounded-full bg-white/20 p-3 group-hover:bg-white/30 transition-colors">
                <MessageCircle className="h-7 w-7" />
              </div>
              <span className="font-bold text-base sm:text-lg">WhatsApp</span>
              <span className="text-xs sm:text-sm text-white/80 leading-snug">
                Atendimento rápido e direto
              </span>
              <span className="mt-1 text-sm font-medium text-white/90">
                (15) 99713-3311
              </span>
            </motion.a>

            {/* Email - Secondary CTA */}
            <motion.a
              href="mailto:joao@comautomacao.com.br?subject=Interesse%20na%20palestra%20EQUIPE%20360"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-8 text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                <Mail className="h-7 w-7" />
              </div>
              <span className="font-bold text-base sm:text-lg">E-mail</span>
              <span className="text-xs sm:text-sm text-white/60 leading-snug">
                Para propostas e orçamentos
              </span>
              <span className="mt-1 text-sm font-medium text-white/80 break-all">
                joao@comautomacao.com.br
              </span>
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 mt-10"
          >
            {[
              {
                icon: <Instagram className="h-5 w-5" />,
                label: "Instagram",
                href: "#",
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                label: "LinkedIn",
                href: "#",
              },
              {
                icon: <Youtube className="h-5 w-5" />,
                label: "YouTube",
                href: "#",
              },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
