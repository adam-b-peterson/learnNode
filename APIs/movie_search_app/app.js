var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "https://www.omdbapi.com/?i=tt3896198&apikey=82105db2&s=" + query;
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/", function(req, res){
    res.render("search");
});

app.listen(3000, function(){
    console.log("Server started.");
});