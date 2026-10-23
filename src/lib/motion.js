import { useEffect, useState } from "react"
import { useReducedMotion, useTransform } from "framer-motion"

export const clamp01 = (v) => Math.min(1, Math.max(0, v))
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
export const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

/*
 * Mapeia um trecho do progresso de rolagem para um valor, sempre por função.
 * A forma em array do useTransform pode ser acelerada por ScrollTimeline nativo,
 * e nessa via a opacidade de cenas fixadas deixou de atualizar.
 */
export function useRange(mv, [a, b], [from, to], { unit = "", ease } = {}) {
  return useTransform(mv, (v) => {
    let t = clamp01((v - a) / (b - a))
    if (ease) t = ease(t)
    const n = from + (to - from) * t
    return unit ? `${n}${unit}` : n
  })
}

/* Curva única do projeto (MASTER.md: --ease-firm) */
export const EASE_FIRM = [0.2, 0.8, 0.2, 1]
export const DUR_FAST = 0.16
export const DUR_UI = 0.24

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  )
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [query])
  return matches
}

export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)")

/* Efeitos ligados à rolagem só existem quando o movimento é permitido */
export function useScrollScenes() {
  const reduce = useReducedMotion()
  return !reduce
}

/*
 * Como as cenas fixadas se comportam nesta tela:
 * "full"    → desktop e tablet: cena fixada com todo o espaço de rolagem.
 * "compact" → celular em pé: menos rolagem por cena (o polegar cansa) e trilhos nativos.
 * "static"  → movimento reduzido ou tela baixa (celular deitado, até 560px de altura):
 *             nenhuma cena fixa, cada uma vira um layout estático completo.
 */
export function useSceneMode() {
  const reduce = useReducedMotion()
  const short = useMediaQuery("(max-height: 560px)")
  const compact = useMediaQuery("(max-width: 767px)")
  if (reduce || short) return "static"
  return compact ? "compact" : "full"
}
