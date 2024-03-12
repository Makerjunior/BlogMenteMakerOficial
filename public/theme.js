// theme.js

// Função para alternar entre os temas
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Armazena a preferência do tema em um cookie
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }
  
  // Verifica se existe um cookie de tema e aplica o tema correspondente
  window.onload = function() {
    const themeCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('theme='));
    
    if (themeCookie) {
      const theme = themeCookie.split('=')[1];
      document.body.classList.add(`${theme}-mode`);
    }
  };
  