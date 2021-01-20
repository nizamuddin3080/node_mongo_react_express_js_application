const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if ((req.url == "/"){
    // asyncronus

    // fs.writeFile('demo.txt', 'overwrite Hello World', (error) => {
    //   if (error) {
    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     res.write('Document Write Fail');
    //     res.end();
    //   } else {
    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     res.write('document Write sucessfull');
    //     res.end();
    //   }
    // });

        // Syncronus
        const error = fs.writeFileSync('demoSync.txt', 'This syncronys write file system');
        if (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('Document Write Fail');
            res.end();
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('Document Write successful');
            res.end();
        }
    };
});

server.listen(5050);
console.log('server run success');
