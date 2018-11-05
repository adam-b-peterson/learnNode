var express = require("express");
var app = express();
var bodyParser = require("body-parser");
let friends = ["Tony", "Brenda", "Jessie", "Tim", "Tom", "Lily"];

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriendName = req.body.newFriendName;
    friends.push(newFriendName);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(3000);