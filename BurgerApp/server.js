// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));
//
// app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
//routes///

require("./controllers/burgers_controller.js")(app);
// const routes=require("./app/routes/app.js")
// app.use('/', routes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
