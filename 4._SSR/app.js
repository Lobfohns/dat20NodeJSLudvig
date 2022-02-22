const express = require("express");
const app = express();

app.use(express.static("public"));

// fs stands for FileSystem
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();

const footer = fs.readFileSync("./public/components/footer/footer.html".toString());

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const themepark = fs.readFileSync("./public/pages/themepark/themepark.html").toString();

const frontpagePage = nav + frontpage + footer;
const themeparkPage = nav + themepark + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/themepark", (req, res) => {
    res.send(themeparkPage);
});





app.listen(8080, () => {
    console.log("server is running on", 8080);
});