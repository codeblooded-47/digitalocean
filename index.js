var mysql = require("mysql");

var con = mysql.createConnection({
  host: "db-38-staging-do-user-8765908-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "qssn1rakci08tn4f",
  port: 25060,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
