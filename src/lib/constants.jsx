import {
  Heart,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
  Target,
  Zap,
  Star,
  Award,
  Flame,
  Brain,
  Megaphone,
  Crown,
  Compass,
  Gauge,
  ShieldCheck,
  Rocket,
  Lightbulb,
  Handshake,
} from "lucide-react"

/* ─── animation variants ─── */
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/* ─── PulseBeams CTA config ─── */
export const ctaBeams = [
  {
    path: "M0 120 Q200 80 429 120 Q658 160 858 120",
    connectionPoints: [],
    gradientConfig: {
      initial: { x1: "0%", x2: "5%", y1: "0%", y2: "0%" },
      animate: { x1: "100%", x2: "105%", y1: "0%", y2: "0%" },
      transition: { duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 },
    },
  },
  {
    path: "M0 200 Q150 250 300 200 Q500 140 700 180 Q800 200 858 160",
    connectionPoints: [],
    gradientConfig: {
      initial: { x1: "0%", x2: "5%", y1: "0%", y2: "0%" },
      animate: { x1: "100%", x2: "105%", y1: "0%", y2: "0%" },
      transition: { duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 },
    },
  },
  {
    path: "M0 300 Q250 260 429 310 Q600 350 858 280",
    connectionPoints: [],
    gradientConfig: {
      initial: { x1: "0%", x2: "5%", y1: "0%", y2: "0%" },
      animate: { x1: "100%", x2: "105%", y1: "0%", y2: "0%" },
      transition: { duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 },
    },
  },
  {
    path: "M0 50 Q300 10 500 70 Q700 120 858 40",
    connectionPoints: [],
    gradientConfig: {
      initial: { x1: "0%", x2: "5%", y1: "0%", y2: "0%" },
      animate: { x1: "100%", x2: "105%", y1: "0%", y2: "0%" },
      transition: { duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 0.2 },
    },
  },
  {
    path: "M0 380 Q200 340 429 400 Q650 430 858 370",
    connectionPoints: [],
    gradientConfig: {
      initial: { x1: "0%", x2: "5%", y1: "0%", y2: "0%" },
      animate: { x1: "100%", x2: "105%", y1: "0%", y2: "0%" },
      transition: { duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 },
    },
  },
]

export const ctaGradientColors = { start: "#E8772E", middle: "#2A9D5C", end: "#0B3D5C" }

