
const router = require("express").Router();
const {calculateAmountOfCoolDinosaurs} = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ data: calculateAmountOfCoolDinosaurs });
});

router.get("/amountofcooldinosaurs", (req,res) => {

});

router.get("/coolestdinosaur", (req, res) => {
    if (req.query.cool.toLowerCase() === "yes") {
        res.send({ dinosaur: "Mosasaurus" });
    }
    res.send({ dinosaur: "T. Rex" });
});

module.exports = {
    router
};