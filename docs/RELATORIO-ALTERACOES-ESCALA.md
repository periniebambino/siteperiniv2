# Relatório de Alterações — Escala Profissional Final

## Escala

ANTES: H1, H2, cards de ciclos, imagens e seções estavam com aparência ampliada, criando dobras pesadas e desproporcionais.

DEPOIS: tipografia, containers, imagens e cards foram recalibrados com `clamp()`, aspect-ratio e limites máximos.

## Responsividade

ANTES: o layout respondia por patches acumulados, com risco de imagem gigante e texto apertado em larguras intermediárias.

DEPOIS: breakpoints foram reorganizados para 1200, 1024, 760, 430 e 375px, com reorganização real de grids.

## Direção de arte

ANTES: excesso de patches, curvas/alturas grandes e efeitos acumulados davam sensação de site gerado e ampliado.

DEPOIS: foi mantida a identidade azul premium do hero, mas com densidade, escala e cards mais profissionais.

## Código

ANTES: CSS acumulava blocos V5.6, V5.7, V6.0 e correções sucessivas no fim do arquivo.

DEPOIS: `css/perini.css` foi consolidado como uma folha limpa, sem manter regras antigas quebradas por cima de novas.

## Arquivos alterados

- `css/perini.css`: escala global, responsividade, cards, seções, hero, imagens e media queries.
- `ABRIR_PREVIEW_LOCAL.html`: preview autônomo com CSS/JS/imagens embutidos.
- `PREVIEW_AUTONOMO_FUNCIONANDO.html`: cópia autônoma para validação isolada.
- `README.md`: instruções finais.
- `docs/QA-ESCALA-PROFISSIONAL-FINAL.md`: QA da versão.
- `docs/RELATORIO-ALTERACOES-ESCALA.md`: este relatório.
- `docs/STATUS-FINAL.md`: status de validação.
