import Header from "@/components/sections/Header"
import ExitIntentPopup from "@/components/ExitIntentPopup"
import HeroSection from "@/components/sections/HeroSection"
import DorRealSection from "@/components/sections/DorRealSection"
import ViradaSection from "@/components/sections/ViradaSection"
import ProgramaSection from "@/components/sections/ProgramaSection"
import JornadaSection from "@/components/sections/JornadaSection"
import SobreSection from "@/components/sections/SobreSection"
import ParaQuemSection from "@/components/sections/ParaQuemSection"
import CtaFinalSection from "@/components/sections/CtaFinalSection"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"

/* A jornada em 8 cenas (MASTER.md): recusa, dor, virada, método, 12 meses, João, para quem é, investimento */
export default function Equipe360Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="btn-primary fixed left-4 top-4 z-[60] -translate-y-24 focus-visible:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <DorRealSection />
        <ViradaSection />
        <ProgramaSection />
        <JornadaSection />
        <SobreSection />
        <ParaQuemSection />
        <CtaFinalSection />
        <FAQSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </>
  )
}
