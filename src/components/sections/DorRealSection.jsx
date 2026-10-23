import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { DOR_LINES } from "@/lib/constants.jsx"
import { useRange, useSceneMode } from "@/lib/motion"

/*
 * Cena 2, a dor. A tela fixa e as frases se montam uma a uma.
 * Etapa A: o que o empresário já tentou. Etapa B: o diagnóstico.
 * As frases antigas não somem: passam para a tinta suave (6.1:1), legíveis em todo quadro.
 */
// Espelho de --color-brand-ink e --color-brand-ink-soft: a interpolação de cor precisa do valor literal
const INK = "#0A2433"
const INK_SOFT = "#4A5C66"

function Line({ p, index, children }) {
  const start = 0.03 + index * 0.1
  const opacity = useRange(p, [start, start + 0.06], [0, 1])
  const y = useRange(p, [start, start + 0.08], [28, 0])
  const color = useTransform(p, [start + 0.1, start + 0.16], [INK, INK_SOFT])
  return (
    <motion.p style={{ opacity, y, color }} className="display text-[clamp(22px,min(7.8vw,4.4svh),40px)] sm:text-display-m">
      {children}
    </motion.p>
  )
}

export default function DorRealSection() {
  const ref = useRef(null)
  const mode = useSceneMode()
  const motionOn = mode !== "static"
  // O progresso começa quando a cena chega a 55% da tela: a primeira frase já entra subindo, antes de fixar
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 55%", "end end"] })

  const butOpacity = useRange(p, [0.36, 0.44], [0, 1])
  const butY = useRange(p, [0.36, 0.46], [32, 0])
  const stageAOpacity = useRange(p, [0.56, 0.61], [1, 0])
  const stageAY = useRange(p, [0.56, 0.66], [0, -8], { unit: "vh" })
  const stageBOpacity = useRange(p, [0.62, 0.7], [0, 1])
  const stageBY = useRange(p, [0.62, 0.72], [10, 0], { unit: "vh" })
  const markScale = useRange(p, [0.74, 0.84], [0, 1])
  const tailOpacity = useRange(p, [0.84, 0.9], [0, 1])

  if (!motionOn) {
    return (
      <section id="dor" className="scene-light py-14 sm:py-20 lg:py-32" aria-labelledby="dor-title">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 lg:px-10">
          <div className="flex flex-col gap-2">
            {DOR_LINES.map((l) => (
              <p key={l} className="display text-[clamp(22px,min(7.8vw,4.4svh),40px)] sm:text-display-m text-brand-ink-soft">{l}</p>
            ))}
            <p className="display text-[clamp(22px,min(7.8vw,4.4svh),40px)] sm:text-display-m mt-6 max-w-[18ch]">Mas se o comportamento da sua equipe continuar o mesmo, o resultado continuará limitado.</p>
          </div>
          <h2 id="dor-title" className="display text-display-l">
            O problema não é técnico. <span className="bg-brand-gold px-2 text-brand-petrol-dark">É emocional.</span>
          </h2>
          <p className="text-body-l text-brand-ink-soft">Nenhuma empresa cresce além da maturidade do seu time.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="dor" ref={ref} className={`scene-light relative ${mode === "compact" ? "h-[175svh]" : "h-[280svh]"}`} aria-labelledby="dor-title">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="relative mx-auto grid w-full max-w-[1280px] px-5 pb-[104px] pt-[var(--header-h)] lg:px-10 lg:pb-0">
          {/* Etapa A */}
          <motion.div style={{ opacity: stageAOpacity, y: stageAY }} className="col-start-1 row-start-1 flex flex-col gap-1 self-center">
            {DOR_LINES.map((l, i) => (
              <Line key={l} p={p} index={i}>{l}</Line>
            ))}
            <motion.p style={{ opacity: butOpacity, y: butY }} className="display text-[clamp(22px,min(7.8vw,4.4svh),40px)] sm:text-display-m mt-6 max-w-[24ch] text-brand-ink lg:mt-10">
              Mas se o comportamento da sua equipe continuar o mesmo, o resultado continuará limitado.
            </motion.p>
          </motion.div>

          {/* Etapa B */}
          <motion.div style={{ opacity: stageBOpacity, y: stageBY }} className="col-start-1 row-start-1 flex flex-col gap-8 self-center">
            <h2 id="dor-title" className="display text-display-xl max-w-[12ch]">
              O problema não é técnico.{" "}
              <span className="relative inline-block">
                <motion.span
                  aria-hidden="true"
                  style={{ scaleX: markScale }}
                  className="absolute inset-x-[-0.08em] inset-y-[0.04em] origin-left bg-brand-gold"
                />
                <span className="relative">É emocional.</span>
              </span>
            </h2>
            <motion.p style={{ opacity: tailOpacity }} className="text-body-l max-w-[36ch] text-brand-ink-soft">
              Nenhuma empresa cresce além da maturidade do seu time.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
