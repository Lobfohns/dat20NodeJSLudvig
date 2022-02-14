// Import express, 2 ways
// const app = require("express")();
const express = require("express");
const app = express();

//We would like our app to setup and use something. Doing some body parson
// This means it will allow us to parse some json
app.use(express.json());


// req = request, res = response
        // endpoint     callback function
app.get("/", (req, res) => {
    res.send({ message: "we did it!" });
}); 

app.get("/welcome", (req, res) => {
    res.send({ message: "welcome" });
}); 

app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);

});

app.listen(8080);

