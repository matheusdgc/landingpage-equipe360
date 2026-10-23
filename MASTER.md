# EQUIPE 360: design system (MASTER)

Fonte única de verdade do visual e do movimento. Todo token do código (`src/styles/global.css`) vem daqui.
Modo: **parcial**. Logo e família petróleo + dourado preservados; nomes de tokens existentes mantidos.

## Teses (validadas em 2026-10-22)

**Visual.** Petróleo profundo como chão e dourado #F5B800 como única cor de ação, em cenas que alternam escuro e claro frio. Display em Bricolage Grotesque 800, em caixa alta e baixa, largura 85% e escala enorme: firme como manchete, mas com desenho humano (autoridade com conexão), e o eixo de largura mantém as palavras longas do português grandes no celular. Texto em Bricolage Grotesque 400. (Trocada da Archivo Extra Condensado em 2026-10-23, após comparação de 4 opções.) Respiro amplo nas cenas de impacto e densidade de tabela no investimento. Componentes retos com o raio da moldura do logo (14px), contorno de 2px, preenchimento sólido, sem sombra e sem vidro.

**Movimento.** Seco e firme: interações de 160 a 240ms em `cubic-bezier(.2,.8,.2,1)`, sem quique, sem elástico. Hover do botão é um preenchimento que varre da esquerda. Cada cena tem um comportamento próprio guiado pela rolagem (fixar e montar, virar, deslizar na horizontal, revelar), nunca o mesmo duas vezes seguidas. Proibido: animação infinita, pulsar, brilho neon, glassmorphism, manchas desfocadas e contagem regressiva falsa.

**Padrões permitidos:** o bloco arredondado do "360" como elemento recorrente, contorno de 2px, rótulos em caixa alta com espaçamento, numerais grandes apenas para números reais (8 encontros, 16h, 12 meses de acesso, valores), recorte do João entre planos de texto no hero.

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

Foco: dourado em cenas escuras, petróleo em cenas claras (`--focus` por cena). Dourado sobre osso não chega a 3:1.

## Tipo

Família única: **Bricolage Grotesque** (Google Fonts, `opsz 12..96`, `wdth 75..100`, `wght 400..800`, `display=swap`). Fallback: `"Segoe UI", Roboto, system-ui`.

| Passo | Tamanho | Peso / altura |
|---|---|---|
| `display` (utilitário) | `wdth` 85, `opsz` 96, −0.012em, caixa alta e baixa | 800 |
| `text-display-xl` | clamp(52px, 10vw, 156px) | lh .95 |
| `text-display-l` | clamp(40px, 7vw, 96px) | lh .96 |
| `text-display-m` | clamp(32px, 4.6vw, 60px) | lh 1 |
| `text-title` | clamp(22px, 2.4vw, 30px) | 700, lh 1.15 |
| `text-body-l` | 20px | lh 1.5 |
| `text-body` | 17px | lh 1.6, `measure` 65ch |
| `text-label` | 12px, caixa alta, +0.14em | 650 |

Números alinhados usam `tabular-nums`.

## Espaço, raio, sombra

- Base 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- Cenas de impacto: 128px vertical no desktop, 80px no celular. Cenas densas: 64 / 48.
- Raios: 0 (blocos de cena), 10px `--radius-btn` (botões, cartas), 14px `--radius-frame` (moldura 360, bloco do retrato, painel de preço, popup).
- Sombras: nenhuma. Separação por cor e contorno de 2px.

## Movimento

- `--ease-firm` cubic-bezier(.2,.8,.2,1); saída: cubic-bezier(.4,0,1,1).
- `--dur-fast` 160ms (hover, foco), `--dur-ui` 240ms (menu, FAQ, popup, barra de compra).
- Cenas guiadas pela rolagem não têm duração: a posição da página é o tempo. Mapeamento sempre por função (`useRange` em `src/lib/motion.js`).
- Modos de cena (`useSceneMode` em `src/lib/motion.js`):
  - `full` (largura ≥ 768px): cenas fixadas com todo o espaço de rolagem (hero 140svh, dor 280svh, virada 360svh, trilho dos encontros pela rolagem).
  - `compact` (celular em pé, < 768px): hero sem fixar (os planos se separam enquanto ele sai da tela), dor 175svh, virada 220svh, encontros em carrossel nativo com o dedo. Página ~16 telas em vez de ~22.
  - `static` (movimento reduzido ou altura ≤ 560px, celular deitado): nenhuma cena fixa; cada cena vira um layout estático completo. A barra de compra fixa some em telas baixas.
- Tamanhos de título nas cenas fixadas usam `min(vw, svh)`: dependem da largura e da altura, para caber em celulares baixos.

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
| 5. 8 encontros | `#jornada` | Confiança | Trilho horizontal com régua da semana 1 à 8 |
| 6. O João | `#sobre` | Respeito | Foto joao-profile2 com a quebra de moldura própria, sem borda, paralaxe leve |
| 7. Para quem é | `#para-quem` | "Sou desse lado" | Fluxo simples |
| 8. Investimento | `#contato` | Decisão | Fecho no claro, painel escuro de preço |

**Logo:** no fundo escuro usa `logo-light-gold.png` ("equipe" branco, "360" no bloco amarelo do logo oficial), sem animação.

**Assinatura:** as dores da virada girando 180° e o lado "comum" sendo varrido.
