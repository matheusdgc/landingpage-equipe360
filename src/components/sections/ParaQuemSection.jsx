import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle2, TrendingUp, Star, Rocket, Heart } from "lucide-react"
import { fadeIn, IS_FOR } from "@/lib/constants.jsx"

const CARD_DATA = [
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: IS_FOR[0],
    desc: "Não esperam ordens. Identificam problemas e resolvem com maturidade e iniciativa.",
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: IS_FOR[1],
    desc: "Cuidam do negócio como se fosse seu. Agem com compromisso real, não apenas cumprindo tarefas.",
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: IS_FOR[2],
    desc: "Entregam resultados consistentes, com qualidade e sem necessidade de retrabalho.",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: IS_FOR[3],
    desc: "Fortalecem o time ao invés de drenar energia. Colaboram, não complicam.",
  },
]

export default function ParaQuemSection() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "start 0.55"],
  })

  const curtainL = useTransform(scrollYProgress, [0, 1], [50, 0])
  const curtainR = useTransform(scrollYProgress, [0, 1], [50, 100])
  const clipPath = useTransform(
    [curtainL, curtainR],
    ([l, r]) => `polygon(${l}% 0, ${r}% 0, ${r}% 100%, ${l}% 100%)`
  )

  return (
    <section id="para-quem" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6"
      >
        {/* Cabeçalho */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            O tipo de{" "}
            <span className="text-brand-orange">colaborador</span> que você precisa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            EQUIPE 360 forma profissionais conscientes, responsáveis e preparados para crescer junto com o negócio.
          </motion.p>
        </div>

        {/* Container único — clip-path revela tudo (fundo + cards) */}
        <motion.div
          ref={containerRef}
          style={{ clipPath }}
          className="mx-auto max-w-5xl mt-10 sm:mt-14 rounded-3xl bg-brand-petrol"
        >
          <div className="grid gap-4 sm:gap-6 py-8 sm:py-12 px-4 sm:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {CARD_DATA.map((card, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center gap-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 transition-colors hover:bg-white/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {card.desc}
                </p>
                <CheckCircle2 className="absolute top-3 right-3 h-5 w-5 text-brand-orange/50" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
