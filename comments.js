congit add comments.js

// Cria o servidor web
const server = http.createServer((req, res) => {
  // Configura o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Responde com uma mensagem simples
  res.end('Servidor web funcionando! Bem-vindo ao Comments.js\n');
});

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
