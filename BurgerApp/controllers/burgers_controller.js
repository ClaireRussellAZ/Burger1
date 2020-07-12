var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

function setupRouter(app){
	app.get("/", function(req,res){
		res.redirect("burgers")
	});
	
	app.get("/burgers", function(req,res){
		burgers.selectAll(function(data){
			var hbsObject = {
				burgers: data
			};
			console.log(hbsObject);
			res.render("home", hbsObject);
		});
	});
	
	app.post("/burgers/create", function(req,res){
		burgers.insertOne([
			"burger_name"
			],[
				req.body.burger_name
				], function(data){
					res.redirect("/burgers");
				});
	});
	
	app.put("/burgers/update/:id", function(req,res){
		var condition = "id = " + req.params.id;
		console.log("condition", condition);
	
		burgers.updateOne({
			"devoured": req.body.devoured
		}, condition, function(data){
			res.redirect("/burgers")
		});
	});

}

module.exports = setupRouter;