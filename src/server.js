const express = require('express');
const path = require('path');
const app = express();

if (process.env.NETLIFY) {
  module.exports = app;
  return;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public'))); 

// Rota principal
app.get('/', (req, res) => {
  res.render('index', { 
    title: "Formulário WhatsApp" 
  });
});

app.listen(3000, () => console.log('Servidor rodando: http://localhost:3000'));