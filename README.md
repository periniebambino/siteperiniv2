# COLÉGIO PERINI — MASTER HOME v2.1

**Status:** Home em homologação visual e tipográfica. Ainda não é o pacote final de produção do site inteiro.

**Constituição:** estrutura visual V3.4 + copy mais recente aprovada + fotografia real recebida em 19/08/2026 + melhorias técnicas que não descaracterizam o layout.

## O que esta versão resolve
- Diagramação revisada em 1440, 1024, 768, 430 e 390 px.
- H2s da Home limitados a 2–3 linhas nos breakpoints homologados.
- Cards de etapas sem fotografias de alunos quando a série/etapa não está confirmada.
- Uso das fotos reais apenas como prova transversal: projetos, ciência, expressão e aprendizagem prática.
- Correção do bloco Corpo docente, que antes descrevia uma professora sem a fotografia comprovar essa informação.
- Grade de projetos sem buraco visual em grupos com quantidade ímpar de cards.
- Revisão automática de últimas linhas residuais em títulos e parágrafos principais.

## Regra importante sobre fotografia
Nenhuma imagem pode ser usada para afirmar série, etapa, cargo de adulto ou nome de atividade sem confirmação. O mapa ativo está em `docs/PHOTO-MAP-MASTER-v2.1.md`.

## Abrir para homologação
- `index.html` — Home conectada aos arquivos do projeto.
- `ABRIR_PREVIEW_LOCAL_MASTER.html` — preview autônomo, sem depender de servidor local.

## Documentação ativa
Abra primeiro `docs/INDEX-ATIVO.md`.

## Rotas presentes no pacote
- `/`
- `/fundamental-1`
- `/fundamental-2`
- `/ensino-medio`
- `/sistema-de-ensino`
- `/estrutura-e-vida-escolar`
- `/contato`

**Atenção:** as páginas internas ainda não passaram pela mesma homologação tipográfica/fotográfica da Home v2.1. Não tratar este ZIP como release final do site inteiro.

## Onde editar
- Contatos, WhatsApp, Portal, campanha e vídeo COC: `js/config.js`
- Conteúdo da Home e dados compartilhados: `js/content.js`
- Imagens principais: `js/images.js`
- Cores/tokens: `css/tokens.css`
- Regras de composição: `css/base.css`, `css/components.css`, `css/responsive.css`

## Publicação
Ainda não publicar como versão final. Domínio, canonical, rotas/GitHub e limpeza de release entram somente depois da homologação das páginas internas.

## MASTER v2.4 — alteração cirúrgica
- Hero: somente CTA “Agende uma visita”.
- Vídeo COC: capa usando frame do próprio vídeo.
- Demais áreas permanecem congeladas.
