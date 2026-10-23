import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { EQUIPE_ACRONYM } from "@/lib/constants.jsx"
import Logo from "@/components/Logo"
import { clamp01, easeOutCubic, useRange, useScrollScenes } from "@/lib/motion"

/*
 * Cena 4, o método. Cada letra é revelada por uma cortina guiada pela rolagem
 * (clip-path subindo de baixo para cima), como uma placa sendo descoberta.
 * Sem tela fixa: aqui a página volta a fluir.
 */
function Row({ item, motionOn }) {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 95%", "start 50%"] })
  const clipPath = useTransform(p, (v) => `inset(${(1 - easeOutCubic(clamp01(v))) * 100}% 0 0 0)`)
  const textOpacity = useRange(p, [0.3, 0.8], [0, 1])
  const textY = useRange(p, [0.3, 0.9], [20, 0])

  return (
    <li ref={ref} className="grid grid-cols-[minmax(0,auto)_1fr] items-end gap-x-5 sm:gap-x-10 lg:grid-cols-[minmax(0,0.75fr)_1fr]">
      <motion.span
        aria-hidden="true"
        style={motionOn ? { clipPath } : undefined}
        className="display block w-[0.62em] text-[clamp(104px,17vw,250px)] leading-[0.78] text-brand-petrol lg:justify-self-end lg:text-right"
      >
        {item.letter}
      </motion.span>
      <motion.div style={motionOn ? { opacity: textOpacity, y: textY } : undefined} className="flex flex-col gap-2 pb-1 sm:pb-3">
        <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="display text-[clamp(30px,3.6vw,48px)] leading-none text-brand-ink">{item.title}</span>
          <span className="text-label text-brand-ink-soft">{item.subtitle}</span>
        </h3>
        <p className="text-body measure text-brand-ink-soft">{item.desc}</p>
      </motion.div>
    </li>
  )
}

export default function ProgramaSection() {
  const motionOn = useScrollScenes()
  return (
    <section id="programa" className="scene-light py-20 lg:py-32" aria-labelledby="programa-title">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-5 lg:gap-20 lg:px-10">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <Logo tone="light" className="h-8 lg:h-10" />
            <h2 id="programa-title" className="display text-display-l">
              O significado de <span className="whitespace-nowrap">E.Q.U.I.P.E.</span>
            </h2>
          </div>
          <p className="text-body-l measure text-brand-ink-soft">
            Cada letra representa um pilar essencial para formar colaboradores que assumem responsabilidade, pensam como donos e executam com padrão elevado.
          </p>
        </header>
        <ol className="flex flex-col gap-8 lg:gap-4" aria-label="E.Q.U.I.P.E., letra por letra">
          {EQUIPE_ACRONYM.map((item) => (
            <Row key={item.title} item={item} motionOn={motionOn} />
          ))}
        </ol>
      </div>
    </section>
  )
}
