const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "food_order"
});

connection.connect(function (error) {
    if (error) throw error;
    // console.log("Database Connection Created");
});
module.exports = connection;