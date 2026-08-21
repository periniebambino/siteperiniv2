# MASTER v2.5 — Cycle Hero Mobile

## Escopo cirúrgico
Corrigido somente o comportamento das imagens do hero nas páginas:
- Fundamental I
- Fundamental II
- Ensino Médio

## Problema
No mobile, `.page-hero-media` forçava `aspect-ratio: 4/3` enquanto as imagens são horizontais (~1.60:1 e ~1.78:1). Com `object-fit: cover`, isso cortava as laterais.

## Correção
Somente abaixo de 720px:
- remove o `aspect-ratio: 4/3` do container;
- deixa a altura seguir a proporção real da imagem;
- usa `width:100%` e `height:auto`;
- evita deformação e cortes indevidos.

## Congelamento
Nenhum HTML, copy, imagem, página, CTA, SEO ou componente fora desse comportamento foi alterado nesta rodada.
