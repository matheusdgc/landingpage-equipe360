import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { IS_FOR, NOT_FOR } from "@/lib/constants.jsx"
import { DUR_UI, EASE_FIRM, useScrollScenes } from "@/lib/motion"

/*
 * Cena 7, para quem é. A calma depois do retrato: fluxo simples, duas colunas
 * de peso desigual. Cada item entra quando chega à tela, uma vez.
 */
const enter = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: DUR_UI, ease: EASE_FIRM, delay: i * 0.06 },
})

export default function ParaQuemSection() {
  const motionOn = useScrollScenes()
  const m = (i) => (motionOn ? enter(i) : {})

  return (
    <section id="para-quem" className="scene-petrol py-20 lg:py-32" aria-labelledby="para-quem-title">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-5 lg:gap-20 lg:px-10">
        <header className="flex flex-col gap-4">
          <p className="text-label text-brand-gold">Empreendedores querem...</p>
          <h2 id="para-quem-title" className="display text-display-l max-w-[16ch]">
            Que tipo de colaborador sua empresa precisa?
          </h2>
        </header>

        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-label text-brand-paper">O EQUIPE 360 é para</h3>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {IS_FOR.map((item, i) => (
                <motion.li key={item.title} {...m(i)} className="flex flex-col gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-gold text-brand-petrol-dark" aria-hidden="true">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <h4 className="text-title">{item.title}</h4>
                  <p className="text-body text-brand-haze">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:border-l-2 lg:border-brand-line-dark lg:pl-14">
            <h3 className="text-label text-brand-paper">Não é para</h3>
            <ul className="flex flex-col gap-5">
              {NOT_FOR.map((item, i) => (
                <motion.li key={item} {...m(i + 4)} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border-2 border-brand-mist text-brand-mist" aria-hidden="true">
                    <X className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <span className="text-title text-brand-haze">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
