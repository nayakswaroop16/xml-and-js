console.log("here");
http = require("http");
const server = http.createServer((req, res) => {
    if(req.url=== "/api/products"){
        res.writeHead(200
            , { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "works now" }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "No content" }));
    }

});

server.listen(8888);
