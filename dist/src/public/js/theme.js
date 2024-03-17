// theme.js
var iconMetaTag = document.getElementById('icon');

// Atualiza o conteúdo da meta tag para o caminho do seu ícone .png
iconMetaTag.setAttribute('content', 'img/logo.png');

// Função para alternar entre os temas
function toggleTheme() {
  var themeIcon = document.getElementById('theme-icon');
  var currentIcon = themeIcon.textContent;

  // Troca o ícone conforme o ícone atual
  if (currentIcon === '🌞') {
    themeIcon.textContent = '🌜'; // Ícone do tema escuro
  } else {
    themeIcon.textContent = '🌞'; // Ícone do tema claro
  }

  const body = document.body;
  body.classList.toggle('dark-mode');

  // Armazena a preferência do tema em um cookie
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// Verifica se existe um cookie de tema e aplica o tema correspondente
window.onload = function () {

  const themeCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('theme='));

  if (themeCookie) {
    const theme = themeCookie.split('=')[1];
    document.body.classList.add(`${theme}-mode`);
  }
};



ocument.addEventListener('DOMContentLoaded', function() {

  // Este código será executado assim que o DOM estiver pronto
  console.log('O DOM foi carregado');
  // Você pode adicionar outras ações ou manipulações aqui
});
