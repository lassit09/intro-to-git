//Requiring Express
var express = require('express');
var app = express();

//This is the homepage
app.get("/", function(req, res) {
    res.send("This is the homepage.");
});

//Catchall
app.get("*", function(req, res) {
    res.send("THIS PAGE COULD NOT BE FOUND.");
});

//Server is listening for requests
app.listen(3000, () => console.log('Example app listening on port 3000!'));