import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "@/components/Logo"
import { NAV_LINKS, TICKET_URL, CTA_LABEL } from "@/lib/constants.jsx"
import { EASE_FIRM, DUR_UI } from "@/lib/motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const endRef = useRef(1)
  const { scrollY } = useScroll()

  // A volta do "360" fecha quando o fim do investimento chega à base da tela
  useEffect(() => {
    const measure = () => {
      const contato = document.getElementById("contato")
      const end = contato
        ? contato.offsetTop + contato.offsetHeight - window.innerHeight
        : document.documentElement.scrollHeight - window.innerHeight
      endRef.current = Math.max(1, end)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  const progress = useTransform(scrollY, (v) => Math.min(1, Math.max(0, v / endRef.current)))

  useMotionValueEvent(scrollY, "change", (v) => {
    const isSolid = v > 24
    if (isSolid !== solid) setSolid(isSolid)
    // Barra de compra no celular: depois do hero, some quando o investimento está na tela
    const contato = document.getElementById("contato")
    const inContato = contato
      ? v + window.innerHeight > contato.offsetTop + 120 && v < contato.offsetTop + contato.offsetHeight
      : false
    const bar = v > window.innerHeight * 0.9 && !inContato
    if (bar !== showBar) setShowBar(bar)
  })

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={`scene-dark fixed inset-x-0 top-0 z-50 border-b transition-colors duration-[240ms] ease-[cubic-bezier(.2,.8,.2,1)] ${
          solid ? "border-brand-line-dark !bg-brand-petrol-dark" : "border-transparent !bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6"
          style={{
            paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
            paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
          }}
        >
          <a href="#topo" onClick={closeMenu} className="block h-8 rounded-[4px] sm:h-9" aria-label="EQUIPE 360, voltar ao início">
            <Logo progress={progress} className="h-full" />
          </a>

          <nav aria-label="Seções" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-brand-paper/85 underline-offset-[6px] decoration-brand-gold decoration-2 transition-colors duration-[160ms] hover:text-brand-paper hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !min-h-11 !px-4 !py-2 !text-[15px] lg:inline-flex"
            >
              {CTA_LABEL}
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-brand-line-dark text-brand-paper lg:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu do celular */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu-mobile"
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: DUR_UI, ease: EASE_FIRM } }}
            exit={{ opacity: 0, transition: { duration: 0.16, ease: [0.4, 0, 1, 1] } }}
            className="scene-dark fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto pb-8 pt-24 lg:hidden"
            style={{
              paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
              paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
            }}
          >
            <nav aria-label="Seções" className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: DUR_UI, ease: EASE_FIRM, delay: 0.04 * i } }}
                  className="display border-b-2 border-brand-line-dark py-4 text-[44px] leading-none text-brand-paper"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="btn-primary mt-10 w-full">
              {CTA_LABEL} <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barra de compra no celular, na zona do polegar */}
      <AnimatePresence>
        {showBar && !isMenuOpen && (
          <motion.div
            key="buy-bar"
            initial={{ y: "110%" }}
            animate={{ y: 0, transition: { duration: DUR_UI, ease: EASE_FIRM } }}
            exit={{ y: "110%", transition: { duration: 0.16, ease: [0.4, 0, 1, 1] } }}
            className="scene-dark fixed inset-x-0 bottom-0 z-40 border-t-2 border-brand-line-dark lg:hidden"
            style={{
              paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
              paddingTop: "12px",
              paddingLeft: "max(16px, env(safe-area-inset-left, 0px))",
              paddingRight: "max(16px, env(safe-area-inset-right, 0px))",
            }}
          >
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              {CTA_LABEL} <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
