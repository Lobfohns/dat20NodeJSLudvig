const express = require("express");
const app = express();

app.use(express.static("public"));

// fs stands for FileSystem
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();

const footer = fs.readFileSync("./public/components/footer/footer.html".toString());

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const codesnippets = fs.readFileSync("./public/pages/codesnippets/codesnippets.html").toString();

const terminalcommands = fs.readFileSync("./public/pages/terminalcommands/terminalcommands.html").toString();

const theory = fs.readFileSync("./public/pages/theory/theory.html").toString();

const tools = fs.readFileSync("./public/pages/tools/tools.html").toString();


const frontpagePage = nav + frontpage + footer;
const codesnippetsPage = nav + codesnippets + footer;
const terminalcommandsPage = nav + terminalcommands + footer;
const theoryPage = nav + theory + footer;
const toolsPage = nav + tools + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/codesnippets", (req, res) => {
    res.send(codesnippetsPage);
});


app.get("/terminalcommands", (req, res) => {
    res.send(terminalcommandsPage);
});


app.get("/theory", (req, res) => {
    res.send(theoryPage);
});


app.get("/tools", (req, res) => {
    res.send(toolsPage);
});


app.listen(8080, () => {
    console.log("server is running on", 8080);
});