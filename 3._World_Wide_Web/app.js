const express = require("express");
const app = express();

app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});


app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html")
});
console.log(__dirname);


app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});



app.listen(8080, () => {
    console.log("the server is running", 8080);
});


