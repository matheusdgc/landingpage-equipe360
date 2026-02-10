import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import DorRealSection from "@/components/sections/DorRealSection"
import ProgramaSection from "@/components/sections/ProgramaSection"
import ParaQuemSection from "@/components/sections/ParaQuemSection"
import JornadaSection from "@/components/sections/JornadaSection"
import ResultadosSection from "@/components/sections/ResultadosSection"
import SobreSection from "@/components/sections/SobreSection"
import CtaFinalSection from "@/components/sections/CtaFinalSection"
import ContatoSection from "@/components/sections/ContatoSection"
import Footer from "@/components/sections/Footer"

export default function Equipe360Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DorRealSection />
        <ProgramaSection />
        <ParaQuemSection />
        <JornadaSection />
        <ResultadosSection />
        <SobreSection />
        <CtaFinalSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  )
}
