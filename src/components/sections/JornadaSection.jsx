import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { JOURNEY } from "@/lib/constants.jsx"
import { useSceneMode } from "@/lib/motion"

/*
 * Cena 5, os 8 encontros.
 * full    → a seção fixa e a rolagem vertical vira deslocamento lateral do trilho.
 * compact → o trilho é um carrossel nativo que anda sozinho enquanto a página desce
 *           (sem prender a tela); se a pessoa arrastar ou usar os botões, ela assume o controle.
 * static  → carrossel nativo parado, com botões e barra de rolagem visível no mouse.
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

function RulerBar({ progress }) {
  return (
    <div className="min-w-0 flex-1" aria-hidden="true">
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

function Ruler({ progress, children }) {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] items-center gap-5 px-5 lg:px-10">
      <RulerBar progress={progress} />
      {children}
    </div>
  )
}

function StepButton({ dir, disabled, onClick }) {
  const Icon = dir < 0 ? ArrowLeft : ArrowRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir < 0 ? "Encontro anterior" : "Próximo encontro"}
      className="btn-secondary !min-h-11 !w-11 shrink-0 !p-0 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
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
  const mode = useSceneMode()
  const pinned = mode === "full"
  const [distance, setDistance] = useState(0)
  const [edges, setEdges] = useState({ start: true, end: false })
  const userTookOver = useRef(false)

  useLayoutEffect(() => {
    if (!pinned) return
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
  }, [pinned])

  // Modo fixado: o trilho anda com a rolagem vertical
  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
  // 6% de respiro no início e no fim, para o primeiro e o último encontro assentarem
  const x = useTransform(p, (v) => -Math.min(1, Math.max(0, (v - 0.06) / 0.88)) * distance)
  const ruler = useTransform(p, (v) => Math.min(1, Math.max(0, (v - 0.06) / 0.88)))

  // Carrossel nativo: a régua acompanha a posição do trilho
  const { scrollXProgress: railProgress } = useScroll({ container: railRef })
  useMotionValueEvent(railProgress, "change", (v) => {
    const start = v <= 0.01
    const end = v >= 0.99
    if (start !== edges.start || end !== edges.end) setEdges({ start, end })
  })

  // Celular: enquanto a seção atravessa a tela, o trilho anda sozinho (sem prender a página)
  // Começa com o trilho inteiro visível acima da barra de compra e termina quando ele chega ao header
  const { scrollYProgress: pass } = useScroll({ target: railRef, offset: ["start 62%", "start 6%"] })
  useMotionValueEvent(pass, "change", (v) => {
    const rail = railRef.current
    if (mode !== "compact" || !rail || userTookOver.current) return
    rail.scrollLeft = v * (rail.scrollWidth - rail.clientWidth)
  })

  // Se a pessoa arrastar o trilho, ela assume o controle
  useEffect(() => {
    const rail = railRef.current
    if (!rail || pinned) return
    const takeOver = () => {
      userTookOver.current = true
    }
    rail.addEventListener("touchstart", takeOver, { passive: true })
    rail.addEventListener("wheel", takeOver, { passive: true })
    rail.addEventListener("pointerdown", takeOver)
    return () => {
      rail.removeEventListener("touchstart", takeOver)
      rail.removeEventListener("wheel", takeOver)
      rail.removeEventListener("pointerdown", takeOver)
    }
  }, [pinned])

  const step = (dir) => {
    const rail = railRef.current
    if (!rail) return
    userTookOver.current = true
    const card = rail.querySelector("li")
    const amount = card ? card.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8
    rail.scrollBy({ left: dir * amount, behavior: mode === "static" ? "auto" : "smooth" })
  }

  if (!pinned) {
    // No compact o trilho é dirigido pela rolagem: o snap obrigatório brigaria com ele
    const snap = mode === "compact" ? "snap-none" : "snap-x snap-mandatory"
    return (
      <section id="jornada" ref={sectionRef} className="scene-dark py-14 sm:py-20 lg:py-32" aria-labelledby="jornada-title">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">
          <Intro />
          <div className="flex flex-col gap-6">
            <div
              ref={railRef}
              className={`relative ${snap} scroll-px-5 overflow-x-auto pb-3 [scrollbar-color:var(--color-brand-gold)_transparent] [scrollbar-width:thin] lg:scroll-px-10 [@media(pointer:coarse)]:no-scrollbar`}
              tabIndex={0}
              aria-label="Os 8 encontros, use as setas ou arraste para o lado"
            >
              <Track />
            </div>
            <Ruler progress={railProgress}>
              <div className="flex gap-2">
                <StepButton dir={-1} disabled={edges.start} onClick={() => step(-1)} />
                <StepButton dir={1} disabled={edges.end} onClick={() => step(1)} />
              </div>
            </Ruler>
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
