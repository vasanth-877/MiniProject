const con = require("./dbconnect");
const alert = require("alert");
const connection = con.con;
const bodyparser = require("body-parser");
const express = require("express");
const register = express();
const  path = require("path");
register.set("views",path.join(path.dirname(__dirname),"view"));
register.set("view engine","ejs");
register.use(express.static(path.join(path.dirname(__dirname),"view")));
/*register.get("/",(req,res)=>{

register.use(express.static("view"))});*/
register.use(bodyparser.urlencoded({ extended: true }))
register.use(bodyparser.json())
register.use(express.static("C:\Javascript\Quiz\shadow\view"))
register.use(express.urlencoded());
register.listen(3000,()=>{
    console.log("listening on port 3000");
});



register.post("/savedata",(req,res)=>{

connection.query("Insert into user (username,user_password) VALUES ('"+req.body.uname+"','"+req.body.Pass+"')",(error,result)=>{
    if (error) throw error;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log(result);
}
)
res.redirect("/index.html")
});

register.post("/login",(req,res)=>{
    var flag;
    connection.query("select username,user_password from user",(error,result,fields)=>{
        if (error) throw error;
    
        for(i=0;i<result.length;i++)
        {
            if(req.body.user==result[i].username && req.body.password==result[i].user_password){
                flag=true;
                res.redirect("/Home.html");
                
            }
            
        }
        if(flag!=true)
        {
           res.send("Invalid Username");
            
        }
    
    }
    )
    
    });
    module.exports  = register;
/*connection.query(sql,username.value,password.value,(err)=>{
    if(err) throw err
    console.log("one row inserted");
})

let re1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let re2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let re3 = /^[0-9]{10}$/;
form.addEventListener('submit',(e)=> {
if(re1.test(password.value))
{
    return true;
    
}
else{
    alert("Invalid Password");
    password.style.border = "red solid 3px";
    e.preventDefault();
    
}

if(username.value.length >= 15)
{
    alert("Username length out of Bounds");
    username.style.border = "red solid 3px";
    
    e.preventDefault();
}
else{
    return true;
}

if(re2.test(email.value) != true)
{
    alert("Ivalid email id");
    email.style.border = "red solid 3px";
    e.preventDefault();
    
}
else{
    return true;
}

if(re3.test(phonenumber.value) != true)
{
    alert("invalid Phone Number");
    phonenumber.style.border = "red solid 3px";
    e.preventDefault();
    
}
else
{
    return true;
}

})}
*/
