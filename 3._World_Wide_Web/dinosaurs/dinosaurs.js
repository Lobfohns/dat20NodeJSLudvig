const { coolDinosaurs, shittyDinosaurs } = require("./dinosaurs.json");

// console.log(coolDinosaurs);

/* Lidt random noter omkring at deconstructe et json object
const people = {
    first: "Frederik",
    second: "Thor"
}

const { first, second } = people;

console.log(first, second);
*/
function amountOfCoolDinosaurs() {
    return coolDinosaurs.length;
}

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}

