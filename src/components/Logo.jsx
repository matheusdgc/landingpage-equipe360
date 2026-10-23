import { cn } from "@/lib/utils"
import logoLightGold from "@/public/images/logo-light-gold.png"

/* Logo para fundo escuro: "equipe" em branco e o "360" no bloco amarelo (derivado do logo-2.png) */
export default function Logo({ className }) {
  return (
    <img
      src={logoLightGold}
      alt="EQUIPE 360"
      width="1807"
      height="526"
      className={cn("block w-auto", className)}
      draggable={false}
    />
  )
}
