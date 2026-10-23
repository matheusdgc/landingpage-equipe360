import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { FAQ_ITEMS, WA_DUVIDAS } from "@/lib/constants.jsx"

/*
 * Perguntas frequentes. O título fica fixo na coluna da esquerda enquanto as
 * respostas passam. A resposta abre sem animar altura: aparece com um fade curto.
 */
export default function FAQSection() {
  return (
    <section id="faq" className="scene-light border-t-2 border-brand-line-light bg-brand-bone-deep py-20 lg:py-32" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <header className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:self-start">
          <h2 id="faq-title" className="display text-display-l">Perguntas frequentes</h2>
          <p className="text-body text-brand-ink-soft">Tire suas dúvidas sobre o programa EQUIPE 360.</p>
          <div className="mt-2 flex flex-col items-start gap-3">
            <p className="font-semibold text-brand-ink">Ainda tem dúvidas?</p>
            <a href={WA_DUVIDAS} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </header>

        <AccordionPrimitive.Root type="single" collapsible className="flex flex-col">
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionPrimitive.Item key={item.question} value={`faq-${idx}`} className="border-t-2 border-brand-line-light last:border-b-2">
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] font-bold leading-snug text-brand-ink sm:text-[20px]">
                  {item.question}
                  <Plus
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-brand-petrol transition-transform duration-[240ms] ease-[cubic-bezier(.2,.8,.2,1)] group-data-[state=open]:rotate-45"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="data-[state=open]:animate-[faq-in_240ms_cubic-bezier(.2,.8,.2,1)]">
                <p className="text-body measure pb-6 text-brand-ink-soft">{item.answer}</p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
