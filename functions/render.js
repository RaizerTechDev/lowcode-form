const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const templatePath = path.join(process.cwd(), 'src', 'views', 'index.ejs');
  const html = ejs.render(fs.readFileSync(templatePath, 'utf-8'), {
    title: "Netlify"
  });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  };
};


