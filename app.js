const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from CI/CD Pipeline");
  res.wite("This is Sudarshan Deshpande");
  res.end();
}).listen(3000);
