const express = require("express");
const app = express();


app.use(express.json());


const beersArray = [
    {
        id: 1,
        name: "Spectrum",
        brewer: "Ølsnedkeren"
    },
    {
        id: 2, 
        name: "Hazy Jane", 
        brewer: "Brewdog"
    }
];


//GET beers
app.get("/beers", (req, res) => {
    res.send({beersArray});
}); 


//GET Beer by ID
app.get("/beers/:id", (req, res) => {
    res.send(beersArray.find(beer => beer.id === parseInt(req.params.id)));
}); 


//POST a beer
app.post("/beers", (req, res) => {
    beersArray.push(req.body);
    res.send(req.body);
});



//PUT should maybe call putBeer something else idk if it matters.
app.put("/beers/:id", (req, res) => {
    const idToPut = parseInt(req.params.id)
    const indexNr = beersArray.findIndex(beer => beer.id === idToPut)
    const putBeer = req.body
    if (indexNr !== -1) {
        putBeer.id = idToPut
        beersArray[indexNr] = putBeer
        res.send(putBeer);
    }
})

//PATCH
app.patch("/beers/:id", (req, res) => {
    // this turned out to not be needed const beerToPatch = req.body;
    // Same with this beerToPatch.id = parseInt(req.params.id);

    const patchBeerById = parseInt(req.params.id)

    beersArray.forEach(beer => {
        if (beer.id === patchBeerById) {
            if (beer.name !== req.body.name && req.body.name !== undefined) {
                beer.name = req.body.name
            }
            if (beer.brewer !== req.body.brewer && req.body.brewer !== undefined) {
                beer.brewer = req.body.brewer
            }
        }
    })
    res.send(beersArray);
})




//DELETE by id

app.delete("/beers/:id", (req, res) => {
    const idToDelete = parseInt(req.params.id)
    const indexNr = beersArray.findIndex(beer => beer.id === idToDelete)
    beersArray.splice(indexNr, 1)
    res.send(beersArray);
})







app.listen(8080);