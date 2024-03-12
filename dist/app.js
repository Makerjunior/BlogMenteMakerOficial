"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
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
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
// Rota para a página do blog
app.get('/blog', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/blog.html'));
});
app.get('/sobre', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/sobre.html'));
});
app.get('/typescript', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/typescript.html'));
});
app.get('/python', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/python.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
