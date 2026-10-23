import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { SPEAKER, INSTAGRAM_URL, EMAIL } from "@/lib/constants.jsx"
import { useRange, useScrollScenes } from "@/lib/motion"
import joao from "@/public/images/joao-bracos.webp"

/*
 * Cena 6, o João. A moldura do "360" vira o retrato: o recorte fica dentro dela
 * e a cabeça rompe a borda de cima. Moldura e João sobem em ritmos diferentes.
 */
export default function SobreSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const frameY = useRange(p, [0, 1], [24, -24])
  const joaoY = useRange(p, [0, 1], [56, -40])
  const markScale = useRange(p, [0.22, 0.38], [0, 1])

  return (
    <section id="sobre" ref={ref} className="scene-light overflow-hidden py-20 lg:py-32" aria-labelledby="sobre-title">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        {/* Retrato */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] [clip-path:inset(-40%_0_0_0)]">
          <motion.div
            aria-hidden="true"
            style={motionOn ? { y: frameY } : undefined}
            className="absolute inset-x-0 bottom-[-40px] top-[16%] rounded-[14px] border-[3px] border-brand-gold bg-brand-petrol"
          />
          <motion.img
            src={joao}
            alt="João Paulino, de camisa branca e braços cruzados, sorrindo"
            width="1000"
            height="1000"
            loading="lazy"
            draggable={false}
            style={motionOn ? { y: joaoY } : undefined}
            className="absolute bottom-[-24px] left-1/2 w-[112%] max-w-none -translate-x-1/2 select-none"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-8">
          <h2 id="sobre-title" className="display text-display-l">
            Não é inspiração.{" "}
            <span className="relative inline-block">
              <motion.span
                aria-hidden="true"
                style={motionOn ? { scaleX: markScale } : undefined}
                className="absolute inset-x-[-0.08em] inset-y-[0.04em] origin-left bg-brand-gold"
              />
              <span className="relative">É construção.</span>
            </span>
          </h2>

          <div className="flex flex-col gap-2">
            <p className="display text-[clamp(30px,3.4vw,44px)] leading-none">{SPEAKER.name}</p>
            <p className="text-label text-brand-ink-soft">{SPEAKER.title}</p>
          </div>

          <div className="flex flex-col gap-5 text-body measure text-brand-ink-soft">
            <p>{SPEAKER.description}</p>
            <p className="text-brand-ink">{SPEAKER.methodology}</p>
            <p className="text-body-l font-semibold text-brand-ink">{SPEAKER.philosophy}</p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Como o João trabalha">
            {SPEAKER.badges.map((b) => (
              <li key={b} className="border-l-[3px] border-brand-gold pl-3 font-semibold text-brand-ink">
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link text-brand-ink">
              Instagram @soujoaopaulino
            </a>
            <a href={`mailto:${EMAIL}`} className="link text-brand-ink">
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
