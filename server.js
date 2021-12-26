const http = require('http');
const fs = require('fs');
const index = fs.readFileSync("index.html")

const requestListener = function (req,res) {

  res.writeHead(200);
  if (req.url == "/json") {
    const json = fs.readFileSync("./data.json")
    res.end(json.toString());
  } else {
    const index = fs.readFileSync("index.html")
    res.end(index.toString());

  }
  

}

const server = http.createServer(requestListener);
server.listen(8080);