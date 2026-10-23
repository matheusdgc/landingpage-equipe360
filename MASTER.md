# EQUIPE 360: design system (MASTER)

Fonte única de verdade do visual e do movimento. Todo token do código (`src/styles/global.css`) vem daqui.
Modo: **parcial**. Logo e família petróleo + dourado preservados; nomes de tokens existentes mantidos.

## Teses (validadas em 2026-10-22)

**Visual.** Petróleo profundo como chão e dourado #F5B800 como única cor de ação, em cenas que alternam escuro e claro frio. Display em Archivo Extra Condensado 850, em caixa alta e escala enorme, porque o português é longo ("intraempreendedorismo") e só uma face condensada mantém essas palavras gigantes, inclusive no celular. Texto em Archivo normal. Respiro amplo nas cenas de impacto e densidade de tabela no investimento. Componentes retos com o raio da moldura do logo (14px), contorno de 2px, preenchimento sólido, sem sombra e sem vidro.

**Movimento.** Seco e firme: interações de 160 a 240ms em `cubic-bezier(.2,.8,.2,1)`, sem quique, sem elástico. Hover do botão é um preenchimento que varre da esquerda. Cada cena tem um comportamento próprio guiado pela rolagem (fixar e montar, virar, deslizar na horizontal, revelar), nunca o mesmo duas vezes seguidas. Proibido: animação infinita, pulsar, brilho neon, glassmorphism, manchas desfocadas e contagem regressiva falsa.

**Padrões permitidos:** a moldura arredondada do "360" como elemento recorrente (inclusive desenhando-se com a rolagem), contorno de 2px, rótulos em caixa alta com espaçamento, numerais grandes apenas para números reais (12 encontros, 24h, 12 meses, valores), recorte do João entre planos de texto no hero.

**Ação única:** "Garantir as vagas da minha equipe" → checkout Ticto. WhatsApp só como "tirar dúvidas".

## Cor

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `brand-petrol-dark` | #061B27 | chão escuro | texto #F2F5F6 16.1:1 |
| `brand-petrol` | #0B3D5C | marca, cena "360" | texto claro 10.4:1 |
| `brand-petrol-light` | #10506F | reserva | |
| `brand-gold` (= `brand-orange`) | #F5B800 | única cor de ação | petróleo sobre ele 9.8:1; como texto só no escuro (9.8:1 / 6.4:1) |
| `brand-orange-hover` | #DCA500 | reserva | |
| `brand-bone` | #EDF1F2 | chão claro | tinta #0A2433 14.1:1 |
| `brand-bone-deep` | #E2E8EA | FAQ | tinta suave 5.6:1 |
| `brand-ink` / `brand-ink-soft` | #0A2433 / #4A5C66 | texto no claro | 14.1:1 / 6.1:1 |
| `brand-paper` | #F2F5F6 | texto no escuro | 16.1:1 |
| `brand-mist` | #9FB0BA | texto suave no escuro | 7.9:1 (950), 5.1:1 (700) |
| `brand-haze` | #C5D0D6 | texto suave no petróleo | 7.3:1 |
| `brand-steel` | #7D8A92 | o lado "comum" | 4.96:1 (950), 4.76:1 (comum) |
| `brand-comum` / `-comum-card` / `-comum-edge` | #0D1F29 / #13262F / #22343D | camada "Equipe comum" da virada | |
| `brand-line-dark` / `-line-light` | 14% claro / 18% tinta | contornos | |
| `brand-frame-dim` | 28% claro | moldura do logo antes de se desenhar | |

Foco: dourado em cenas escuras, petróleo em cenas claras (`--focus` por cena). Dourado sobre osso não chega a 3:1.

## Tipo

Família única: **Archivo** (Google Fonts, `wdth 62..125`, `wght 400..900`, `display=swap`). Fallback: `"Arial Narrow", "Roboto Condensed", system-ui`.

| Passo | Tamanho | Peso / altura |
|---|---|---|
| `display` (utilitário) | ancho 62%, caixa alta, −0.005em | 850 |
| `text-display-xl` | clamp(56px, 11vw, 168px) | lh .88 |
| `text-display-l` | clamp(44px, 7.5vw, 104px) | lh .9 |
| `text-display-m` | clamp(34px, 5vw, 64px) | lh .92 |
| `text-title` | clamp(22px, 2.4vw, 30px) | 700, lh 1.15 |
| `text-body-l` | 20px | lh 1.5 |
| `text-body` | 17px | lh 1.6, `measure` 65ch |
| `text-label` | 12px, caixa alta, +0.14em | 650 |

Números alinhados usam `tabular-nums`.

## Espaço, raio, sombra

- Base 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- Cenas de impacto: 128px vertical no desktop, 80px no celular. Cenas densas: 64 / 48.
- Raios: 0 (blocos de cena), 10px `--radius-btn` (botões, cartas), 14px `--radius-frame` (moldura 360, retrato, painel de preço, popup).
- Sombras: nenhuma. Separação por cor e contorno de 2px.

## Movimento

- `--ease-firm` cubic-bezier(.2,.8,.2,1); saída: cubic-bezier(.4,0,1,1).
- `--dur-fast` 160ms (hover, foco), `--dur-ui` 240ms (menu, FAQ, popup, barra de compra).
- Cenas guiadas pela rolagem não têm duração: a posição da página é o tempo. Mapeamento sempre por função (`useRange` em `src/lib/motion.js`).
- Movimento reduzido: nenhuma cena fixa; cada cena vira um layout estático completo.

## Componentes

- `.btn-primary`: dourado, texto petróleo, varredura escura da esquerda no hover (240ms), seta desliza 4px, pressão 0.985, desabilitado em contorno aço.
- `.btn-secondary`: contorno na cor do texto da cena, preenche no hover.
- `.link`: sublinhado 1px dourado (escuro) ou petróleo (claro), engrossa para 3px no hover.
- `.flip-card`: frente aço, verso dourado em display.
- Hover só com `(hover: hover) and (pointer: fine)`.

## A jornada (8 cenas)

| Cena | Âncora | Sente | Comportamento |
|---|---|---|---|
| 1. Recusa | `#topo` | "Isso é comigo." | Hero em 4 planos: EQUIPE COMUM, João recortado, névoa, manchete |
| 2. A dor | `#dor` | Desconforto | Fixa e monta frase a frase; marcador dourado em "É emocional." |
| 3. A virada (pico) | `#resultados` | Alívio | Dores giram 180°; a camada "comum" é varrida |
| 4. O método | `#programa` | Clareza | E.Q.U.I.P.E. revelado em cortina |
| 5. 12 meses | `#jornada` | Confiança | Trilho horizontal com régua do ano |
| 6. O João | `#sobre` | Respeito | Recorte rompendo a moldura 360, paralaxe |
| 7. Para quem é | `#para-quem` | "Sou desse lado" | Fluxo simples |
| 8. Investimento | `#contato` | Decisão | Fecho no claro, painel escuro de preço |

**Assinatura:** a moldura do "360" no logo do header se desenha com a rolagem e fecha a volta no fim do investimento.
