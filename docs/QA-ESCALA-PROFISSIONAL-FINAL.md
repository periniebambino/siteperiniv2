# QA — Escala Profissional Final

## Resoluções testadas por renderização headless

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844
- 375 × 812

## Checks automáticos

- H1 único: OK
- `href="#"`: OK, não encontrado
- Assets locais referenciados: OK
- CSS carregável: OK
- JavaScript carregável: OK
- Links de WhatsApp, telefone, mapa e portal: OK
- Termos proibidos principais: OK
- Overflow horizontal: validado via Playwright em todas as resoluções listadas

## Validação visual manual recomendada

Abrir `ABRIR_PREVIEW_LOCAL.html` e revisar:

- crops de alunos;
- primeira dobra em celular real;
- cards de ciclos;
- galeria de projetos;
- fechamento de contato.


## Métricas renderizadas

- 1920x1080: overflow horizontal = NÃO, H1=67.2px, H2=51.2px, hero=670px
- 1440x900: overflow horizontal = NÃO, H1=67.2px, H2=48.96px, hero=629px
- 1366x768: overflow horizontal = NÃO, H1=67.2px, H2=46.444px, hero=624px
- 1280x800: overflow horizontal = NÃO, H1=65.28px, H2=43.52px, hero=635px
- 1024x768: overflow horizontal = NÃO, H1=55.296px, H2=34.816px, hero=1074px
- 768x1024: overflow horizontal = NÃO, H1=45.6px, H2=32px, hero=900px
- 430x932: overflow horizontal = NÃO, H1=52px, H2=38.7px, hero=951px
- 390x844: overflow horizontal = NÃO, H1=48.75px, H2=35.1px, hero=911px
- 375x812: overflow horizontal = NÃO, H1=41.92px, H2=33.75px, hero=900px

Observação: algumas imagens lazy abaixo da dobra aparecem como não carregadas no teste inicial de viewport; isso é comportamento esperado de `loading="lazy"`, não erro de asset.
