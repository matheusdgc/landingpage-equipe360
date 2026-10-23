import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { TICKET_URL, CTA_LABEL } from "@/lib/constants.jsx"
import { useRange, useSceneMode } from "@/lib/motion"
import joao from "@/public/images/joao-bracos.webp"

/*
 * Cena 1, a recusa. Quatro planos com ritmos diferentes:
 * fundo (EQUIPE 360 gigante) < João recortado < névoa da base < manchete.
 * A base do recorte é o ponto de contato: o João escala a partir dela.
 *
 * Até lg a cena empilha: manchete em cima, palco do João embaixo, ocupando só o
 * espaço que sobra (o João nunca cobre o botão). A partir de lg, palco e manchete
 * se sobrepõem lado a lado. Só fixa na tela no modo "full"; no celular os planos
 * se separam enquanto o hero sai da tela, sem rolagem extra.
 */
export default function HeroSection() {
  const ref = useRef(null)
  const mode = useSceneMode()
  const pinned = mode === "full"
  const compact = mode === "compact"
  // Desktop/tablet: a cena fica fixa e os planos andam durante o tempo fixado
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] })
  // Celular: a cena não fixa (rolagem curta); os planos se separam enquanto o hero sai da tela
  const { scrollYProgress: q } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const backX = useRange(p, [0, 1], [0, -22], { unit: "vw" })
  const backY = useRange(p, [0, 1], [0, -3], { unit: "vh" })
  const joaoScale = useRange(p, [0, 1], [1, 1.04])
  const fogY = useRange(p, [0, 1], [0, -9], { unit: "vh" })
  const copyY = useRange(p, [0, 1], [0, -10], { unit: "vh" })
  const copyOpacity = useRange(p, [0.35, 0.75], [1, 0])

  // Celular: o plano mais distante anda menos que a página (fica para trás), o mais próximo anda mais
  const cBackX = useRange(q, [0, 1], [0, -38], { unit: "vw" })
  const cBackY = useRange(q, [0, 1], [0, 26], { unit: "vh" })
  const cJoaoY = useRange(q, [0, 1], [0, 14], { unit: "vh" })
  const cJoaoScale = useRange(q, [0, 1], [1, 1.1])
  const cFogY = useRange(q, [0, 1], [0, -4], { unit: "vh" })
  const cCopyY = useRange(q, [0, 1], [0, -10], { unit: "vh" })
  const cCopyOpacity = useRange(q, [0.15, 0.6], [1, 0])

  const pick = (full, mobile) => (pinned ? full : compact ? mobile : undefined)

  return (
    <section id="topo" ref={ref} className={`scene-dark relative ${pinned ? "h-[140svh]" : ""}`} aria-labelledby="hero-title">
      <div
        className={`${pinned ? "sticky top-0 h-svh" : "min-h-svh"} flex flex-col overflow-hidden lg:block lg:h-svh lg:min-h-[620px]`}
      >
        {/* Manchete */}
        <motion.div
          style={pick({ y: copyY, opacity: copyOpacity }, { y: cCopyY, opacity: cCopyOpacity })}
          className="relative z-10 mx-auto w-full max-w-[1280px] pt-[calc(var(--header-h)+24px)] sm:pt-[calc(var(--header-h)+40px)] lg:flex lg:h-full lg:items-center lg:pt-[var(--header-h)]"
        >
          <div
            className="flex max-w-[640px] flex-col gap-4 sm:gap-5 lg:gap-7"
            style={{
              paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
              paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
            }}
          >
            <h1 id="hero-title" className="display text-[clamp(30px,min(9.4vw,9svh),64px)] leading-[0.98] lg:text-[clamp(56px,6.4vw,92px)] lg:leading-[0.96]">
              Para empresários que se recusam a aceitar <span className="text-brand-gold">equipes comuns</span>
            </h1>
            <p className="max-w-[44ch] text-[16px] leading-relaxed text-brand-mist sm:text-[17px] lg:text-body-l">
              Desenvolvimento comportamental contínuo para empresas: 8 encontros presenciais com palestras vivenciais e dinâmicas práticas com João Paulino.
            </p>
            <div>
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {CTA_LABEL} <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Palco do João: abaixo da manchete até lg, atrás dela a partir de lg */}
        <div className="relative mt-6 min-h-[260px] flex-1 lg:absolute lg:inset-0 lg:mt-0">
          {/* Plano 1: a palavra que o empresário recusa */}
          <motion.p
            aria-hidden="true"
            style={pick({ x: backX, y: backY }, { x: cBackX, y: cBackY })}
            className="display pointer-events-none absolute left-[-1vw] top-[6%] whitespace-nowrap text-[clamp(110px,27vw,440px)] leading-[0.8] text-[#0F4767] lg:bottom-[8svh] lg:top-auto"
          >
            Equipe 360
          </motion.p>

          {/* Plano 2: o João, ancorado na base do palco */}
          <motion.img
            src={joao}
            alt="João Paulino, de camisa branca e braços cruzados, sorrindo"
            width="1000"
            height="1000"
            fetchPriority="high"
            draggable={false}
            style={pick({ scale: joaoScale }, { y: cJoaoY, scale: cJoaoScale })}
            className="absolute bottom-0 right-[-10%] h-full w-auto max-w-none origin-bottom select-none sm:right-[-4%] lg:right-0 lg:h-[84svh] lg:max-h-[900px]"
          />

          {/* Plano 3: névoa da base, esconde o corte do recorte e afasta o fundo */}
          <motion.div
            aria-hidden="true"
            style={pick({ y: fogY }, { y: cFogY })}
            className="pointer-events-none absolute inset-x-0 bottom-[-6%] h-[30%] bg-gradient-to-t from-brand-petrol-dark from-40% to-transparent lg:bottom-[-12svh] lg:h-[34svh]"
          />

          {/* Densidade só onde a manchete fica (a partir de lg, quando ela sobrepõe o palco) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,rgba(6,27,39,0.94)_0%,rgba(6,27,39,0.8)_34%,transparent_52%)]"
          />
        </div>
      </div>
    </section>
  )
}
