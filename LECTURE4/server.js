const express=require("express");
const app=express();
const PORT=3000

const users=[
    {id:101, name:"Alex", email:"GZDlC@example.com"},
    {id:102, name:"Ravi", email:"ravi@com"},
    {id:103, name:"john", email:"john@com"},
    {id:104, name:"vasu", email:"vasu@com"},
]


app.get("/",(req,res)=>{
    res.send("Hello Students");  //text or HTML
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hello from about</h1>");
})

app.get("/users",(req,res)=>{
    res.json(users);   //JSON format or object type
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});