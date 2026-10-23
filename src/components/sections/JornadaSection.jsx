import { useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { JOURNEY_STRUCTURE } from "@/lib/constants.jsx"
import { useScrollScenes } from "@/lib/motion"

/*
 * Cena 5, os 12 meses. A rolagem vertical vira deslocamento lateral:
 * o ano passa de lado, encontro a encontro, agrupado nos 4 pilares.
 * A régua da base mostra em que ponto do ano o visitante está.
 */
function Encounter({ item, pillar }) {
  return (
    <li className="flex w-[78vw] max-w-[340px] shrink-0 flex-col gap-4 rounded-[14px] border-2 border-brand-line-dark p-6 sm:w-[320px] lg:w-[340px] lg:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="display text-[72px] leading-[0.8] text-brand-gold tabular-nums lg:text-[88px]">{item.num}</span>
        <span className="text-label text-right text-brand-mist">{pillar}</span>
      </div>
      <h4 className="text-title text-brand-paper">{item.title}</h4>
      <p className="text-body text-brand-mist">{item.desc}</p>
    </li>
  )
}

function Track({ innerRef }) {
  return (
    <ol ref={innerRef} className="flex w-max gap-10 pr-[max(20px,8vw)] pl-5 lg:gap-14 lg:pl-10" aria-label="Os 12 encontros">
      {JOURNEY_STRUCTURE.map((group) => (
        <li key={group.pillar} className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <h3 className="display text-[clamp(28px,3vw,40px)] leading-none text-brand-paper">{group.pillar}</h3>
            <span aria-hidden="true" className="h-[2px] min-w-12 flex-1 bg-brand-gold" />
          </div>
          <ol className="flex gap-4">
            {group.items.map((item) => (
              <Encounter key={item.num} item={item} pillar={group.pillar} />
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

function Intro() {
  return (
    <header className="flex flex-col gap-4 px-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-10">
      <h2 id="jornada-title" className="display text-display-m max-w-[18ch]">
        O que os participantes do <span className="whitespace-nowrap text-brand-gold">EQUIPE 360</span> receberão?
      </h2>
      <p className="text-body measure text-brand-mist lg:max-w-[44ch]">
        Trabalharemos 12 temas distribuídos nos quatro principais pilares do desenvolvimento comportamental, um por mês.
      </p>
    </header>
  )
}

export default function JornadaSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const motionOn = useScrollScenes()
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

  if (!motionOn) {
    return (
      <section id="jornada" className="scene-dark py-20 lg:py-32" aria-labelledby="jornada-title">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <Intro />
          <div className="no-scrollbar overflow-x-auto pb-4" tabIndex={0} aria-label="Os 12 encontros, role para o lado">
            <Track />
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
        <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-10" aria-hidden="true">
          <div className="h-[2px] w-full bg-brand-line-dark">
            <motion.div style={{ scaleX: ruler }} className="h-full origin-left bg-brand-gold" />
          </div>
          <div className="mt-3 flex justify-between text-label text-brand-mist">
            <span>Mês 1</span>
            <span>Mês 12</span>
          </div>
        </div>
      </div>
    </section>
  )
}
