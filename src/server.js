const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', { title: "Formulário WhatsApp" });
});

if (!process.env.VERCEL) {
  app.listen(3000, () => console.log('Local: http://localhost:3000'));
}

module.exports = app; 