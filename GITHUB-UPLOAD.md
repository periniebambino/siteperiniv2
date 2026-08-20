# COLÉGIO PERINI — GITHUB READY v2.1

## Como subir
1. **Extraia este ZIP no computador.** Não envie o ZIP como se fosse o site.
2. Abra o repositório no GitHub e envie **os arquivos e pastas que estão dentro dele**.
3. Confirme que `index.html` aparece na raiz do repositório.
4. Para GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

## Correções desta edição
- `index.html` no nível correto do pacote.
- `.nojekyll` incluído.
- Links internos compatíveis com sites GitHub Pages publicados em subpasta de repositório.
- Rotas internas tratadas como diretórios (`fundamental-1/`, `contato/` etc.).
- JS ajustado para descobrir a raiz real do projeto.
- Preview autônomo de ~18 MB removido do pacote de upload.
- `vercel.json` mantido para compatibilidade caso o GitHub continue conectado ao Vercel.

## SEO
Canonical, sitemap e robots ainda apontam para o domínio provisório Vercel. Isso não impede o site de abrir, mas deve ser alterado quando o domínio definitivo for homologado.
