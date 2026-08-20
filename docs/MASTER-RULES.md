# COLÉGIO PERINI — REGRAS MASTER DE PRODUÇÃO

## Regra soberana
O resultado deve parecer o Colégio Perini real: tradicional sem parecer antigo, atual sem parecer startup, acolhedor sem parecer infantil, humano sem perder autoridade e profissional sem estética genérica de IA.

## Hierarquia de decisão
1. A estrutura visual e a composição da V3.4 são a constituição visual do projeto.
2. A Copy Mestre V7 é a fonte de conteúdo da Home, com nomenclatura final revisada quando necessário.
3. Fotografias reais recentes e homologadas têm prioridade; seu uso deve respeitar apenas informações confirmadas.
4. Melhorias posteriores de engenharia, acessibilidade, SEO e performance entram somente quando não alteram a aparência aprovada.
5. Experimentos visuais posteriores que descaracterizam a V3.4 não entram.

## Regras de layout
- Preservar ordem, ritmo, grids, proporções e lógica de composição da V3.4.
- Não redesenhar uma seção para acomodar uma fotografia; tratar/cortar a fotografia para o slot existente.
- UX só altera layout por problema objetivo de leitura, responsividade, acessibilidade, conversão ou erro técnico.
- Evitar glassmorphism gratuito, blur decorativo, cards excessivos, sombras artificiais e efeitos de template.
- Design editorial antes de ornamento.

## Regras de copy
- Não voltar para a copy antiga da V3.4 quando houver versão posterior aprovada.
- Não empobrecer argumentos pedagógicos para facilitar encaixe.
- Pode ajustar quebra, microcopy e nomenclatura sem mudar o significado aprovado.
- Evitar frases genéricas sem prova.
- Sistema COC reforça o Perini; não substitui a identidade da escola.

## Regras de fotografia
- Foto real prova apenas o que é confirmado pela própria imagem ou por informação fornecida pelo Colégio.
- Nenhuma foto pode representar série, etapa, faixa escolar, cargo de adulto ou atividade específica sem confirmação.
- Nenhuma foto entra sem função institucional, pedagógica, de convivência, repertório ou acolhimento.
- Não cortar rosto, aluno central, gesto ou ação pedagógica relevante.
- Nenhum texto, botão, selo ou legenda deve cobrir rosto.
- Desktop e mobile podem usar crops diferentes.
- Imagem nova não autoriza mudança de layout.

## Regras de diagramação tipográfica
- A copy deve caber com elegância no componente; não se reduz fonte apenas para salvar texto longo.
- Hero: H1 de impacto; no máximo 3 linhas no mobile.
- Títulos de seção: alvo de 2–3 linhas; 4 linhas exigem revisão de copy/composição.
- Títulos em colunas estreitas usam escala compacta própria.
- Nunca deixar conectivos curtos isolados em linha quando a copy puder ser reescrita.
- Parágrafos devem evitar última linha residual; revisar texto quando a última linha ficar visualmente órfã.
- `text-wrap: balance` em títulos e `text-wrap: pretty` nos textos corridos quando suportado.
- Espaço vazio não é corrigido com margens aleatórias: corrigir largura, copy, grid ou hierarquia na origem.
- Grids com quantidade ímpar precisam fechar visualmente a composição, sem card órfão ou buraco acidental.
- Homologar linha por linha em 390, 430, 768, 1024, 1366 e 1440 px.

## Regras de front-end
- HTML semântico e um H1 por página.
- CSS limpo, sem pilha de patches e sem `!important` para mascarar conflitos.
- JavaScript pequeno e progressivo.
- Imagens com dimensões declaradas; lazy loading abaixo da dobra; hero sem lazy.
- Acessibilidade, foco visível, teclado, contraste e `prefers-reduced-motion` obrigatórios.
- Melhorias técnicas devem ser visualmente invisíveis.

## Breakpoints mínimos de homologação
- 390 px
- 430 px
- 768 px
- 1024 px
- 1366 px
- 1440 px

## Regra de aprovação
A versão só avança se, comparada lado a lado com a V3.4, continuar reconhecível como a mesma direção visual e estiver superior em conteúdo, fotografia, precisão e funcionamento.
