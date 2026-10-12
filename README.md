# Sumariva Móveis — Landing Page

Landing page comercial para a **Sumariva Móveis**, marcenaria planejada de alto padrão em São José dos Pinhais, PR. Projeto desenvolvido a partir das informações públicas do perfil do Google Maps do cliente (descrição, avaliações, contato), com o objetivo de substituir o site atual (feito no Canva) por uma página mais rápida, responsiva e com identidade visual própria.

🔗 Site atual do cliente (referência, Canva): https://sumarivamoveisplanejados.my.canva.site/

## Stack

- HTML5 + CSS3 (sem framework) + JavaScript vanilla
- Google Fonts: Fraunces (display), Work Sans (corpo), JetBrains Mono (detalhes/dados)
- Sem build step — é só abrir o `index.html`

## Direção de design

- **Paleta**: derivada das fotos reais do cliente — neutro claro/osso (`#f3eee6`, `#fbf8f4`), madeira âmbar (`#b9875a`) e carvão (`#241d17`) como contraste, igual ao que aparece nos móveis e no logo deles. Só a seção "Projetos" usa fundo escuro cheio (como parede de galeria para as fotos).
- **Elemento de assinatura**: um **arco fino** (echo do círculo que já existe na marca deles, visto em `assets/marca/fundo-marca-referencia.png`) atrás das fotos, + divisores em onda suave entre as seções de maior contraste — fluido, sem quebras bruscas.
- **Fotos reais do cliente** usadas no hero, "Sobre" e nos 4 cards de "Projetos" (ver `assets/fotos-produtos/`).
- **Depoimentos reais** extraídos das avaliações públicas do Google (5.0 ★, 17 avaliações).

## Estrutura

```
index.html
css/style.css
js/script.js
assets/
  fotos-loja/       → fotos do espaço/fachada (ainda vazio — pedir ao cliente)
  fotos-produtos/   → fotos reais de móveis/projetos entregues (em uso no site)
  fotos-equipe/     → fotos da equipe/atendimento (ainda vazio — pedir ao cliente)
  marca/            → logo (SVG) e referência de marca do cliente, enviados por ele
```

## Pendências antes de entregar ao cliente

- [ ] Pedir fotos da fachada/loja e da equipe (pastas `fotos-loja` e `fotos-equipe` ainda vazias)
- [x] ~~Confirmar/validar o handle do Instagram~~ — `@sumarivamoveisaltopadrao` está fora do ar (confirmado 2026-10-12, página "não disponível"). Link removido do site. Candidato encontrado: `@mariasumarivaprojetista` ("Maria Sumariva - Projetista") — **confirmar com a Maria se é o perfil oficial antes de colocar no site.**
- [x] Número de WhatsApp do botão de orçamento: `(41) 99914-7267` (o mesmo que já estava no Google Maps)
- [ ] Trocar domínio/hospedagem final (GitHub Pages serve para demo; produção pode ir para domínio próprio)
- [ ] Comprimir/otimizar as fotos em `assets/fotos-produtos` antes do deploy final (estão no tamanho original do celular)

## Contatos (uso interno — não vai no site público)

- `(41) 99914-7267` — Sumariva (número principal, usado no site)
- `(41) 9 9983-6792` — Maria (dona)
- `(41) 9 9720-3656` — Kevin
- Horário real (Google Maps): seg–sáb 8h–19h, domingo fechado — já atualizado no site e no schema.org

---
Projeto para fins comerciais — ver contexto em `GERAL.MD` na raiz do hub `FreeStyle`.
