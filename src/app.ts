// src/app.ts
import express from 'express';
import path from 'path';

const app = express();

app.get('/toggle-theme', (req, res) => {
  // Verifica se o cookie de tema está definido
  const currentTheme = req.cookies.theme || 'light'; // Aqui está tentando acessar req.cookies.theme
  
  // Define o novo tema com base no tema atual
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Define o cookie de tema com o novo valor
  res.cookie('theme', newTheme, { maxAge: 900000, httpOnly: true });

  // Redireciona de volta para a página anterior
  res.redirect('back');
});



// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota para a página do blog
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/blog.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sobre.html'));
});

app.get('/typescript', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/typescript.html'));
}); 


app.get('/python', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/python.html'));
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
