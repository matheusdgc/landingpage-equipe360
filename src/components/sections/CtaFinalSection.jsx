import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Check } from "lucide-react"
import { DELIVERABLES, PRICE_COMPARISON, PRICING, TICKET_URL, CTA_LABEL } from "@/lib/constants.jsx"
import { useRange, useScrollScenes } from "@/lib/motion"

/*
 * Cena 8, o investimento. O fecho firme no claro: entregáveis com números reais,
 * o comparativo, um painel escuro com o preço e um único botão.
 * Aqui a moldura do "360" no topo fecha a volta.
 */
export default function CtaFinalSection() {
  const ref = useRef(null)
  const motionOn = useScrollScenes()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "start start"] })
  const markScale = useRange(p, [0.45, 0.75], [0, 1])

  return (
    <section id="contato" ref={ref} className="scene-light py-20 lg:py-32" aria-labelledby="contato-title">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-5 lg:gap-24 lg:px-10">
        {/* Abertura */}
        <header className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <h2 id="contato-title" className="display text-display-l">
            Empresas extraordinárias são formadas por{" "}
            <span className="relative inline-block">
              <motion.span
                aria-hidden="true"
                style={motionOn ? { scaleX: markScale } : undefined}
                className="absolute inset-x-[-0.08em] inset-y-[0.04em] origin-left bg-brand-gold"
              />
              <span className="relative">equipes conscientes</span>
            </span>
          </h2>
          <div className="flex flex-col gap-4 text-body measure text-brand-ink-soft">
            <p>
              Se você busca apenas cumprir calendário com palestras pontuais, <strong className="text-brand-ink">EQUIPE 360 não é para você.</strong>
            </p>
            <p>
              Mas se você deseja elevar o padrão do seu time, formar colaboradores preparados para crescer, fortalecer cultura e segurança, e construir uma empresa sólida e sustentável...
            </p>
            <p className="text-body-l font-bold text-brand-ink">Então estamos falando a mesma língua.</p>
          </div>
        </header>

        {/* Entregáveis */}
        <div className="flex flex-col gap-8">
          <h3 className="text-title">Como entregamos o programa EQUIPE 360</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {DELIVERABLES.map((d) => (
              <li key={d.title} className="flex flex-col gap-2 border-t-2 border-brand-ink pt-5">
                <span className="display text-[clamp(56px,7vw,96px)] leading-[0.85] text-brand-petrol tabular-nums">{d.figure}</span>
                <span className="font-bold text-brand-ink">{d.title}</span>
                <span className="text-[15px] leading-snug text-brand-ink-soft">{d.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparativo e preço */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-title">Comparativo de investimento</h3>
            <p className="text-body text-brand-ink-soft">Quanto custaria montar o mesmo desenvolvimento por partes, por pessoa, por mês:</p>
            <table className="w-full border-collapse text-left tabular-nums">
              <caption className="sr-only">Custo mensal por pessoa de cada parte do desenvolvimento</caption>
              <thead>
                <tr className="text-label text-brand-ink-soft">
                  <th scope="col" className="pb-3 font-[650]">Item</th>
                  <th scope="col" className="pb-3 text-right font-[650]">Por pessoa/mês</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-brand-line-light">
                    <th scope="row" className="py-3 pr-4 font-semibold text-brand-ink">{row.label}</th>
                    <td className="whitespace-nowrap py-3 text-right font-bold text-brand-ink">{row.value}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-brand-ink">
                  <th scope="row" className="pt-4 pr-4 font-bold text-brand-ink">Total para 5 pessoas/mês</th>
                  <td className="display whitespace-nowrap pt-4 text-right text-[clamp(24px,3vw,32px)] leading-none text-brand-petrol">{PRICING.monthlyTotal}</td>
                </tr>
                <tr>
                  <th scope="row" className="pt-2 pr-4 font-semibold text-brand-ink-soft">Investimento anual</th>
                  <td className="whitespace-nowrap pt-2 text-right font-bold text-brand-ink">{PRICING.yearlyTotal}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Painel de preço: ilha escura no claro */}
          <div className="scene-dark flex flex-col gap-7 rounded-[14px] border-[3px] border-brand-gold p-6 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="display text-[clamp(30px,3.2vw,42px)] leading-none">Programa EQUIPE 360</h3>
              <span className="text-label text-brand-gold">{PRICING.people}</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="display text-[clamp(32px,4vw,52px)] leading-none text-brand-steel line-through decoration-[3px]">
                <span className="sr-only">De </span>{PRICING.yearlyTotal}
              </p>
              <p className="text-body-l font-bold text-brand-gold">Mas você não vai pagar isso.</p>
            </div>

            <dl className="flex flex-col border-t-2 border-brand-line-dark">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-brand-line-dark py-4">
                <dt className="text-label text-brand-mist">Parcelado</dt>
                <dd className="display whitespace-nowrap text-[clamp(38px,4.2vw,56px)] normal-case leading-none tabular-nums">{PRICING.installments}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="text-label text-brand-mist">À vista</dt>
                <dd className="display whitespace-nowrap text-[clamp(38px,4.2vw,56px)] leading-none text-brand-gold tabular-nums">{PRICING.upfront}</dd>
              </div>
            </dl>

            <p className="text-[15px] text-brand-mist">
              Colaborador adicional: <strong className="text-brand-paper">{PRICING.extraPerson}</strong> por pessoa
            </p>

            <ul className="flex flex-col gap-2">
              {PRICING.payment.map((opt) => (
                <li key={opt} className="flex items-center gap-3 text-[15px] text-brand-paper">
                  <Check className="h-4 w-4 shrink-0 text-brand-gold" strokeWidth={3} aria-hidden="true" />
                  {opt}
                </li>
              ))}
            </ul>

            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full !min-h-[60px] !text-[17px]">
              {CTA_LABEL} <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <p className="text-center text-[15px] text-brand-mist">
              Desenvolvimento comportamental para empresas que <span className="font-bold text-brand-paper">não aceitam resultados comuns.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
