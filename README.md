# EQUIPE 360: landing page

Página de venda do programa **EQUIPE 360** (8 encontros semanais de desenvolvimento comportamental com João Paulino).
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
| 5. 8 encontros | `JornadaSection.jsx` | `#jornada` |
| 6. João Paulino | `SobreSection.jsx` | `#sobre` |
| 7. Para quem é | `ParaQuemSection.jsx` | `#para-quem` |
| 8. Investimento | `CtaFinalSection.jsx` | `#contato` |
| FAQ, rodapé, popup de saída | `FAQSection.jsx`, `Footer.jsx`, `ExitIntentPopup.jsx` | `#faq` |

Textos, preços e links ficam em `src/lib/constants.jsx`.

### Movimento

- Todas as cenas respeitam `prefers-reduced-motion`: sem tela fixa, layout estático completo.
- O mapeamento rolagem → valor usa `useRange` (`src/lib/motion.js`), sempre por função.
- Assinatura: na virada, as dores giram 180° e mostram o resultado no verso.

### Imagens

- `joao-bracos.webp` (hero): recorte com fundo transparente de `profile1.jpeg` (rembg, local).
- `joao-profile2.webp` (seção do João): `profile2.jpeg` com o fundo branco transparente, mantendo a quebra da moldura da foto original.
- `logo-light-gold.png`: versão do `logo-2.png` para fundo escuro ("equipe" em branco, "360" no bloco amarelo).
