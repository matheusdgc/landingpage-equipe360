import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Instagram,
  Youtube,
  Mic,
  Users,
  BookOpen,
  Crown,
  Check,
  CreditCard,
  AlertTriangle,
  UserPlus,
  Clock,
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
]

export default function CtaFinalSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          clearInterval(timer)
          return prev
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    const handleScroll = () => {
      const section = document.getElementById("contato")
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsVisible(rect.top <= 0 && rect.bottom > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      clearInterval(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="contato"
      className="w-full py-5 sm:py-6 md:py-8 lg:py-11 bg-linear-to-br from-brand-petrol-dark via-brand-petrol to-brand-petrol-light relative overflow-hidden"
    >
      {/* Sticky Urgency Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-red-600 via-red-500 to-red-600 shadow-lg"
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-pulse" />
              <span className="text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">
                Vagas Limitadas
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span className="text-white font-mono font-bold text-base sm:text-lg">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

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

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-orange text-center mt-8"
          >
            Como entregamos o programa EQUIPE 360
          </motion.h3>
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

            {/* Price Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 sm:p-8 md:p-10 bg-white/3"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-6">
                Comparativo de Investimento
              </h3>

              <div className="space-y-3 max-w-2xl mx-auto mb-6">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Palestras esporádicas</span>
                  <span className="text-white font-bold text-sm sm:text-base">R$ 100,00/mês por pessoa</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Conteúdo digital para desenvolvimento</span>
                  <span className="text-white font-bold text-sm sm:text-base">R$ 100,00/mês por pessoa</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Dinâmicas vivenciais na empresa</span>
                  <span className="text-white font-bold text-sm sm:text-base">R$ 200,00/mês por pessoa</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Comunidade de desenvolvimento</span>
                  <span className="text-white font-bold text-sm sm:text-base">R$ 250,00/mês por pessoa</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4 space-y-2">
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                  <span className="text-white font-bold text-base sm:text-lg">Total para 5 pessoas/mês:</span>
                  <span className="text-brand-orange font-black text-xl sm:text-2xl">R$ 3.250,00</span>
                </div>
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                  <span className="text-white/70 text-sm sm:text-base">Investimento anual:</span>
                  <span className="text-white/90 font-bold text-lg sm:text-xl">R$ 39.000,00</span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="p-6 sm:p-8 md:p-10"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                  PROGRAMA EQUIPE 360
                </h3>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/20 border border-brand-orange/40 px-6 py-3">
                  <UserPlus className="h-5 w-5 text-brand-orange" />
                  <span className="text-white font-bold text-base sm:text-lg">5 colaboradores</span>
                </div>
              </div>

              {/* Valor especulativo - Ancoragem */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-center mb-6"
              >
                <div className="relative inline-block">
                  <p className="text-white/40 text-3xl sm:text-4xl md:text-5xl font-black">
                    R$ 39.000,00
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 sm:h-1.5 bg-red-600 rotate-[-8deg] rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center text-brand-orange font-bold text-lg sm:text-xl mb-8"
              >
                Mas você não vai pagar isso.
              </motion.p>

              {/* Preços - Card branco */}
              <div className="rounded-2xl bg-white shadow-2xl p-6 sm:p-8 md:p-10 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                  {/* Parcelado */}
                  <div className="text-center">
                    <p className="text-brand-petrol/50 text-xs uppercase tracking-wider font-semibold mb-2">Parcelado</p>
                    <p className="text-brand-petrol font-black text-4xl sm:text-5xl leading-none">
                      12x <span className="text-brand-orange">R$ 375</span>
                    </p>
                  </div>

                  <div className="hidden sm:block w-px h-20 bg-brand-petrol/15" />
                  <div className="sm:hidden w-24 h-px bg-brand-petrol/15" />

                  {/* À vista */}
                  <div className="text-center">
                    <p className="text-brand-petrol/50 text-xs uppercase tracking-wider font-semibold mb-2">À vista</p>
                    <p className="text-brand-petrol font-black text-4xl sm:text-5xl leading-none">
                      <span className="text-brand-green">R$ 3.750</span>
                    </p>
                    <p className="text-brand-green text-xs mt-2 font-bold">
                      Economia de R$ 750
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-brand-petrol/60 text-xs sm:text-sm mt-6 pt-6 border-t border-brand-petrol/10">
                  <UserPlus className="h-4 w-4 text-brand-orange shrink-0" />
                  <p>Colaborador adicional: <span className="text-brand-petrol font-bold">+ R$ 75/mês</span> por pessoa</p>
                </div>
              </div>

              {/* Payment conditions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-brand-orange shrink-0" />
                  <span className="font-semibold text-white text-sm">
                    Condições:
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {PAYMENT_OPTIONS.map((option, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2.5 text-sm text-white font-medium"
                    >
                      <Check className="h-4 w-4 text-brand-green shrink-0" />
                      {option}
                    </div>
                  ))}
                </div>
              </div>

              {/* Vagas limitadas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative mx-auto w-fit mb-8"
              >
                <div className="absolute inset-0 rounded-2xl bg-red-500/20 blur-xl animate-pulse" />
                <div className="relative rounded-2xl bg-linear-to-r from-red-600 to-red-500 px-8 py-4 sm:px-10 sm:py-5 shadow-lg shadow-red-500/30">
                  <div className="flex items-center justify-center gap-3">
                    <div className="relative">
                      <AlertTriangle className="h-6 w-6 text-white shrink-0" />
                      <div className="absolute inset-0 animate-ping">
                        <AlertTriangle className="h-6 w-6 text-white/50" />
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-white font-black text-base sm:text-lg md:text-xl uppercase tracking-wider block">
                        Vagas limitadas
                      </span>
                      <span className="text-red-100/80 text-xs sm:text-sm font-medium">
                        Não perca a oportunidade — garanta a sua agora
                      </span>
                    </div>
                    <div className="relative">
                      <AlertTriangle className="h-6 w-6 text-white shrink-0" />
                      <div className="absolute inset-0 animate-ping">
                        <AlertTriangle className="h-6 w-6 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <div className="flex flex-col items-center text-center">
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 font-medium">
                  Desenvolvimento comportamental para empresas que{" "}
                  <span className="text-brand-orange font-bold">não aceitam resultados comuns.</span>
                </p>

                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-brand-orange via-yellow-300 to-brand-orange opacity-70 blur-lg group-hover:opacity-100 transition-opacity animate-pulse" />
                  <a
                    href="https://wa.me/5515997133311?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20programa%20EQUIPE%20360!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <InteractiveHoverButton
                      text="Quero transformar minha equipe"
                      className="border-brand-orange/30 bg-linear-to-r from-brand-orange to-yellow-500 text-brand-petrol text-base sm:text-lg md:text-xl font-black uppercase tracking-wide px-8 py-4 sm:px-12 sm:py-5 shadow-xl shadow-brand-orange/30"
                    />
                  </a>
                </div>
              </div>
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
            { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/soujoaopaulino" },
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
