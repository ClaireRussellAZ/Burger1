// Requiring our models
var db = require("../models");
// Dependencies
// =============================================================
const express = require("express");
const app = express();
const port = process.env.port 3006;
const burgers = require("./routes/burgers")


// Routes
// =============================================================

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
   
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  
  app.get("/card",   function (req, res) {
    res.sendFile(path.join(__dirname, "../public/card.html"));
  });

  app.get("/cards",  function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cards.html"));
  });

  app.get("/deck", function (req, res) {
    console.log('deck route')
    res.sendFile(path.join(__dirname, "../public/deck.html"));
  });