/* ─── data ─── */
export const NAV_LINKS = [
  { href: "#programa", label: "O Programa" },
  { href: "#para-quem", label: "Para Quem É" },
  { href: "#jornada", label: "Conteúdo" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre João" },
]

export const PAINS = [
  { icon: <Shield className="h-6 w-6" />, text: "Colaboradores talentosos travados emocionalmente" },
  { icon: <Flame className="h-6 w-6" />, text: "Conflitos que acabam com a energia do time" },
  { icon: <Zap className="h-6 w-6" />, text: "Pessoas que fazem o mínimo necessário" },
  { icon: <TrendingUp className="h-6 w-6" />, text: "Potencial desperdiçado" },
  { icon: <Target className="h-6 w-6" />, text: "Equipes que cumprem tarefas, mas não constroem o negócio" },
]

export const ENTREPRENEUR_CHALLENGES = [
  { icon: <Crown className="h-6 w-6" />, text: "Carrega a responsabilidade do negócio" },
  { icon: <Shield className="h-6 w-6" />, text: "Assume riscos todos os dias" },
  { icon: <Handshake className="h-6 w-6" />, text: "Precisa de pessoas confiáveis" },
  { icon: <Brain className="h-6 w-6" />, text: "Não pode depender de colaboradores imaturos" },
  { icon: <Lightbulb className="h-6 w-6" />, text: "Precisa de gente que resolva, não que complique" },
]

export const PROGRAM_PILLARS_NEW = [
  { title: "Base emocional", desc: "Equilíbrio emocional para lidar com pressão e desafios." },
  { title: "Postura profissional", desc: "Atitude que gera respeito e credibilidade." },
  { title: "Performance e intraempreendedorismo", desc: "Iniciativa e execução com padrão elevado." },
  { title: "Resultado e visão de futuro", desc: "Crescimento consistente junto com a empresa." },
]

export const EQUIPE_ACRONYM = [
  {
    letter: "E",
    title: "Equilíbrio",
    subtitle: "Emocional",
    icon: <Brain className="h-10 w-10 text-brand-orange" />,
    desc: "Manter controle emocional sob pressão. Responder com maturidade aos desafios e frustrações do dia a dia."
  },
  {
    letter: "Q",
    title: "Qualidade",
    subtitle: "Na Execução",
    icon: <Star className="h-10 w-10 text-brand-orange" />,
    desc: "Entregar trabalhos bem feitos, sem necessidade de retrabalho. Atenção aos detalhes e padrão elevado."
  },
  {
    letter: "U",
    title: "União",
    subtitle: "Trabalho em Equipe",
    icon: <Users className="h-10 w-10 text-brand-orange" />,
    desc: "Fortalecer colaboração e confiança. Construir junto ao invés de trabalhar isolado ou contra o time."
  },
  {
    letter: "I",
    title: "Iniciativa",
    subtitle: "Proatividade",
    icon: <Zap className="h-10 w-10 text-brand-orange" />,
    desc: "Antecipar problemas e propor soluções. Agir sem esperar ordens, com senso de urgência e dono."
  },
  {
    letter: "P",
    title: "Performance",
    subtitle: "Resultados Consistentes",
    icon: <Gauge className="h-10 w-10 text-brand-orange" />,
    desc: "Entregar resultados de forma constante e previsível. Transformar esforço em impacto real para o negócio."
  },
  {
    letter: "E",
    title: "Excelência",
    subtitle: "Padrão Elevado",
    icon: <Award className="h-10 w-10 text-brand-orange" />,
    desc: "Buscar o melhor resultado possível. Não se contentar com o mínimo aceitável ou resultado mediano."
  },
]

export const PILLARS = [
  { icon: <Heart className="h-10 w-10 text-brand-orange" />, title: "Emoção", desc: "Maturidade emocional para lidar com pressão, frustrações e desafios do dia a dia." },
  { icon: <Users className="h-10 w-10 text-brand-orange" />, title: "Comportamento", desc: "Postura profissional que gera confiança e respeito no ambiente de trabalho." },
  { icon: <MessageCircle className="h-10 w-10 text-brand-orange" />, title: "Comunicação", desc: "Clareza para se expressar, ouvir e resolver conflitos de forma assertiva." },
  { icon: <Gauge className="h-10 w-10 text-brand-orange" />, title: "Execução", desc: "Capacidade de transformar intenção em ação, com constância e qualidade." },
  { icon: <Star className="h-10 w-10 text-brand-orange" />, title: "Resultado", desc: "Entrega consistente que impacta o time, a empresa e a carreira pessoal." },
]

export const IS_FOR = [
  "Colaboradores que assumem responsabilidade",
  "Profissionais que pensam como donos",
  "Pessoas que executam com padrão elevado",
  "Equipes que reduzem conflitos",
]

export const NOT_FOR = [
  "Quem só reclama",
  "Quem não assume responsabilidade",
  "Quem não quer evoluir",
]

export const JOURNEY = [
  { num: "01", title: "Gratidão", icon: <Heart className="h-5 w-5" />, desc: "Reconhecer o valor do que se tem e construir a partir disso." },
  { num: "02", title: "Trabalho em Equipe", icon: <Users className="h-5 w-5" />, desc: "Fortalecer a colaboração e o senso de pertencimento." },
  { num: "03", title: "Postura Profissional", icon: <Award className="h-5 w-5" />, desc: "Atitude que gera respeito e credibilidade no ambiente corporativo." },
  { num: "04", title: "Responsabilidade", icon: <Shield className="h-5 w-5" />, desc: "Assumir compromissos e entregar com excelência." },
  { num: "05", title: "Comunicação", icon: <Megaphone className="h-5 w-5" />, desc: "Expressar ideias com clareza e escutar com empatia." },
  { num: "06", title: "Atitude de Dono", icon: <Crown className="h-5 w-5" />, desc: "Cuidar do negócio como se fosse seu." },
  { num: "07", title: "Gestão Emocional", icon: <Brain className="h-5 w-5" />, desc: "Manter o equilíbrio em cenários de alta exigência." },
  { num: "08", title: "Propósito e Crescimento", icon: <Rocket className="h-5 w-5" />, desc: "Conectar trabalho, vida e evolução profissional." },
]

export const JOURNEY_STRUCTURE = [
  {
    pillar: "Base emocional",
    icon: <Heart className="h-6 w-6 text-white" />,
    color: "bg-gradient-to-br from-red-500 to-pink-600",
    items: [
      { num: "01", title: "Gratidão", icon: <Heart className="h-4 w-4" />, desc: "Reconhecer o valor do que se tem e construir a partir disso" },
      { num: "02", title: "Gestão emocional", icon: <Brain className="h-4 w-4" />, desc: "Manter equilíbrio em cenários de alta pressão e exigência" },
      { num: "03", title: "Autocontrole", icon: <Shield className="h-4 w-4" />, desc: "Dominar reações e responder com maturidade aos desafios" },
    ]
  },
  {
    pillar: "Postura profissional",
    icon: <Award className="h-6 w-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    items: [
      { num: "04", title: "Postura profissional", icon: <Award className="h-4 w-4" />, desc: "Atitude que gera respeito e credibilidade no ambiente de trabalho" },
      { num: "05", title: "Responsabilidade", icon: <Shield className="h-4 w-4" />, desc: "Assumir compromissos e entregar resultados com excelência" },
      { num: "06", title: "Comunicação assertiva", icon: <Megaphone className="h-4 w-4" />, desc: "Expressar ideias com clareza, ouvir com empatia e resolver conflitos" },
    ]
  },
  {
    pillar: "Performance e intraempreendedorismo",
    icon: <Rocket className="h-6 w-6 text-white" />,
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
    items: [
      { num: "07", title: "Mentalidade de dono", icon: <Crown className="h-4 w-4" />, desc: "Cuidar do negócio como se fosse seu, com comprometimento total" },
      { num: "08", title: "Trabalho em equipe", icon: <Users className="h-4 w-4" />, desc: "Fortalecer colaboração, confiança e senso de pertencimento" },
      { num: "09", title: "Iniciativa e proatividade", icon: <Zap className="h-4 w-4" />, desc: "Antecipar problemas, propor soluções e agir sem esperar ordens" },
    ]
  },
  {
    pillar: "Resultado e visão de futuro",
    icon: <Target className="h-6 w-6 text-white" />,
    color: "bg-gradient-to-br from-emerald-600 to-teal-600",
    items: [
      { num: "10", title: "Foco em resultado", icon: <Target className="h-4 w-4" />, desc: "Alinhar ações diárias com objetivos estratégicos mensuráveis" },
      { num: "11", title: "Propósito e crescimento", icon: <Rocket className="h-4 w-4" />, desc: "Conectar trabalho, vida pessoal e evolução profissional contínua" },
      { num: "12", title: "Visão de longo prazo", icon: <Compass className="h-4 w-4" />, desc: "Pensar estrategicamente e construir carreira sustentável" },
    ]
  },
]

