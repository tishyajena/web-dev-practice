const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "abc", password: "123" })
        }
        else {
            reject('Error: JS went wrong')
        }
    }, 1000);
})

async function consumePromise() {
    try {
        const response = await promiseOne;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise();

// You place async before a function declaration. This does one specific thing: it guarantees that the function will always return a Promise.

// The await keyword can only be used inside an async function.
// When you put await in front of a Promise, it pauses the execution of that specific async function until the Promise settles (either resolves or rejects).
