import { motion } from "framer-motion"
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
import logoImg from "@/public/images/logo-2.png"
import { fadeIn, NAV_LINKS } from "@/lib/constants.jsx"

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="container mx-auto grid gap-6 sm:gap-8 px-4 py-8 sm:py-12 md:px-6 grid-cols-1 sm:grid-cols-3 text-center sm:text-left">
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <img src={logoImg} alt="EQUIPE 360" className="h-12 sm:h-14 w-auto" draggable={false} loading="lazy" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            João Paulino — Palestrante e Facilitador de Desenvolvimento Comportamental. Ajudando colaboradores comuns a se tornarem profissionais extraordinários.
          </p>
          <div className="flex gap-3">
            <motion.a href="https://www.instagram.com/soujoaopaulino" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </motion.a>
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
            <span>joao@comautomacao.com</span>
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
