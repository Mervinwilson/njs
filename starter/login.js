const mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Putlamma@93",
    database:"node.js"

});

//connection

connection.connect(function(error){
    if(error) throw error
    else console.log("connected succesfully")
})