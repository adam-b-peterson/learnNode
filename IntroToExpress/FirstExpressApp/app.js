var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
    console.log("Hi");
});

app.get("/bye", function(req, res){
    res.send("Goodbye");
});

app.get("/r/:subredditName", function(req, res){
    res.send(`Welcome to a ${req.params.subredditName} subreddit`);
});

app.get("*", function(req, res){
    res.send("The address does not exist.");
});

app.listen(3000, function(){
    console.log("Server has started.")
});

