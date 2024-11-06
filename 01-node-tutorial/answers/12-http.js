const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my homepage!');
      }
    if (req.url === '/about') {
        res.end('Here is our about page.');
      } else {
        res.end('Page not found.');
      }
    });

server.listen(3001)