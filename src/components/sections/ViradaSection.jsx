import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { VIRADA } from "@/lib/constants.jsx"
import { easeInOutQuad, easeOutCubic, useIsDesktop, useRange, useScrollScenes } from "@/lib/motion"

/*
 * Cena 3, a virada (o pico da página, a cena mais longa).
 * Cada dor gira 180° no próprio eixo e mostra o resultado no verso.
 * Quando a última vira, a linha dourada varre o lado "comum" para fora.
 * Tudo em transform: o lado comum é uma camada que desliza, nunca uma coluna que encolhe.
 */
const FLIP_START = 0.06
const FLIP_STEP = 0.12
const FLIP_SPAN = 0.16
const COLLAPSE = [0.74, 0.88]

function FlipCard({ p, index, pain, result }) {
  const start = FLIP_START + index * FLIP_STEP
  const rotateX = useRange(p, [start, start + FLIP_SPAN], [0, 180], { ease: easeOutCubic })
  return (
    <li className="flip-card h-[62px] sm:h-[72px] lg:h-[84px]">
      <motion.div style={{ rotateX }} className="relative h-full w-full [transform-style:preserve-3d]">
        <span className="flip-face flip-front text-[15px] sm:text-[18px] lg:text-[20px]">{pain}</span>
        <span className="flip-face flip-back display text-[24px] sm:text-[30px] lg:text-[36px]" aria-hidden="true">{result}</span>
      </motion.div>
      <span className="sr-only">{pain}: {result}</span>
    </li>
  )
}

function Heading({ className = "" }) {
  return (
    <div className={`flex flex-col gap-3 sm:gap-5 ${className}`}>
      <p className="text-label text-brand-steel">Equipe comum</p>
      <h2 id="virada-title" className="display max-w-[13ch] text-[clamp(30px,5.4vw,78px)] leading-[0.9] text-brand-mist">
        Comportamento é a variável que define o resultado
      </h2>
      <p className="text-body hidden max-w-[40ch] text-brand-mist sm:block">
        Quando a equipe desenvolve equilíbrio emocional, responsabilidade, postura profissional, iniciativa e execução consistente... o que acontece?
      </p>
    </div>
  )
}

export default function ViradaSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const desktop = useIsDesktop()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] })

  // Desktop: o lado comum sai pela esquerda e as cartas vão para o centro
  const sweepX = useRange(p, COLLAPSE, [0, -101], { unit: "%", ease: easeInOutQuad })
  const stackX = useRange(p, COLLAPSE, [0, -24], { unit: "vw", ease: easeInOutQuad })
  // Celular: o lado comum sobe e sai
  const sweepY = useRange(p, COLLAPSE, [0, -101], { unit: "%", ease: easeInOutQuad })
  const headOpacity = useRange(p, [COLLAPSE[0], COLLAPSE[0] + 0.06], [1, 0])
  const endOpacity = useRange(p, [0.88, 0.94], [0, 1])
  const endY = useRange(p, [0.88, 0.96], [24, 0])

  if (!motionOn) {
    return (
      <section id="resultados" className="scene-petrol py-20 lg:py-32" aria-labelledby="virada-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <Heading />
          <div className="flex flex-col gap-4">
            <p className="text-label text-brand-gold">Equipe 360</p>
            <ul className="flex flex-col gap-3">
              {VIRADA.map((v) => (
                <li key={v.pain} className="grid grid-cols-2 gap-2">
                  <span className="rounded-[10px] border-2 border-brand-comum-edge bg-brand-comum-card p-3 font-bold text-brand-mist">{v.pain}</span>
                  <span className="rounded-[10px] bg-brand-gold p-3 font-bold text-brand-petrol-dark">{v.result}</span>
                </li>
              ))}
            </ul>
            <p className="display text-display-m mt-6">Não é motivação. É causa e efeito.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="resultados" ref={ref} className="scene-petrol relative h-[360svh]" aria-labelledby="virada-title">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* O lado comum: camada que será varrida */}
        <motion.div
          style={desktop ? { x: sweepX } : { y: sweepY }}
          className="absolute inset-y-0 left-0 z-10 w-full bg-brand-comum lg:w-1/2"
        >
          <div className="h-full w-full lg:border-r-2 lg:border-brand-gold" />
        </motion.div>

        <div className="relative z-20 mx-auto grid h-full max-w-[1280px] grid-rows-[auto_1fr] gap-4 px-5 pb-[104px] pt-[calc(var(--header-h)+20px)] sm:gap-6 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:gap-16 lg:px-10 lg:pb-0">
          {/* Título do lado comum, viaja com a camada */}
          <motion.div style={desktop ? { x: sweepX, opacity: headOpacity } : { opacity: headOpacity }} className="lg:pr-8">
            <Heading />
          </motion.div>

          {/* As cartas */}
          <motion.div style={desktop ? { x: stackX } : undefined} className="flex flex-col justify-end gap-4 self-end lg:self-center">
            <p className="text-label text-brand-gold">Equipe 360</p>
            <ol className="flip-stack flex flex-col gap-2 sm:gap-3">
              {VIRADA.map((v, i) => (
                <FlipCard key={v.pain} p={p} index={i} pain={v.pain} result={v.result} />
              ))}
            </ol>
            <motion.p style={{ opacity: endOpacity, y: endY }} className="display mt-2 text-[clamp(28px,5vw,64px)] leading-[0.92] text-brand-paper sm:mt-4">
              Não é motivação. É causa e efeito.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
