var mysql = require("mysql");
var connection;

// if(process.env.JAWSDB_URL){
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
	connection = mysql.createConnection({
		port: 3306,
		host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "pjzrx02dsiixq4s7",
		password: "ohs09z9c2m706da3",
		database: "cp62ql07igi440nm"
	});
// };

connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;