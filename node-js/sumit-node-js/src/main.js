const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {
  const myURL = 'https://www.facebook.com/programmerRabbil/?_rdc=1&_rdr';

  const myURLObject = URL.parse(myURL, true);

  //   const myHOSTName = myURLObject.host;
  //   const myPathName = myURLObject.pathname;
  const mySearchName = myURLObject.search;

  res.writeHead(200, { 'contain-type': 'text/html' });
  res.write(mySearchName);
  res.end();
});

server.listen(5000);

console.log('server run successful');
