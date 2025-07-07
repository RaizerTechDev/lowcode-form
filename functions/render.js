const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
  const templatePath = path.join(__dirname, '..', 'src', 'views', 'index.ejs');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  const html = ejs.render(template, {
    title: "Formulário WhatsApp"
  });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  };
};
