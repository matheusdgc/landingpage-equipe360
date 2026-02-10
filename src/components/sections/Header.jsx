import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"
import { NAV_LINKS, staggerContainer, itemFadeIn } from "@/lib/constants.jsx"

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
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center" onClick={closeMenu}>
            <Logo />
          </a>

          <nav className="hidden lg:flex gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-brand-orange">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="rounded-3xl bg-brand-orange hover:bg-brand-orange-hover text-white">
              <a href="#contato">Solicitar apresentação</a>
            </Button>
          </div>

          <button className="flex lg:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
              <Button asChild className="w-full rounded-3xl bg-brand-orange hover:bg-brand-orange-hover text-white">
                <a href="#contato" onClick={closeMenu}>Solicitar apresentação</a>
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </>
  )
}
