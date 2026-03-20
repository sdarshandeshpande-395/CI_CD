const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from CI/CD Pipeline");
  res.write("This is Sudarshan Deshpande");
  res.end();
}).listen(3000);
