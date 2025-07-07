const app = require('../src/server'); // Importa seu Express app original

exports.handler = async (event, context) => {
  const { path, httpMethod, headers, queryStringParameters } = event;
  
  // Simula um objeto de requisição do Express
  const req = {
    path,
    method: httpMethod,
    headers,
    query: queryStringParameters
  };

  // Cria um objeto de resposta personalizado
  const res = {
    statusCode: 200,
    headers: {},
    setHeader(key, value) {
      this.headers[key] = value;
    },
    render(view, data) {
      const ejs = require('ejs');
      const fs = require('fs');
      const template = fs.readFileSync(`./src/views/${view}.ejs`, 'utf-8');
      this.body = ejs.render(template, data);
      this.setHeader('Content-Type', 'text/html');
    },
    send(html) {
      this.body = html;
    }
  };

  // Roteia manualmente (simplificado)
  if (req.path === '/') {
    await app.handle(req, res);
  } else {
    res.statusCode = 404;
    res.send('Página não encontrada');
  }

  return {
    statusCode: res.statusCode,
    headers: res.headers,
    body: res.body
  };
};