import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { SPEAKER, INSTAGRAM_URL, EMAIL } from "@/lib/constants.jsx"
import { useRange, useScrollScenes } from "@/lib/motion"
import joao from "@/public/images/joao-profile2.webp"

/*
 * Cena 6, o João. O retrato (joao-profile2) já rompe a própria moldura;
 * ele sobe num ritmo um pouco diferente do texto.
 */
export default function SobreSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const joaoY = useRange(p, [0, 1], [40, -40])
  const markScale = useRange(p, [0.22, 0.38], [0, 1])

  return (
    <section id="sobre" ref={ref} className="scene-light overflow-hidden py-20 lg:py-32" aria-labelledby="sobre-title">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-[1.08fr_1fr] lg:gap-20 lg:px-10">
        {/* Retrato: a foto já traz a quebra da moldura (os braços saem do quadro) */}
        <motion.img
          src={joao}
          alt="João Paulino, de mãos unidas em pirâmide, olhando para quem lê"
          width="900"
          height="879"
          loading="lazy"
          draggable={false}
          style={motionOn ? { y: joaoY } : undefined}
          className="mx-auto block h-auto w-full max-w-[644px] select-none lg:ml-[-2%] lg:w-[110%] lg:max-w-[708px]"
        />

        {/* Texto */}
        <div className="flex flex-col gap-8">
          <h2 id="sobre-title" className="display text-[clamp(44px,6vw,84px)] leading-[0.9]">
            Não é inspiração.{" "}
            <span className="relative inline-block whitespace-nowrap">
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
