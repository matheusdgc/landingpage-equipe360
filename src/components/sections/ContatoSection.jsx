import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Linkedin, Youtube } from "lucide-react"
import { fadeIn } from "@/lib/constants.jsx"

export default function ContatoSection() {
  return (
    <section id="contato" className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-3 sm:px-4 md:px-6"
      >
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-3xl bg-brand-orange/10 text-brand-orange px-4 py-1 text-sm font-medium"
          >
            Contato
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-brand-petrol"
          >
            Vamos conversar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground md:text-lg leading-relaxed"
          >
            Entre em contato e leve a palestra EQUIPE 360 para a sua empresa. Respondemos em até 24 horas úteis.
          </motion.p>

          {/* Canais de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-2"
          >
            <a href="mailto:joao@comautomacao.com.br" className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand-petrol/10 p-3 hover:bg-brand-orange transition-colors">
                  <Mail className="h-5 w-5 text-brand-petrol" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brand-petrol">E-mail</p>
                  <a href="mailto:joao@comautomacao.com.br" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">
                    joao@comautomacao.com.br
                  </a>
                </div>
              </div>
            </a>

            <a href="https://wa.me/5515997133311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand-petrol/10 p-3 hover:bg-brand-orange transition-colors">
                  <Phone className="h-5 w-5 text-brand-petrol" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brand-petrol">WhatsApp</p>
                  <a className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">
                  +55 (15) 99713-3311
                </a>
              </div>
            </div>
            </a>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 pt-2"
          >
            {[
              { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
              { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-brand-petrol/20 flex items-center justify-center text-muted-foreground hover:text-brand-petrol hover:border-brand-petrol transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
