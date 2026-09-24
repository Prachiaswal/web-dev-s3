const app = express();
const PORT=3000;

app.get('/age-check/:age', (req, res,next) => {
  let age=parseInt(req.params.age);

  try{

  if(age<18){
    throw new Error("you are not eligible")
  }else{

    res.send("you are eligible to vote")
  }
}catch(error){
    next(error);
}
});

app.use((err,req,res,next)=>{
  res.status(500).json({success:false, message:err.message});

})

app.use((err,req,res,next)=>{
  res.status(404).json({success:false, message:"route not found"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port 3000`);
});

