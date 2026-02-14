import { motion } from "framer-motion"
import {
  Instagram,
  Linkedin,
  Youtube,
  Mic,
  Users,
  BookOpen,
  Crown,
  Check,
  CreditCard,
} from "lucide-react"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { fadeIn, staggerContainer, itemFadeIn } from "@/lib/constants.jsx"

const DELIVERABLES = [
  {
    icon: Mic,
    title: "24 horas de palestras",
    description: "12 encontros presenciais de 2h cada",
  },
  {
    icon: Users,
    title: "12 dinâmicas vivenciais",
    description: "Atividades práticas a cada encontro",
  },
  {
    icon: BookOpen,
    title: "Acesso ao conteúdo por 12 meses",
    description: "Material completo disponível online",
  },
  {
    icon: Crown,
    title: "Grupo exclusivo de desenvolvimento",
    description: "Comunidade de crescimento contínuo",
  },
]

const PAYMENT_OPTIONS = [
  "Pagamento à vista com desconto",
  "Parcelamento em até 12x",
  "Nota fiscal e contrato formal",
]

export default function CtaFinalSection() {
  return (
    <section
      id="contato"
      className="w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-brand-petrol-dark via-brand-petrol to-brand-petrol-light relative overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Empresas extraordinárias são formadas por{" "}
            <span className="text-brand-orange">equipes conscientes</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 space-y-4 max-w-2xl mx-auto"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              Se você busca apenas cumprir calendário com palestras pontuais,{" "}
              <span className="text-white font-semibold">EQUIPE 360 não é para você.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-medium">
              Mas se você deseja elevar o padrão do seu time, formar colaboradores preparados para crescer, fortalecer cultura e segurança, e construir uma empresa sólida e sustentável...
            </p>
            <p className="text-base sm:text-lg md:text-xl text-brand-orange font-bold">
              Então estamos falando a mesma língua.
            </p>
          </motion.div>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-white/[0.07] border border-white/10 backdrop-blur-sm overflow-hidden">
            {/* Deliverables grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5"
            >
              {DELIVERABLES.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  className="flex items-start gap-4 p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="shrink-0 rounded-2xl bg-brand-orange/15 p-3">
                    <item.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Payment conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-brand-orange" />
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Condições de pagamento
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PAYMENT_OPTIONS.map((option, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm text-white/80"
                  >
                    <Check className="h-3.5 w-3.5 text-brand-green shrink-0" />
                    {option}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* CTA area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 sm:p-8 md:p-10 flex flex-col items-center text-center"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                PROGRAMA EQUIPE 360
              </h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 font-medium">
                Desenvolvimento comportamental para empresas que{" "}
                <span className="text-brand-orange font-bold">não aceitam resultados comuns.</span>
              </p>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Quero transformar minha equipe"
                  className="border-white/30 bg-brand-orange text-white text-sm sm:text-base font-bold"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4 mt-10"
        >
          {[
            { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
            { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
            { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
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
      </motion.div>
    </section>
  )
}
