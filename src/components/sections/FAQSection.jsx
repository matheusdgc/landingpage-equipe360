import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { fadeIn } from "@/lib/constants.jsx"

const FAQ_ITEMS = [
  {
    question: "Como funciona o programa EQUIPE 360?",
    answer: "O EQUIPE 360 é um programa de desenvolvimento comportamental com 12 encontros mensais presenciais de 2 horas cada. Cada encontro combina palestra + dinâmica vivencial, trabalhando os 4 pilares do desenvolvimento: Base emocional, Postura profissional, Performance e intraempreendedorismo, e Resultado e visão de futuro."
  },
  {
    question: "Quantos colaboradores podem participar?",
    answer: "O programa inclui até 5 colaboradores. Colaboradores adicionais podem ser incluídos por R$ 75/mês por pessoa."
  },
  {
    question: "Qual a duração do programa?",
    answer: "O programa tem duração de 12 meses, com um encontro presencial mensal de 2 horas, totalizando 24 horas de conteúdo presencial ao longo do ano."
  },
  {
    question: "Os encontros são presenciais ou online?",
    answer: "Todos os 12 encontros são presenciais na sua empresa. Acreditamos que o desenvolvimento comportamental acontece através da vivência prática e da interação real entre as pessoas."
  },
  {
    question: "Qual o investimento?",
    answer: "O investimento para até 5 colaboradores é de 12x R$ 375 (parcelado) ou R$ 3.750 à vista com desconto. Cada colaborador adicional custa R$ 75/mês."
  },
  {
    question: "O que está incluso no programa?",
    answer: "Está incluso: 24 horas de palestras presenciais (12 encontros de 2h), 12 dinâmicas vivenciais práticas, acesso ao conteúdo digital por 12 meses, e participação em grupo exclusivo de desenvolvimento comportamental."
  },
  {
    question: "Qual a diferença entre EQUIPE 360 e palestras pontuais?",
    answer: "Palestras pontuais geram inspiração momentânea. O EQUIPE 360 é um programa progressivo de 12 meses que constrói maturidade comportamental através da repetição, prática e acompanhamento contínuo. O resultado é transformação real, não apenas motivação passageira."
  },
  {
    question: "Como é feito o pagamento?",
    answer: "Aceitamos pagamento à vista com desconto ou parcelamento em até 12x. Entre em contato para mais detalhes sobre as condições de pagamento."
  },
  {
    question: "Posso cancelar o programa?",
    answer: "Entre em contato para conhecer as condições contratuais e políticas de cancelamento do programa."
  },
  {
    question: "O programa é adequado para qualquer tipo de empresa?",
    answer: "O EQUIPE 360 é ideal para empresas que buscam elevar o padrão do time, formar colaboradores preparados para crescer, e construir uma cultura organizacional sólida. É mais adequado para empreendedores que entendem que crescimento acontece através do desenvolvimento das pessoas."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-3 sm:py-4 md:py-7 lg:py-10 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-brand-orange/10 p-4"
          >
            <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-brand-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            Perguntas{" "}
            <span className="text-brand-orange">Frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            Tire suas dúvidas sobre o programa EQUIPE 360
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-muted rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline px-5 sm:px-6 py-4 sm:py-5 text-left">
                  <div className="flex items-start gap-3 w-full pr-4">
                    <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                      <span className="text-brand-orange font-bold text-xs sm:text-sm">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="font-bold text-brand-petrol text-sm sm:text-base md:text-lg flex-1">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="pl-9 sm:pl-10">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="https://wa.me/5515997133311?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20programa%20EQUIPE%20360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-brand-petrol font-bold px-6 py-3 transition-colors shadow-lg hover:shadow-xl"
          >
            Entre em contato pelo WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
