// WHY do we need to handle asynchronous
// Javascript is singled-threaded
// We don't want to block our application

// When do we need to handle asynchronous
// WE NEED TO HANDLE ASYNCHRONOUS BEHAVIOR WHEN WE FETCH :-)
// eveything that happens over the network: For instance a fetch.
// file handling
// setTimeout / setInterval
// databases

// Promise state
// pending
// fulfilled, when it is fulfilled it can be in two states
    // resolved or rejected

/* new Promise((resolve, reject) => {
    //resolve("Everything went well");
    try {
        resolve("Everything went well");
    } catch {
        reject("Something went wrong");
    }
    // reject("Something went wrong");
})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));
*/

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 4000);
    });
}

// IIFE - Immediately Invoked Function Expression
(async function callMyCustomPromise() {
    const message = await somethingGoodSomethingBad();
    console.log(message);
})()

async function anAsyncFunction() {

}
console.log(anAsyncFunction);

