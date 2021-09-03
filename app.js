var express = require("express");
var app = express();
var students = [];
var employees = [];

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
   res.sendFile(__dirname+"/homepage.html")
})

app.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/sturegistration.html");    
})

app.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/empregistration.html");    
})

app.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:students
    })
})

app.get("/emplist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})

app.post("/sturegister",function(req,res){    
    students.push(req.body);
    res.send("Student registraiton successful")    
})

app.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("Employee registraiton successful")    
})

app.post("/register",function(req,res){
    console.log("req message body::",req.body)
    res.send("OKOK")
})

app.listen(8090,function(){console.log("listening on 8090")})