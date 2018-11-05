var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi, welcome!");
});

app.get("/speak/:animal", function(req, res){
    let animalSoundsDictionary = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    let animal = req.params.animal.toLowerCase();
    let animalSound = animalSoundsDictionary[animal];
    if(animalSound != undefined){
        res.send(`The ${animal} says  '${animalSound}'`);
    }
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