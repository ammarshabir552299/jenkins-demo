const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Jenkins CI/CD! version2</h1>");
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
