const http = require('http');
const fs = require('fs');

const requestListener = function (req,res) {

  res.writeHead(200);
  const index = fs.readFileSync("index.html")
  res.end(index.toString());
  

}

const server = http.createServer(requestListener);
server.listen(8080);