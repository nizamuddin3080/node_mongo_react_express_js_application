const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // if (req.url = "/") {
  // asyncronus
  // fs.readFile('home.html', (error, data) => {
  //   res.writeHead(200, { 'content-type': 'text/html' });
  //   res.write(data);
  //   res.end();
  // });

  // syncronus
  const myData = fs.readFileSync('home.html');

  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(myData);
  res.end();
});

server.listen(4040);
console.log('Server Run Successfull');
