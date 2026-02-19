import { motion } from "framer-motion"
import { fadeIn, staggerContainer, itemFadeIn, JOURNEY_STRUCTURE } from "@/lib/constants.jsx"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function JornadaSection() {
  return (
    <section id="jornada" className="w-full py-3 sm:py-4 md:py-7 lg:py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6 border border-muted rounded-3xl bg-muted/10"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            O que os participantes do{" "}
            <span className="text-brand-orange">EQUIPE 360</span> receberão?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-[800px] text-sm sm:text-base text-muted-foreground md:text-lg leading-relaxed"
          >
            Trabalharemos 12 temas distribuídos nos quatro principais pilares do desenvolvimento comportamental
          </motion.p>
        </div>

        {/* Desktop: Grid de 4 colunas */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-8 max-w-7xl mx-auto items-start"
        >
          {JOURNEY_STRUCTURE.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeIn}
              className="flex flex-col h-full"
            >
              {/* Cabeçalho do pilar */}
              <div className={`${pillar.color} rounded-2xl p-5 mb-4 text-center shadow-lg h-30 flex flex-col items-center justify-center`}>
                <div className="flex justify-center mb-3">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {pillar.pillar}
                </h3>
              </div>

              {/* Itens do pilar */}
              <div className="space-y-3 flex-1 flex flex-col">
                {pillar.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="bg-background/90 rounded-xl border border-muted p-4 hover:shadow-md hover:border-brand-orange/30 transition-all group flex-1 min-h-35 flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-petrol text-white flex items-center justify-center font-bold text-xs">
                        {item.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-brand-orange shrink-0">{item.icon}</span>
                          <h4 className="font-bold text-brand-petrol text-sm leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden py-6 px-2"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {JOURNEY_STRUCTURE.map((pillar, idx) => (
              <AccordionItem
                key={idx}
                value={`journey-${idx}`}
                className="border border-muted rounded-2xl overflow-hidden bg-background/80"
              >
                <AccordionTrigger className="hover:no-underline px-4 py-4">
                  <div className="flex items-center gap-3 w-full">
                    <div className={`${pillar.color} rounded-xl p-2.5 shrink-0 shadow-md`}>
                      {pillar.icon}
                    </div>
                    <span className="text-left font-bold text-brand-petrol text-base flex-1">
                      {pillar.pillar}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3 pt-2">
                    {pillar.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="bg-muted/30 rounded-xl p-4 border border-muted/50"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="shrink-0 w-7 h-7 rounded-lg bg-brand-petrol text-white flex items-center justify-center font-bold text-xs">
                            {item.num}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-brand-orange shrink-0">{item.icon}</span>
                              <h4 className="font-bold text-brand-petrol text-sm leading-tight">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
