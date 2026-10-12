# Sumariva Móveis — Landing Page

Landing page comercial para a **Sumariva Móveis**, marcenaria planejada de alto padrão em São José dos Pinhais, PR. Projeto desenvolvido a partir das informações públicas do perfil do Google Maps do cliente (descrição, avaliações, contato), com o objetivo de substituir o site atual (feito no Canva) por uma página mais rápida, responsiva e com identidade visual própria.

🔗 Site atual do cliente (referência, Canva): https://sumarivamoveisplanejados.my.canva.site/

## Stack

- HTML5 + CSS3 (sem framework) + JavaScript vanilla
- Google Fonts: Fraunces (display), Work Sans (corpo), JetBrains Mono (detalhes/dados)
- Sem build step — é só abrir o `index.html`

## Direção de design

- **Paleta**: tons de madeira escura (`#1c1510`, `#2a1f17`) + serragem/osso claro (`#ede2d1`) + cobre/latão (`#c07a3e`) como acento — remete a madeira de lei e ferragem de marcenaria.
- **Elemento de assinatura**: um motivo de **encaixe tipo "box joint"/"finger joint"** (o encaixe clássico de marcenaria), usado como divisor entre todas as seções e como selo decorativo — gerado via JS (`js/script.js`) para manter o SVG limpo no HTML.
- **Depoimentos reais** extraídos das avaliações públicas do Google (5.0 ★, 17 avaliações).

## Estrutura

```
index.html
css/style.css
js/script.js
assets/
  fotos-loja/       → fotos do espaço/fachada (quando o cliente enviar)
  fotos-produtos/   → fotos de móveis/projetos entregues
  fotos-equipe/     → fotos da equipe/atendimento
```

## Pendências antes de entregar ao cliente

- [ ] Substituir os cards da seção "Projetos" por fotos reais (pasta `assets/fotos-produtos`)
- [ ] Confirmar/validar o handle do Instagram (@sumarivamoveisaltopadrao)
- [ ] Confirmar número de WhatsApp preferido para o botão de orçamento
- [ ] Trocar domínio/hospedagem final (GitHub Pages serve para demo; produção pode ir para domínio próprio)

---
Projeto para fins comerciais — ver contexto em `GERAL.MD` na raiz do hub `FreeStyle`.
