# Projeto Portifólio — Gabriel Vitor

Pequeno portfólio pessoal estático feito com HTML, CSS e JavaScript — objetivo: apresentar habilidades e projetos com um visual escuro, responsivo e com modal de visualização de projetos.

---

## O que tem aqui
- Página principal com seção "Welcome" (foto e introdução).
- Seção "Linguagens" com cards compactos de tecnologias.
- Seção "Projects" com cards (imagem no topo, descrição no meio, botões abaixo):
  - Botão **Saiba mais** abre um modal com galeria de imagens e descrição do projeto.
  - Botão **Visitar Site** abre o site do projeto em nova aba.
- Footer simples com direitos reservados.

## Principais arquivos
- `index.html` — marcação do site
- `style.css` — estilos (desktop + mobile). Contém um bloco `@media (max-width: 480px)` com otimizações exclusivas para mobile.
- `script.js` — lógica do modal de projeto (abrir/fechar, navegar entre imagens, thumbs).
- `img/` — imagens usadas na página e nas galerias (substitua pelas suas reais).

Observação: é um site estático — não precisa instalar dependências.

## Como personalizar os cards de projeto
1. Abra `index.html` e localize a seção `<div class="projects">`.
2. Cada card é um elemento `<article class="card-project" data-title="..." data-desc="..." data-images="img/a.png,img/b.png" data-url="https://...">`.
   - `data-title` — título exibido no modal
   - `data-desc` — descrição curta exibida no modal
   - `data-images` — lista separada por vírgula com imagens para a galeria do modal
   - `data-url` — link visitável pelo botão "Visitar Site"
3. Substitua as imagens em `img/` ou os caminhos das imagens no `data-images`.

## Mobile-first / Responsividade
- O CSS já possui regras mobile específicas para telas pequenas (<= 480px) que:
  - removem elementos decorativos que causam overflow (círculos/linhas),
  - colocam a foto no topo da seção `welcome`,
  - centralizam todo o conteúdo e empilham cards para melhor visual.

Se quiser que esses comportamentos sejam permanentes (independente do viewport) — posso mover a imagem para o topo no HTML ou ajustar os breakpoints.

## Acessibilidade e performance (recomendações rápidas)
- Já respeitamos `prefers-reduced-motion` para desabilitar animações quando o usuário preferir menos movimento.
- Recomendo adicionar `loading="lazy"` nas imagens de `card-media` e `modal` para melhorar carregamento em mobile.
- Posso também melhorar o foco do modal (transferir foco para `#modal-title` ao abrir) para melhorar a navegação por teclado.

## Próximos passos que posso fazer agora
- Adicionar lazy-loading nas imagens.
- Tornar o modal mais acessível (controle de foco, aria-live, roles explicitas).
- Otimizar imagens (compressão) e melhorar performance mobile.

---
