import {
  Heart,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
  Target,
  Zap,
  Star,
  Clock,
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
  { icon: <Shield className="h-6 w-6" />, text: "Bons profissionais travados emocionalmente" },
  { icon: <Zap className="h-6 w-6" />, text: "Falta de iniciativa e responsabilidade" },
  { icon: <Flame className="h-6 w-6" />, text: "Conflitos, clima pesado e retrabalho" },
  { icon: <TrendingUp className="h-6 w-6" />, text: "Pessoas que trabalham muito, mas não evoluem" },
  { icon: <Target className="h-6 w-6" />, text: "Dificuldade em intraempreender dentro da empresa" },
]

export const PILLARS = [
  { icon: <Heart className="h-10 w-10 text-brand-orange" />, title: "Emoção", desc: "Maturidade emocional para lidar com pressão, frustrações e desafios do dia a dia." },
  { icon: <Users className="h-10 w-10 text-brand-orange" />, title: "Comportamento", desc: "Postura profissional que gera confiança e respeito no ambiente de trabalho." },
  { icon: <MessageCircle className="h-10 w-10 text-brand-orange" />, title: "Comunicação", desc: "Clareza para se expressar, ouvir e resolver conflitos de forma assertiva." },
  { icon: <Gauge className="h-10 w-10 text-brand-orange" />, title: "Execução", desc: "Capacidade de transformar intenção em ação, com constância e qualidade." },
  { icon: <Star className="h-10 w-10 text-brand-orange" />, title: "Resultado", desc: "Entrega consistente que impacta o time, a empresa e a carreira pessoal." },
]

export const IS_FOR = [
  "Pessoas que querem crescer",
  "Pessoas que querem ser reconhecidas",
  "Pessoas que pensam no futuro",
  "Pessoas dispostas a mudar postura",
]

export const NOT_FOR = [
  "Quem só reclama",
  "Quem não assume responsabilidade",
  "Quem não quer evoluir",
]

export const JOURNEY = [
  { num: "01", title: "Gratidão", icon: <Heart className="h-5 w-5" />, desc: "Reconhecer o valor do que se tem e construir a partir disso." },
  { num: "02", title: "Trabalho em Equipe", icon: <Users className="h-5 w-5" />, desc: "Fortalecer a colaboração e o senso de pertencimento." },
  { num: "03", title: "Constância", icon: <Clock className="h-5 w-5" />, desc: "Desenvolver disciplina e regularidade nos resultados." },
  { num: "04", title: "Postura Profissional", icon: <Award className="h-5 w-5" />, desc: "Atitude que gera respeito e credibilidade no ambiente corporativo." },
  { num: "05", title: "Responsabilidade", icon: <Shield className="h-5 w-5" />, desc: "Assumir compromissos e entregar com excelência." },
  { num: "06", title: "Comunicação", icon: <Megaphone className="h-5 w-5" />, desc: "Expressar ideias com clareza e escutar com empatia." },
  { num: "07", title: "Atitude de Dono", icon: <Crown className="h-5 w-5" />, desc: "Cuidar do negócio como se fosse seu." },
  { num: "08", title: "Tomada de Decisão", icon: <Compass className="h-5 w-5" />, desc: "Pensar antes de agir e escolher com sabedoria." },
  { num: "09", title: "Gestão Emocional sob Pressão", icon: <Brain className="h-5 w-5" />, desc: "Manter o equilíbrio em cenários de alta exigência." },
  { num: "10", title: "Execução com Qualidade e Segurança", icon: <ShieldCheck className="h-5 w-5" />, desc: "Entregar com padrão e atenção ao HSE-IT." },
  { num: "11", title: "Crescimento Profissional", icon: <Rocket className="h-5 w-5" />, desc: "Planejar e trilhar uma carreira com propósito." },
  { num: "12", title: "Propósito e Visão de Vida", icon: <Lightbulb className="h-5 w-5" />, desc: "Conectar trabalho, vida e evolução pessoal." },
]

export const RESULTS = [
  { icon: <MessageCircle className="h-6 w-6" />, text: "Melhora imediata de postura e comunicação" },
  { icon: <Target className="h-6 w-6" />, text: "Aumento da responsabilidade individual" },
  { icon: <Rocket className="h-6 w-6" />, text: "Mais iniciativa e senso de dono" },
  { icon: <Handshake className="h-6 w-6" />, text: "Redução de conflitos e ruídos" },
  { icon: <TrendingUp className="h-6 w-6" />, text: "Melhores resultados no dia a dia" },
  { icon: <ShieldCheck className="h-6 w-6" />, text: "Fortalecimento da cultura e da segurança (HSE-IT como consequência)" },
]

export const SPEAKER_BADGES = [
  { icon: <MessageCircle className="h-4 w-4" />, text: "Linguagem simples" },
  { icon: <Handshake className="h-4 w-4" />, text: "Conexão real com CLT" },
  { icon: <Gauge className="h-4 w-4" />, text: "Foco em prática, não discurso" },
]
