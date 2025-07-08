const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(path.join(nodeModulesPath, 'router'))) {
  fs.rmSync(path.join(nodeModulesPath, 'router'), { recursive: true });
  console.log('Pacote router removido com sucesso!');
}