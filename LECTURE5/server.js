const express= require('express');
const app=express();

app.use(express.json());

const employees=[
    {employeeId:1,employeeName:"prachi",department:"IT" ,salary:10000},    
    {employeeId:2,employeeName:"itika",department:"HR" ,salary:12000},
    {employeeId:3,employeeName:"namita",department:"Finance" ,salary:15000},
    {employeeId:4,employeeName:"anmol",department:"IT" ,salary:11000},
    {employeeId:5,employeeName:"Tanisha",department:"HR" ,salary:13000},

]
// read operation
app.get('/employees',(req,res)=>{
    res.send(employees);
}); 

app.get('/employees/:id',(req,res)=>{
     const id =req.params.id;
    const employee=employees.find(employee=>employee.employeeId===Number(id));
    if(!employee){
         res.status(404).json({success:false,message:"Employee not found"});
    }
    res.json({success:true,employee});
})
app.post('/employees',(req,res)=>{
    const employee=req.body;
    employees.push({employeeId:employees.length+1,...employee});
    res.json({success:true,employee});
});
// update operation
app.put('/employees/:id',(req,res)=>{
    const id=req.params.id;
    const employee=req.body
    const result=employees.find((employee)=>employee.employeeId===Number(id)); 
    if(!result){
        res.status(404).json({success:false,message:"Employee not found"}); 
    } 
    result.name=employee.name;
    result.department=employee.department;
    result.salary=employee.salary;
    res.json({success:true,employee:result});
});
// delete operation
app.delete("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.employeeId===Number(id));
    if(!result){
        res.status(404).json({success:false,message:"Employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
});
app.listen(3000,()=>{console.log("Server is running on port 3000");
});