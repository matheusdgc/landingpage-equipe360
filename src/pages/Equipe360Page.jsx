import Header from "@/components/sections/Header"
import ExitIntentPopup from "@/components/ExitIntentPopup"
import HeroSection from "@/components/sections/HeroSection"
import DorRealSection from "@/components/sections/DorRealSection"
// import EmpatiaSection from "@/components/sections/EmpatiaSection"
import ProgramaSection from "@/components/sections/ProgramaSection"
import ParaQuemSection from "@/components/sections/ParaQuemSection"
import JornadaSection from "@/components/sections/JornadaSection"
import ResultadosSection from "@/components/sections/ResultadosSection"
import SobreSection from "@/components/sections/SobreSection"
import FAQSection from "@/components/sections/FAQSection"
import CtaFinalSection from "@/components/sections/CtaFinalSection"
import Footer from "@/components/sections/Footer"

export default function Equipe360Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DorRealSection />
        {/* <EmpatiaSection /> */}
        <ParaQuemSection />
        <ProgramaSection />
        <JornadaSection />
        <ResultadosSection />
        <SobreSection />
        <CtaFinalSection />
        <FAQSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  )
}
