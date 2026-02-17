import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"
import logoImg from "@/public/images/logo.jpeg"
import { fadeIn, NAV_LINKS } from "@/lib/constants.jsx"

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto grid gap-6 sm:gap-8 px-4 py-8 sm:py-12 md:px-6 grid-cols-1 sm:grid-cols-3 text-center sm:text-left">
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <img src={logoImg} alt="EQUIPE 360" className="h-12 sm:h-14 w-auto" draggable={false} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            João Paulino — Palestrante e Facilitador de Desenvolvimento Comportamental. Ajudando colaboradores comuns a se tornarem profissionais extraordinários.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
            ].map((s, i) => (
              <motion.a key={i} href="#" whileHover={{ y: -4, scale: 1.1 }} className="text-muted-foreground hover:text-foreground" aria-label={s.label}>
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Navegação</h3>
          <nav className="mt-4 flex flex-col space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-base font-semibold">Contato</h3>
          <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
            <span>contato@equipe360.com.br</span>
            <span>+55 (XX) XXXXX-XXXX</span>
          </div>
        </div>
      </motion.div>

      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} EQUIPE 360 — João Paulino. Todos os direitos reservados.</p>
          <p className="text-[11px] text-muted-foreground/50">Desenvolvido por: <a href="https://www.linkedin.com/in/matheus-diasgomes-chichura/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Matheus D. Gomes Chichura</a></p>
        </div>
      </div>
    </footer>
  )
}
