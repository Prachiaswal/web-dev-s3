const http = require("http");

const user=[
    {id:101,name:"siya",email:"siya@gmail.com"},
    {id:102,name:"riya",email:"riya@gmail.com"},
    {id:103,name:"priya",email:"priya@gmail.com"},
    {id:104,name:"diya",email:"diya@gmail.com"},
]

const server =  http.createServer((req,res)=>{
   // console.log(req.url);
   // console.log(req.headers);

if(req.url=="/"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to server<h1>");
    res.end();
}else if(req.url=="/about"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to about page<h1>");
    res.end();
}else if(req.url=="/contact"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to contactpage<h1>");
    res.end();
}else if(req.url=="/user"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(user));
    res.end();
}else if(req.url=="/user"&& req.method=="POST"){
    let body=""
    req.on("data",(chunk)=>{
        body+=chunk;
    });
    req.on("end",()=>{
        const users = JSON.parse(body);
        user.push(users);
        res.writeHead(200,{"content-type":"application/json"});
        res.write(JSON.stringify({"success":true,"message":"users created successfully"}));
        res.end();                    
    })    
}else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.write("<h1>404 page notfound<h1>");
    res.write("page not found");
}   
})
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000"); 
});