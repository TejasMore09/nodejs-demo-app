const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js CI/CD pipeline!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
