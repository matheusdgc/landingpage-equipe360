import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { WA_SABER_MAIS } from "@/lib/constants.jsx"
import Logo from "@/components/Logo"
import { DUR_UI, EASE_FIRM } from "@/lib/motion"

const EASE_EXIT = [0.4, 0, 1, 1]

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const hasShownRef = useRef(false)
  const dialogRef = useRef(null)
  const lastFocusRef = useRef(null)

  const showPopup = useCallback(() => {
    if (hasShownRef.current) return
    hasShownRef.current = true
    lastFocusRef.current = document.activeElement
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback((e) => {
    if (e.clientY <= 5) showPopup()
  }, [showPopup])

  useEffect(() => {
    const isMobile = window.innerWidth < 1024

    if (isMobile) {
      // Mobile: mostrar após 35s de navegação
      const timer = setTimeout(showPopup, 35000)
      return () => clearTimeout(timer)
    }

    // Desktop: mostrar ao mover mouse para fora da janela
    const delay = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 8000)

    return () => {
      clearTimeout(delay)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showPopup, handleMouseLeave])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    lastFocusRef.current?.focus?.()
  }, [])

  // Foco entra no diálogo, Esc fecha, Tab fica preso dentro dele
  useEffect(() => {
    if (!isVisible) return
    const dialog = dialogRef.current
    dialog?.querySelector("a, button")?.focus()
    const onKey = (e) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "Tab" && dialog) {
        const items = [...dialog.querySelectorAll("a, button")]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [isVisible, handleClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            key="exit-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: DUR_UI, ease: EASE_FIRM } }}
            exit={{ opacity: 0, transition: { duration: 0.16, ease: EASE_EXIT } }}
            className="fixed inset-0 z-[100] bg-brand-petrol-dark/85"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              key="exit-dialog"
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="exit-title"
              aria-describedby="exit-desc"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: DUR_UI, ease: EASE_FIRM } }}
              exit={{ opacity: 0, transition: { duration: 0.16, ease: EASE_EXIT } }}
              className="scene-light pointer-events-auto relative w-full max-w-[460px] rounded-[14px] border-[3px] border-brand-gold p-7 sm:p-9"
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-[10px] text-brand-ink-soft transition-colors duration-[160ms] hover:text-brand-ink"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              <Logo tone="light" className="mb-5 h-7" />
              <p className="text-label text-brand-ink-soft">Espera um segundo...</p>
              <h2 id="exit-title" className="display mt-3 text-[clamp(36px,6vw,48px)] leading-[0.92]">
                Sua equipe pode chegar mais longe do que você imagina.
              </h2>
              <p id="exit-desc" className="text-body mt-4 text-brand-ink-soft">
                Antes de sair, deixa eu te perguntar: o que está impedindo sua equipe de performar no nível que você espera?
              </p>

              <a href={WA_SABER_MAIS} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full" onClick={handleClose}>
                Quero saber como resolver isso <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 min-h-11 w-full text-center text-[14px] text-brand-ink-soft underline-offset-4 hover:underline"
              >
                Não, prefiro continuar do jeito que está
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
