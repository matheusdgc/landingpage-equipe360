import Logo from "@/components/Logo"
import { NAV_LINKS, INSTAGRAM_URL, EMAIL } from "@/lib/constants.jsx"

export default function Footer() {
  return (
    <footer className="scene-dark pb-[calc(104px+env(safe-area-inset-bottom,0px))] pt-16 lg:pb-[calc(24px+env(safe-area-inset-bottom,0px))] lg:pt-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="flex flex-col gap-5">
          <Logo className="h-10" />
          <p className="text-body measure text-brand-mist">
            João Paulino, palestrante e facilitador de desenvolvimento comportamental. Ajudando colaboradores comuns a se tornarem profissionais extraordinários.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <h3 className="text-label text-brand-mist">Navegação</h3>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="w-fit font-semibold text-brand-paper underline-offset-4 decoration-brand-gold decoration-2 hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-label text-brand-mist">Contato</h3>
          <a href={`mailto:${EMAIL}`} className="link w-fit break-all text-brand-paper">{EMAIL}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link w-fit text-brand-paper">
            Instagram @soujoaopaulino
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1280px] flex-col gap-2 border-t-2 border-brand-line-dark px-5 pt-6 text-[13px] text-brand-mist sm:flex-row sm:justify-between lg:px-10">
        <p>&copy; {new Date().getFullYear()} EQUIPE 360, João Paulino. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por:{" "}
          <a href="https://www.linkedin.com/in/matheus-diasgomes-chichura/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-paper hover:underline">
            Matheus D. Gomes Chichura
          </a>
        </p>
      </div>
    </footer>
  )
}
