import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar cookies
app.use(cookieParser());

// Rota para alternar o tema
app.get('/toggle-theme', (req, res) => {
  const currentTheme = req.cookies.theme || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  res.cookie('theme', newTheme, { maxAge: 900000, httpOnly: true });
  res.redirect('back');
});

// Rota para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota para qualquer URL que não seja arquivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
