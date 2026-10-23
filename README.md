# EQUIPE 360: landing page

Página de venda do programa **EQUIPE 360** (12 encontros mensais de desenvolvimento comportamental com João Paulino).
Site: https://joaopaulino.com.br/

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 (tokens em `src/styles/global.css`)
- framer-motion 12 (cenas guiadas pela rolagem)
- Fonte: Archivo (Google Fonts)

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar a versão de produção

```bash
npm run build
```

A pasta `dist/` é o site pronto. O arquivo `public/.htaccess` vai junto (força HTTPS e roteia tudo para `index.html`).

### Publicar na Hostgator

1. Rode `npm run build`.
2. No Gerenciador de Arquivos do cPanel, apague o conteúdo antigo de `public_html` (guarde um backup).
3. Envie **o conteúdo** de `dist/` (não a pasta em si) para `public_html`, incluindo o `.htaccess`.

## Design

- `MASTER.md`: design system (teses, cores com contraste, tipo, espaço, movimento, componentes e a jornada em 8 cenas).
- `scrollcraft/builds/equipe360/BRIEF.md`: o briefing da experiência de rolagem.

### Estrutura

| Cena | Arquivo | Âncora |
|---|---|---|
| Header + barra de compra no celular | `src/components/sections/Header.jsx` | |
| 1. Hero em camadas | `HeroSection.jsx` | `#topo` |
| 2. A dor | `DorRealSection.jsx` | `#dor` |
| 3. A virada | `ViradaSection.jsx` | `#resultados` |
| 4. E.Q.U.I.P.E. | `ProgramaSection.jsx` | `#programa` |
| 5. 12 encontros | `JornadaSection.jsx` | `#jornada` |
| 6. João Paulino | `SobreSection.jsx` | `#sobre` |
| 7. Para quem é | `ParaQuemSection.jsx` | `#para-quem` |
| 8. Investimento | `CtaFinalSection.jsx` | `#contato` |
| FAQ, rodapé, popup de saída | `FAQSection.jsx`, `Footer.jsx`, `ExitIntentPopup.jsx` | `#faq` |

Textos, preços e links ficam em `src/lib/constants.jsx`.

### Movimento

- Todas as cenas respeitam `prefers-reduced-motion`: sem tela fixa, layout estático completo.
- O mapeamento rolagem → valor usa `useRange` (`src/lib/motion.js`), sempre por função.
- Assinatura: a moldura do "360" no logo do header se desenha com a rolagem e fecha a volta no fim do investimento.

### Imagens

- `joao-piramide.webp` e `joao-bracos.webp`: recortes com fundo transparente gerados a partir de `profile2.jpeg` e `profile1.jpeg` (rembg, local).
- `logo-light.png`: versão clara do logo, sem a moldura (a moldura é desenhada em SVG por `src/components/Logo.jsx`).
