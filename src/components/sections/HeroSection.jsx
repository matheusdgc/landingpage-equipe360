import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { TICKET_URL, CTA_LABEL } from "@/lib/constants.jsx"
import { useRange, useScrollScenes } from "@/lib/motion"
import joao from "@/public/images/joao-piramide.webp"

/*
 * Cena 1, a recusa. Quatro planos com ritmos diferentes:
 * fundo (EQUIPE COMUM gigante) < João recortado < névoa da base < manchete.
 * A base do recorte é o ponto de contato: o João escala a partir dela.
 */
export default function HeroSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] })

  const backX = useRange(p, [0, 1], [0, -22], { unit: "vw" })
  const backY = useRange(p, [0, 1], [0, -3], { unit: "vh" })
  const joaoY = useRange(p, [0, 1], [0, -4], { unit: "vh" })
  const joaoScale = useRange(p, [0, 1], [1, 1.07])
  const fogY = useRange(p, [0, 1], [0, -9], { unit: "vh" })
  const copyY = useRange(p, [0, 1], [0, -16], { unit: "vh" })
  const copyOpacity = useRange(p, [0.55, 0.92], [1, 0])

  const m = (style) => (motionOn ? style : undefined)

  return (
    <section
      id="topo"
      ref={ref}
      className={`scene-dark relative ${motionOn ? "h-[165svh]" : "min-h-svh"}`}
      aria-labelledby="hero-title"
    >
      <div className={`${motionOn ? "sticky top-0" : "relative"} h-svh min-h-[620px] overflow-hidden`}>
        {/* Plano 1: a palavra que o empresário recusa */}
        <motion.p
          aria-hidden="true"
          style={m({ x: backX, y: backY })}
          className="display pointer-events-none absolute bottom-[30svh] left-[-1vw] whitespace-nowrap text-[clamp(120px,27vw,440px)] leading-[0.8] text-[#0F4767] lg:bottom-[8svh]"
        >
          Equipe comum
        </motion.p>

        {/* Plano 2: o João, ancorado na base */}
        <motion.img
          src={joao}
          alt="João Paulino, de mãos unidas em pirâmide, olhando para quem lê"
          width="735"
          height="971"
          fetchPriority="high"
          draggable={false}
          style={m({ y: joaoY, scale: joaoScale })}
          className="absolute bottom-0 right-[-14vw] h-[60svh] w-auto max-w-none origin-bottom select-none sm:right-[-4vw] lg:right-[4vw] lg:h-[88svh] lg:max-h-[960px]"
        />

        {/* Plano 3: névoa da base, esconde o corte do recorte e afasta o fundo */}
        <motion.div
          aria-hidden="true"
          style={m({ y: fogY })}
          className="pointer-events-none absolute inset-x-0 bottom-[-12svh] h-[34svh] bg-gradient-to-t from-brand-petrol-dark from-45% to-transparent"
        />

        {/* Densidade só onde a manchete fica */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--color-brand-petrol-dark)_0%,var(--color-brand-petrol-dark)_34%,transparent_62%)] lg:bg-[linear-gradient(90deg,rgba(6,27,39,0.94)_0%,rgba(6,27,39,0.8)_34%,transparent_52%)]"
        />

        {/* Plano 4: a manchete */}
        <motion.div
          style={m({ y: copyY, opacity: copyOpacity })}
          className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-start pt-[calc(var(--header-h)+5svh)] lg:justify-center lg:pt-[var(--header-h)]"
        >
          <div
            className="flex max-w-[640px] flex-col gap-5 lg:gap-7"
            style={{
              paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
              paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
            }}
          >
            <h1 id="hero-title" className="display text-[clamp(40px,6.6vw,92px)] leading-[0.9]">
              Para empresários que se recusam a aceitar <span className="text-brand-gold">equipes comuns</span>
            </h1>
            <p className="measure max-w-[44ch] text-[17px] leading-relaxed text-brand-mist sm:text-body-l">
              Desenvolvimento comportamental contínuo para empresas: 12 encontros presenciais com palestras vivenciais e dinâmicas práticas com João Paulino.
            </p>
            <div>
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {CTA_LABEL} <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
