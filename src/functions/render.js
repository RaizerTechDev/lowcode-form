const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    // Caminho absoluto para o template
    const templatePath = path.join(process.cwd(), 'src', 'views', 'index.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Renderiza o EJS
    const html = ejs.render(template, { 
      title: "Formulário WhatsApp" 
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: html
    };
  } catch (error) {
    return { 
      statusCode: 500,
      body: `Erro ao renderizar: ${error}` 
    };
  }
};
