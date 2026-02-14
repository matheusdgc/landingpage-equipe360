import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Rocket } from "lucide-react"
import Logo from "@/components/Logo"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { NAV_LINKS, staggerContainer, itemFadeIn } from "@/lib/constants.jsx"

const CHECKOUT_URL = "#"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen((v) => !v)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center" onClick={closeMenu}>
            <Logo />
          </a>

          <nav className="hidden lg:flex gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-brand-orange whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton
                text="Quero levar para minha empresa"
                className="border-brand-orange/30 bg-brand-orange text-white text-xs xl:text-sm py-2 px-4 xl:px-6"
              />
            </a>
          </div>

          <button className="flex lg:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background lg:hidden">
            <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
              <a href="#" className="flex items-center" onClick={closeMenu}>
                <Logo />
              </a>
              <button onClick={toggleMenu} aria-label="Fechar menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto grid gap-2 px-4 pb-8 pt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={i} variants={itemFadeIn}>
                  <a href={link.href} className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium hover:bg-accent" onClick={closeMenu}>
                    {link.label}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
              <motion.div variants={itemFadeIn} className="pt-4">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-3xl bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 transition-colors"
                >
                  <Rocket className="h-4 w-4" />
                  Quero levar para minha empresa
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mobile checkout FAB */}
      <motion.a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: scrollY > 400 ? 1 : 0, opacity: scrollY > 400 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 rounded-full bg-brand-orange text-white px-5 py-3.5 shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-hover transition-colors font-semibold text-sm"
        aria-label="Ir para checkout"
      >
        <Rocket className="h-5 w-5" />
        <span className="hidden sm:inline">Comprar agora</span>
      </motion.a>
    </>
  )
}
