/* ─── Ação única da página (MASTER.md: um rótulo, em todo lugar) ─── */
export const CTA_LABEL = "Garantir as vagas da minha equipe"

/* ─── Navegação (rótulos e âncoras preservados) ─── */
export const NAV_LINKS = [
  { href: "#programa", label: "O Programa" },
  { href: "#para-quem", label: "Para Quem É" },
  { href: "#jornada", label: "Conteúdo" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre João" },
]

/* ─── Cena 2: a dor ─── */
export const DOR_LINES = [
  "Você pode investir em tecnologia.",
  "Pode melhorar processos.",
  "Pode contratar consultorias técnicas.",
]

/* ─── Cena 3: a virada (frente = dor, verso = resultado) ─── */
export const VIRADA = [
  { pain: "Colaboradores talentosos travados emocionalmente", result: "Mais estabilidade" },
  { pain: "Conflitos que acabam com a energia do time", result: "Menos conflito" },
  { pain: "Pessoas que fazem o mínimo necessário", result: "Mais produtividade" },
  { pain: "Potencial desperdiçado", result: "Mais crescimento" },
  { pain: "Equipes que cumprem tarefas, mas não constroem o negócio", result: "Menos retrabalho. Menos risco." },
]

/* ─── Cena 4: o método ─── */
export const EQUIPE_ACRONYM = [
  { letter: "E", title: "Equilíbrio", subtitle: "Emocional", desc: "Manter controle emocional sob pressão. Responder com maturidade aos desafios e frustrações do dia a dia." },
  { letter: "Q", title: "Qualidade", subtitle: "Na execução", desc: "Entregar trabalhos bem feitos, sem necessidade de retrabalho. Atenção aos detalhes e padrão elevado." },
  { letter: "U", title: "União", subtitle: "Trabalho em equipe", desc: "Fortalecer colaboração e confiança. Construir junto ao invés de trabalhar isolado ou contra o time." },
  { letter: "I", title: "Iniciativa", subtitle: "Proatividade", desc: "Antecipar problemas e propor soluções. Agir sem esperar ordens, com senso de urgência e dono." },
  { letter: "P", title: "Performance", subtitle: "Resultados consistentes", desc: "Entregar resultados de forma constante e previsível. Transformar esforço em impacto real para o negócio." },
  { letter: "E", title: "Excelência", subtitle: "Padrão elevado", desc: "Buscar o melhor resultado possível. Não se contentar com o mínimo aceitável ou resultado mediano." },
]

/* ─── Cena 5: os 8 encontros semanais ─── */
export const JOURNEY = [
  { num: "01", title: "Gratidão", desc: "Reconhecer o valor do que se tem e construir a partir disso." },
  { num: "02", title: "Trabalho em Equipe", desc: "Fortalecer a colaboração e o senso de pertencimento." },
  { num: "03", title: "Postura Profissional", desc: "Atitude que gera respeito e credibilidade no ambiente corporativo." },
  { num: "04", title: "Responsabilidade", desc: "Assumir compromissos e entregar com excelência." },
  { num: "05", title: "Comunicação", desc: "Expressar ideias com clareza e escutar com empatia." },
  { num: "06", title: "Atitude de Dono", desc: "Cuidar do negócio como se fosse seu." },
  { num: "07", title: "Gestão Emocional", desc: "Manter o equilíbrio em cenários de alta exigência." },
  { num: "08", title: "Propósito e Crescimento", desc: "Conectar trabalho, vida e evolução profissional." },
]

/* ─── Cena 6: o João ─── */
export const SPEAKER = {
  name: "João Paulino",
  title: "Desenvolvimento Comportamental Aplicado à Realidade Empresarial",
  description:
    "João Paulino trabalha com desenvolvimento comportamental aplicado à realidade de colaboradores, dentro da rotina real das empresas.",
  methodology:
    "EQUIPE 360 é estruturado em 4 pilares: Base emocional, Postura profissional, Performance e intraempreendedorismo, Resultado e visão de futuro. Com encontros semanais que constroem maturidade de forma progressiva e consistente.",
  philosophy: "Porque crescimento não acontece em um evento. Acontece com repetição, consciência e prática.",
  badges: ["Linguagem simples", "Conexão real", "Foco em prática"],
}

/* ─── Cena 7: para quem é ─── */
export const IS_FOR = [
  { title: "Colaboradores que assumem responsabilidade", desc: "Não esperam ordens. Identificam problemas e resolvem com maturidade e iniciativa." },
  { title: "Profissionais que pensam como donos", desc: "Cuidam do negócio como se fosse seu. Agem com compromisso real, não apenas cumprindo tarefas." },
  { title: "Pessoas que executam com padrão elevado", desc: "Entregam resultados consistentes, com qualidade e sem necessidade de retrabalho." },
  { title: "Equipes que reduzem conflitos", desc: "Fortalecem o time ao invés de acabar com a energia. Colaboram, não complicam." },
]

export const NOT_FOR = ["Quem só reclama", "Quem não assume responsabilidade", "Quem não quer evoluir"]

/* ─── Cena 8: investimento ─── */
export const DELIVERABLES = [
  { figure: "16h", title: "de palestras", desc: "8 encontros presenciais de 2h cada" },
  { figure: "8", title: "dinâmicas vivenciais", desc: "Atividades práticas a cada encontro" },
  { figure: "12", title: "meses de acesso ao conteúdo", desc: "Material completo disponível online" },
  { figure: "1", title: "grupo exclusivo de desenvolvimento", desc: "Comunidade de crescimento contínuo" },
]

export const PRICE_COMPARISON = [
  { label: "Palestras esporádicas", value: "R$ 100,00" },
  { label: "Conteúdo digital para desenvolvimento", value: "R$ 100,00" },
  { label: "Dinâmicas vivenciais na empresa", value: "R$ 200,00" },
  { label: "Comunidade de desenvolvimento", value: "R$ 250,00" },
]

export const PRICING = {
  people: "5 colaboradores",
  yearlyTotal: "R$ 10.000,00",
  installments: "12x R$ 387,84",
  upfront: "R$ 3.750",
  extraPerson: "+ R$ 62,50/mês",
  payment: ["Pagamento à vista com desconto", "Parcelamento em até 12x"],
}

/* ─── FAQ ─── */
export const FAQ_ITEMS = [
  {
    question: "Como funciona o programa EQUIPE 360?",
    answer:
      "O EQUIPE 360 é um programa de desenvolvimento comportamental com 8 encontros semanais, presenciais, de 2 horas cada. Cada encontro combina palestra e dinâmica vivencial, trabalhando os 4 pilares do desenvolvimento: Base emocional, Postura profissional, Performance e intraempreendedorismo, Resultado e visão de futuro.",
  },
  {
    question: "Quantos colaboradores podem participar?",
    answer: "O programa inclui até 5 colaboradores. Colaboradores adicionais podem ser incluídos por R$ 62,50/mês por pessoa.",
  },
  {
    question: "Qual a duração do programa?",
    answer:
      "O programa tem duração de 8 semanas, com um encontro presencial semanal de 2 horas, totalizando 16 horas de conteúdo presencial.",
  },
  {
    question: "Os encontros são presenciais ou online?",
    answer:
      "Todos os 8 encontros são presenciais na sua empresa. Acreditamos que o desenvolvimento comportamental acontece através da vivência prática e da interação real entre as pessoas.",
  },
  {
    question: "Qual o investimento?",
    answer:
      "O investimento para até 5 colaboradores é de 12x R$ 387,84 (parcelado) ou R$ 3.750 à vista com desconto. Cada colaborador adicional custa R$ 62,50/mês.",
  },
  {
    question: "O que está incluso no programa?",
    answer:
      "Está incluso: 16 horas de palestras presenciais (8 encontros de 2h), 8 dinâmicas vivenciais práticas, acesso ao conteúdo digital por 12 meses e participação em grupo exclusivo de desenvolvimento comportamental.",
  },
  {
    question: "Qual a diferença entre EQUIPE 360 e palestras pontuais?",
    answer:
      "Palestras pontuais geram inspiração momentânea. O EQUIPE 360 é um programa progressivo de 8 encontros que constrói maturidade comportamental através da repetição, prática e acompanhamento contínuo. O resultado é transformação real, não apenas motivação passageira.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "Aceitamos pagamento à vista com desconto ou parcelamento em até 12x. Entre em contato para mais detalhes sobre as condições de pagamento.",
  },
  {
    question: "Posso cancelar o programa?",
    answer: "Entre em contato para conhecer as condições contratuais e políticas de cancelamento do programa.",
  },
  {
    question: "O programa é adequado para qualquer tipo de empresa?",
    answer:
      "O EQUIPE 360 é ideal para empresas que buscam elevar o padrão do time, formar colaboradores preparados para crescer e construir uma cultura organizacional sólida. É mais adequado para empreendedores que entendem que crescimento acontece através do desenvolvimento das pessoas.",
  },
]

/* ─── Vendas ─── */
export const TICKET_URL = "https://payment.ticto.app/O6614913F?event=PageView&product_id=106081&offer_code=O6614913F%C2%A4cy=brl&_gl=&fbc=&fbp=&fbclid=&payment_method=credit_card&visitor_id=&fingerprint="

/* ─── Contato ─── */
export const INSTAGRAM_URL = "https://www.instagram.com/soujoaopaulino"
export const EMAIL = "equipe360@joaopaulino.com.br"

/* ─── WhatsApp ─── */
export const WA_PHONE = "5515997133311"
export const WA_INTEREST = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, tenho interesse no programa EQUIPE 360!")}`
export const WA_DUVIDAS = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, tenho dúvidas sobre o programa EQUIPE 360")}`
export const WA_SABER_MAIS = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá, quero saber mais sobre o EQUIPE 360!")}`
