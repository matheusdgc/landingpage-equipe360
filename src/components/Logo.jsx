import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import logoLight from "@/public/images/logo-light.png"

/*
 * Logo claro com a moldura do "360" desenhada em SVG, alinhada ao PNG (1820x496).
 * Assinatura do site: com `progress` (MotionValue 0..1) a moldura se desenha
 * conforme a rolagem e fecha a volta no checkout. Sem `progress`, fica completa.
 */
const FRAME = { x: 1134.5, y: 52.5, width: 643, height: 384, rx: 42 }

export default function Logo({ progress, className }) {
  return (
    <span className={cn("relative inline-block w-fit", className)}>
      <img
        src={logoLight}
        alt="EQUIPE 360"
        width="1820"
        height="496"
        className="block h-full w-auto"
        draggable={false}
      />
      <svg viewBox="0 0 1820 496" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <rect {...FRAME} fill="none" stroke="var(--color-brand-frame-dim)" strokeWidth="9" />
        {progress ? (
          <motion.rect {...FRAME} fill="none" stroke="var(--color-brand-gold)" strokeWidth="9" style={{ pathLength: progress }} />
        ) : (
          <rect {...FRAME} fill="none" stroke="var(--color-brand-gold)" strokeWidth="9" />
        )}
      </svg>
    </span>
  )
}
