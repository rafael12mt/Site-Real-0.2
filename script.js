document.addEventListener("DOMContentLoaded", function() {
  // Função para fazer a logo aparecer com uma animação
  const logo = document.querySelector('.logo');
  logo.style.opacity = '1'; // Definindo a opacidade para 1 quando a página é carregada

  // Função para fazer os itens do menu aparecerem com uma animação
  const navItems = document.querySelectorAll('nav ul li');
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1'; // Definindo a opacidade para 1 com um atraso para cada item
    }, 500 + index * 100); // Atraso de 100ms entre cada item
  });

  // Adicione mais código JavaScript aqui conforme necessário para outras interações ou animações
});