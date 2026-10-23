import { useRef } from "react"
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { SPEAKER, INSTAGRAM_URL, EMAIL } from "@/lib/constants.jsx"
import { useMediaQuery, useRange, useScrollScenes } from "@/lib/motion"
import joaoBg from "@/public/images/joao-profile2-bg.webp"
import joaoFg from "@/public/images/joao-profile2-fg.webp"

/*
 * Cena 6, o João. O retrato é separado em dois planos alinhados pixel a pixel:
 * o fundo do estúdio (com o João removido e o buraco preenchido) e o João recortado.
 * Na rolagem os planos sobem em ritmos diferentes; com mouse, o conjunto inclina em 3D
 * e o João avança à frente do fundo. Movimento reduzido: os planos ficam parados.
 */
const SPRING = { stiffness: 140, damping: 20, mass: 0.6 }

function Portrait({ motionOn, p }) {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)")
  const tilt = motionOn && finePointer
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, SPRING)
  const sy = useSpring(py, SPRING)
  const rotateY = useTransform(sx, (v) => v * 9)
  const rotateX = useTransform(sy, (v) => v * -7)
  const fgX = useTransform(sx, (v) => v * 16)
  const bgX = useTransform(sx, (v) => v * -12)
  const bgPointerY = useTransform(sy, (v) => v * -8)

  // Rolagem: o fundo quase não anda, o João anda mais
  const bgScrollY = useRange(p, [0, 1], [18, -18])
  const fgScrollY = useRange(p, [0, 1], [60, -60])
  const bgY = useTransform([bgScrollY, bgPointerY], ([a, b]) => a + b)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    py.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <div
      onPointerMove={tilt ? onMove : undefined}
      onPointerLeave={tilt ? onLeave : undefined}
      className="relative mx-auto w-full max-w-[644px] select-none [perspective:1100px] lg:ml-[-2%] lg:w-[110%] lg:max-w-[708px]"
    >
      <motion.div
        style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative aspect-[900/879] w-full"
      >
        <motion.img
          src={joaoBg}
          alt=""
          aria-hidden="true"
          width="900"
          height="879"
          loading="lazy"
          draggable={false}
          style={motionOn ? { x: bgX, y: bgY, z: tilt ? -50 : 0, scale: 0.97 } : undefined}
          className="absolute inset-0 h-full w-full"
        />
        <motion.img
          src={joaoFg}
          alt="João Paulino, de mãos unidas em pirâmide, olhando para quem lê"
          width="900"
          height="879"
          loading="lazy"
          draggable={false}
          style={motionOn ? { x: fgX, y: fgScrollY, z: tilt ? 50 : 0 } : undefined}
          className="absolute inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  )
}

export default function SobreSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const markScale = useRange(p, [0.22, 0.38], [0, 1])

  return (
    <section id="sobre" ref={ref} className="scene-light overflow-hidden py-20 lg:py-32" aria-labelledby="sobre-title">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-[1.08fr_1fr] lg:gap-20 lg:px-10">
        <Portrait motionOn={motionOn} p={p} />

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
