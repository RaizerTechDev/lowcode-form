const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public'))); // Serve arquivos estáticos da pasta public

// Rota principal
app.get('/', (req, res) => {
  res.render('index', { 
    title: "Formulário WhatsApp" // Título da página
  });
});

app.listen(3000, () => console.log('Servidor rodando: http://localhost:3000'));