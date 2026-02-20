import { motion } from "framer-motion"
import { Instagram, Mail } from "lucide-react"
import { fadeIn, SPEAKER_BADGES } from "@/lib/constants.jsx"
import { cn } from "@/lib/utils"
import profile2 from "@/public/images/profile2.jpeg"

const SPEAKER = {
  name: "João Paulino",
  title: "Desenvolvimento Comportamental Aplicado à Realidade Empresarial",
  description:
    "João Paulino trabalha com desenvolvimento comportamental aplicado à realidade de colaboradores, dentro da rotina real das empresas.",
  methodology: "EQUIPE 360 é estruturado em 4 pilares: Base emocional, Postura profissional, Performance e intraempreendedorismo, Resultado e visão de futuro. Com encontros mensais que constroem maturidade de forma progressiva e consistente.",
  philosophy: "Porque crescimento não acontece em um evento. Acontece com repetição, consciência e prática.",
  imageUrl: profile2,
  socials: [
    { icon: Instagram, url: "https://www.instagram.com/soujoaopaulino", label: "Instagram" },
    { icon: Mail, url: "mailto:joao@comautomacao.com", label: "E-mail" },
  ],
}

export default function SobreSection() {
  return (
    <section id="sobre" className="w-full py-3 sm:py-4 md:py-7 lg:py-10" style={{ backgroundColor: "rgb(254, 254, 254)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6"
      >
        {/* Cabeçalho */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            Não é inspiração.{" "}
            <span className="text-brand-orange">É construção.</span>
          </motion.h2>
        </div>

        {/* Profile Card — inspirado no profile-card-testimonial, sem carrosel */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Desktop */}
          <div className="hidden md:flex relative items-center">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-90 md:w-105 lg:w-115 xl:w-125 h-95 md:h-107.5 lg:h-120 xl:h-130 rounded-3xl overflow-hidden bg-background shrink-0 border-muted"
            >
              {SPEAKER.imageUrl ? (
                <img
                  src={SPEAKER.imageUrl}
                  alt={SPEAKER.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-muted-foreground bg-gradient-to-br from-brand-petrol/5 to-brand-petrol/15">
                  <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="24" r="11" fill="rgba(11,61,92,0.2)" />
                    <ellipse cx="32" cy="50" rx="18" ry="11" fill="rgba(11,61,92,0.2)" />
                  </svg>
                  <span className="text-sm font-medium">Foto João Paulino</span>
                </div>
              )}
            </motion.div>

            {/* Card de texto */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 ml-[-80px] z-10 max-w-2xl flex-1 border border-muted/50"
            >
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-petrol mb-2">
                  {SPEAKER.name}
                </h2>
                <p className="text-sm lg:text-base font-semibold text-brand-orange tracking-wide uppercase">
                  {SPEAKER.title}
                </p>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                {SPEAKER.description}
              </p>

              <div className="bg-brand-petrol/5 rounded-2xl p-6 mb-6 border-l-4 border-brand-orange">
                <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4 font-medium">
                  {SPEAKER.methodology}
                </p>
                <p className="text-sm lg:text-base text-muted-foreground italic leading-relaxed">
                  {SPEAKER.philosophy}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {SPEAKER_BADGES.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-3xl border bg-background px-4 py-2 text-sm font-semibold text-brand-petrol shadow-sm"
                  >
                    <span className="text-brand-orange">{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* Redes sociais */}
              <div className="flex space-x-4">
                {SPEAKER.socials.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-brand-petrol rounded-full flex items-center justify-center transition-all hover:bg-brand-petrol-light hover:scale-105"
                    aria-label={label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="md:hidden max-w-sm mx-auto text-center">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-square bg-background rounded-3xl overflow-hidden mb-6 border-muted"
            >
              {SPEAKER.imageUrl ? (
                <img
                  src={SPEAKER.imageUrl}
                  alt={SPEAKER.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-muted-foreground bg-gradient-to-br from-brand-petrol/5 to-brand-petrol/15">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="24" r="11" fill="rgba(11,61,92,0.2)" />
                    <ellipse cx="32" cy="50" rx="18" ry="11" fill="rgba(11,61,92,0.2)" />
                  </svg>
                  <span className="text-sm font-medium">Foto João Paulino</span>
                </div>
              )}
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="px-2"
            >
              <h2 className="text-2xl font-bold text-brand-petrol mb-2">
                {SPEAKER.name}
              </h2>
              <p className="text-sm font-semibold text-brand-orange tracking-wide uppercase mb-4">
                {SPEAKER.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {SPEAKER.description}
              </p>

              <div className="bg-brand-petrol/5 rounded-2xl p-4 mb-6 border-l-4 border-brand-orange">
                <p className="text-sm text-foreground leading-relaxed mb-3 font-medium">
                  {SPEAKER.methodology}
                </p>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  {SPEAKER.philosophy}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {SPEAKER_BADGES.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-3xl border bg-background px-3 py-1.5 text-xs font-semibold text-brand-petrol shadow-sm"
                  >
                    <span className="text-brand-orange">{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                {SPEAKER.socials.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-brand-petrol rounded-full flex items-center justify-center transition-all hover:bg-brand-petrol-light hover:scale-105"
                    aria-label={label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
