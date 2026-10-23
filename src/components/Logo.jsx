import { cn } from "@/lib/utils"
import logoLightGold from "@/public/images/logo-light-gold.png"
import logoInkGold from "@/public/images/logo-ink-gold.png"

/*
 * Logo oficial com o "360" no bloco amarelo, recortado rente ao desenho (1747x396).
 * tone="dark"  → para fundo escuro: "equipe" em branco.
 * tone="light" → para fundo claro: "equipe" em grafite (logo-2.png original).
 * A altura vem de className; a largura acompanha sem distorcer.
 */
export default function Logo({ tone = "dark", className, alt = "EQUIPE 360" }) {
  return (
    <img
      src={tone === "light" ? logoInkGold : logoLightGold}
      alt={alt}
      width="1747"
      height="396"
      className={cn("block h-8 w-auto max-w-none shrink-0 self-start", className)}
      draggable={false}
    />
  )
}
