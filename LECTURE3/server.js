const http = require("http");
const users = [
    { id: 101, name: "alex", email: "GZD1C@example.com" },
    { id: 102, name: "Ravi", email: "ravi@com" },
    { id: 103, name: "alex", email: "vasu@com" },
]


const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.headers);
  
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>welcome to server<h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>welcome to about page<h1>");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>welcome to contactpage<h1>");
        res.end();

    } else if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url == "/users" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201, { "content-type": "application/json" });
            res.write(JSON.stringify({"success":true,"message":"user created successfully"
                
            }));
            res.end();
        });


    }
    else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>404 page notfound<h1>");
    res.write("page not found");
}
res.end()     
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});