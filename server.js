var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;

  if (typeof q.line !== "undefined") {
    var txt = q.line + "";
    res.end(txt);
    console.log(txt);
    var talk = require("child_process").spawn;
    talk('python3',["/home/vern/Desktop/robot-blue/main.py", txt]);
  } else {
    res.end("");
    console.log("Invalid query from client.");
  }
}).listen(8000);

console.log("Server is listening on port 8000");
