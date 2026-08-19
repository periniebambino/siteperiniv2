# Colégio Perini — Release Final Publicável

Esta pasta contém apenas os arquivos necessários para publicação estática do site.

## Como abrir

Abra `index.html` em um navegador ou publique a pasta inteira em GitHub Pages, Vercel, Netlify ou hospedagem estática equivalente.

## Arquivo principal

`index.html` na raiz.

## Como publicar

Suba todo o conteúdo desta pasta mantendo a estrutura:

- `index.html`
- `404.html`
- `css/`
- `js/`
- `assets/`
- `robots.txt`
- `sitemap.xml`
- `manifest.webmanifest`
- `.nojekyll`
- `vercel.json`

## Dependências externas

Não há bibliotecas externas obrigatórias. Links externos usados: WhatsApp, Portal COC, Google Maps.

## Domínio

Domínio provisório usado nos metadados: `https://colegio-perini.vercel.app`. Atualize `robots.txt`, `sitemap.xml`, canonical, `og:url` e `og:image` quando o domínio final oficial for definido.

## Principais correções pós-auditoria

- `404.html` refeito com classes existentes/novas e visual institucional.
- `vercel.json` corrigido sem rewrite global para `index.html`.
- Manifest e favicons quadrados criados.
- SEO técnico básico incluído no `head`.
- Pasta publicável separada dos arquivos de validação e previews pesados.
- Validação estática de assets, links, HTML e estrutura do ZIP.


## Refino Fotografia + UX

Esta release recebeu ajustes finais de fotografia, UX e direção de arte: legendas deixam de cobrir imagens, fotos dos ciclos foram revistas, duplicidade visual do Ensino Médio foi reduzida e componentes de prova visual foram refinados sem alterar copy aprovada.
