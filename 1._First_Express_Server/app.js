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
        

app.get("/clientgreeting/:name", (req, res) => {
    res.send({ greeting: `hello there, ${req.params.name}`});
});

//Kangaroo facts
//url kangaroofacts?cankick=true
app.get("/kangaroofacts", (req, res) => {
    res.send(req.query);
})


app.get("/welcome", (req, res) => {
    res.send({ message: "welcome" });
}); 

app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);

});

app.listen(8080, () => {
    console.log("server is running on port", 8080);
});



// How can i send data with a get request???
// Path variable        url:/1
// query string         url:/kangaroofacts?cankick=true