export const RESULTS = [
  { icon: <Flame className="h-6 w-6" />, text: "Menos conflito" },
  { icon: <Target className="h-6 w-6" />, text: "Menos retrabalho" },
  { icon: <Shield className="h-6 w-6" />, text: "Menos risco" },
  { icon: <Gauge className="h-6 w-6" />, text: "Mais produtividade" },
  { icon: <TrendingUp className="h-6 w-6" />, text: "Mais crescimento" },
  { icon: <ShieldCheck className="h-6 w-6" />, text: "Mais estabilidade" },
]

export const SPEAKER_BADGES = [
  { icon: <MessageCircle className="h-4 w-4" />, text: "Linguagem simples" },
  { icon: <Handshake className="h-4 w-4" />, text: "Conexão real" },
  { icon: <Gauge className="h-4 w-4" />, text: "Foco em prática" },
]

/* ─── Vendas ─── */
export const TICKET_URL = "https://ticketcom.vc/br/event/equipe-360"

/* ─── WhatsApp ─── */
export const WA_PHONE = "5515997133311"
export const WA_INTEREST = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, tenho interesse no programa EQUIPE 360!")}`
export const WA_DUVIDAS = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, tenho dúvidas sobre o programa EQUIPE 360")}`
export const WA_SABER_MAIS = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, quero saber mais sobre o EQUIPE 360!")}`
