var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi, welcome!");
});

app.get("/speak/:animal", function(req, res){
    let animalSound = "";
    if (req.params.animal == "pig"){
        animalSound = "'Oink'";
    }
    if (req.params.animal == "cow"){
        animalSound = "'Moo'";
    }
    if (req.params.animal == "dog"){
        animalSound = "'Woof Woof!'";
    }
    res.send(`The ${req.params.animal} says ${animalSound}`);
});

app.get("/repeat/:phrase/:times", function(req, res){
    let times = parseInt(req.params.times);
    let output = "";
    for (let i = 0; i < times; i++){
        output = output + req.params.phrase + " ";
    }
    res.send(output);
});

app.get("*", function(req, res){
    res.send("Page not exist.");
});

app.listen(3000);