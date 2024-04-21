const mysql = require("mysql2");

const con = mysql.createConnection({
host:"localhost",
user:"root",
password:"Baleronaldo07",
database:"QuizDb"
})
con.connect((error) => {
    
    if (error) {
      
    } else {
      console.log('Connected to MySQL database!');
    }
  });
module.exports={mysql,con};
