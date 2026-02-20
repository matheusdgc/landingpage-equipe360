import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const handleMouseLeave = useCallback((e) => {
    if (hasShown) return
    if (e.clientY <= 5) {
      setIsVisible(true)
      setHasShown(true)
    }
  }, [hasShown])

  useEffect(() => {
    const delay = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 8000)

    return () => {
      clearTimeout(delay)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseLeave])

  const handleClose = () => setIsVisible(false)

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -30 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto">
              {/* Top bar dourada */}
              <div className="h-2 w-full bg-brand-orange" />

              {/* Botão fechar */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="px-7 pt-7 pb-8">
                {/* Pergunta de retenção */}
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                  Espera um segundo...
                </p>

                <h2 className="text-2xl sm:text-3xl font-black text-brand-petrol leading-tight mb-3">
                  Sua equipe pode chegar{" "}
                  <span className="text-brand-orange">mais longe</span> do que você imagina.
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  Antes de sair, deixa eu te perguntar: o que está impedindo sua equipe de performar no nível que você espera?
                </p>

                {/* CTA principal */}
                <a
                  href="https://wa.me/5515997133311?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20EQUIPE%20360!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-brand-petrol font-black py-4 transition-colors shadow-lg shadow-brand-orange/25 text-base mb-3"
                  onClick={handleClose}
                >
                  Quero saber como resolver isso
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Dismiss link */}
                <button
                  onClick={handleClose}
                  className="w-full text-center text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors py-1"
                >
                  Não, prefiro continuar do jeito que está
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
