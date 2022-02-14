


function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

running("Anders");

doActionWithSomeone(running, "Anders");

// Det er vigtigt hvor man har console.log fordi ellers kan man få undefined.
//Ovenover er console loggen i const hvilket betyder man ikke skal have return.
//Nedenunder er console loggen i kaldet på function fordi der er return i den originale callback function.


function doActionWithSomeoneWithReturn(anyFunctionReference, name) {
    return anyFunctionReference(name);
}


const fishing = (name) => `${name} is fishing`
console.log(doActionWithSomeoneWithReturn(fishing, "Alex"));


const balling = (name) => console.log(`${name} is balling`);
doActionWithSomeone(balling, "Ludvig");
doActionWithSomeone(name => console.log(`${name} is balling hej`), "Ludvig");




