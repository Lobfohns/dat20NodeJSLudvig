const express = require("express");
const app = express();

app.use(express.static("public"));

// console.log(require("./dinosaurs/dinosaurs.json"));
// const { calculateAmountOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js");
// console.log(calculateAmountOfCoolDinosaurs());

const dinosaurrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaurrouter.router);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});


app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html")
});
// console.log(__dirname);


app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});



// app.listen(8080, () => {
    //console.log("the server is running", 8080);
//}); 




//npm run "script-name" to run script
// $env:PORT=3000 to change port to 3000
//nodemon.cmd app.js to make it run in nodemon and we get the new port printed with console log.

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
    console.log("the server is running on port", server.address().port);
});
