# Portfólio — Gabriel Vitor 🚀

Portfólio pessoal estático desenvolvido com **HTML**, **CSS** e **JavaScript**. Objetivo: apresentar projetos, habilidades e informações de contato em um layout escuro, moderno e responsivo.

---

## 🔎 O que tem neste repositório
- Página principal com seção **Welcome** (foto, apresentação e links sociais).
- Seção **Linguagens** com cards de tecnologias que você domina.
- Seção **Projetos** com cards que abrem um **modal** com galeria de imagens e link para visitar o projeto.
- Design responsivo e otimizações para mobile.

## 🗂️ Estrutura principal
- `index.html` — marcação da página
- `style.css` — estilos (desktop + mobile)
- `script.js` — funcionalidade do modal (abrir/fechar, navegação entre imagens)
- `img/` — imagens usadas no site

> Observação: é um site estático — não há dependências para instalar.

## ⚙️ Como personalizar
- Para adicionar/editar um projeto, abra `index.html` e edite a `<div class="projects">`.
- Cada projeto é um `<article class="card-project" data-title="..." data-desc="..." data-images="img/a.png,img/b.png" data-url="https://...">`.
  - `data-title`: título exibido no modal
  - `data-desc`: descrição exibida no modal
  - `data-images`: lista separada por vírgula para a galeria
  - `data-url`: link do projeto (botão "Visitar Site")

## 📱 Responsividade
- O CSS contém regras específicas para telas pequenas (<= 480px):
  - elementos decorativos (círculos/linhas) são ocultados para evitar overflow
  - a foto e o conteúdo são empilhados e centralizados

## ♿ Acessibilidade e performance
- Respeito a `prefers-reduced-motion` para reduzir animações quando o usuário preferir.
- Sugestões: adicionar `loading="lazy"` às imagens, otimizar assets (compressão) e melhorar o foco do modal para navegação por teclado.

## ✉️ Contato
- **Email:** mbrdrago@gmail.com
- GitHub: https://github.com/GabrielG216

---

Se quiser, posso:
- adicionar lazy-loading automático nas imagens;
- melhorar a acessibilidade do modal (gestão de foco);
- otimizar imagens e gerar uma versão leve para mobile.

Obrigado — me diga qual melhoria você prefere que eu implemente a seguir. ✨