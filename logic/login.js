const login = require('./register');

login.get("/home",(req,res)=>{
    res.sendFile('Home.html');
})