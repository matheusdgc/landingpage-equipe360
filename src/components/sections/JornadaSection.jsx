import { useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { JOURNEY } from "@/lib/constants.jsx"
import { useSceneMode } from "@/lib/motion"

/*
 * Cena 5, os 8 encontros. A rolagem vertical vira deslocamento lateral:
 * o programa passa de lado, semana a semana.
 * A régua da base mostra em que semana o visitante está.
 */
function Encounter({ item }) {
  return (
    <li className="flex w-[78vw] max-w-[340px] shrink-0 snap-start flex-col gap-3 rounded-[14px] border-2 border-brand-line-dark p-5 sm:w-[320px] sm:gap-4 sm:p-6 lg:w-[340px] lg:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="display text-[56px] leading-[0.85] text-brand-gold tabular-nums sm:text-[72px] lg:text-[88px]">{item.num}</span>
        <span className="text-label text-right text-brand-mist">Semana {Number(item.num)}</span>
      </div>
      <h3 className="text-title text-brand-paper">{item.title}</h3>
      <p className="text-body text-brand-mist">{item.desc}</p>
    </li>
  )
}

function Track({ innerRef }) {
  return (
    <ol ref={innerRef} className="flex w-max gap-4 pr-[max(20px,8vw)] pl-5 lg:pl-10" aria-label="Os 8 encontros">
      {JOURNEY.map((item) => (
        <Encounter key={item.num} item={item} />
      ))}
    </ol>
  )
}

function Ruler({ progress }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-10" aria-hidden="true">
      <div className="h-[2px] w-full bg-brand-line-dark">
        <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-brand-gold" />
      </div>
      <div className="mt-3 flex justify-between text-label text-brand-mist">
        <span>Semana 1</span>
        <span>Semana 8</span>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <header className="flex flex-col gap-4 px-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-10">
      <h2 id="jornada-title" className="display text-display-m max-w-[18ch]">
        O que os participantes do <span className="whitespace-nowrap text-brand-gold">EQUIPE 360</span> receberão?
      </h2>
      <p className="text-body measure text-brand-mist lg:max-w-[44ch]">
        Trabalharemos 8 temas dos quatro principais pilares do desenvolvimento comportamental, um por semana, em encontros presenciais de 2 horas.
      </p>
    </header>
  )
}

export default function JornadaSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const railRef = useRef(null)
  // No celular o trilho é nativo (arrasta com o dedo): nada de rolagem vertical extra
  const motionOn = useSceneMode() === "full"
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    if (!motionOn) return
    const measure = () => {
      const el = trackRef.current
      if (el) setDistance(Math.max(0, el.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [motionOn])

  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
  // 6% de respiro no início e no fim, para o primeiro e o último encontro assentarem
  const x = useTransform(p, (v) => -Math.min(1, Math.max(0, (v - 0.06) / 0.88)) * distance)
  const ruler = useTransform(p, (v) => Math.min(1, Math.max(0, (v - 0.06) / 0.88)))
  // Trilho nativo: a régua acompanha o arraste lateral
  const { scrollXProgress: railProgress } = useScroll({ container: railRef })

  if (!motionOn) {
    return (
      <section id="jornada" className="scene-dark py-14 sm:py-20 lg:py-32" aria-labelledby="jornada-title">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <Intro />
          <div className="flex flex-col gap-6">
            <div ref={railRef} className="no-scrollbar snap-x snap-mandatory scroll-px-5 overflow-x-auto pb-2 lg:scroll-px-10" tabIndex={0} aria-label="Os 8 encontros, arraste para o lado">
              <Track />
            </div>
            <Ruler progress={railProgress} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="jornada"
      ref={sectionRef}
      className="scene-dark relative"
      style={{ height: `calc(100svh + ${Math.round(distance * 1.1)}px)` }}
      aria-labelledby="jornada-title"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-10 overflow-hidden pt-[var(--header-h)] lg:gap-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <Intro />
        </div>
        <motion.div style={{ x }}>
          <Track innerRef={trackRef} />
        </motion.div>
        <Ruler progress={ruler} />
      </div>
    </section>
  )
}
