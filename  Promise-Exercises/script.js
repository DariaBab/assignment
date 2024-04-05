// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result
// of three arithmetic operations in sequence. Start with a number,
// then add 5, multiply by 3, and finally subtract 2.

const operationNumbers = {
  startNum: 4,
  addNum: 5,
  multiplyNum: 3,
  subtractNum: 2,
};

const mathPromise = new Promise((resolve) =>
  resolve(operationNumbers.startNum)
);

mathPromise
  .then((previousResult) => previousResult + operationNumbers.addNum)
  .then((previousResult) => previousResult * operationNumbers.multiplyNum)
  .then((previousResult) => previousResult - operationNumbers.subtractNum)
  .then((finalResult) => console.log(finalResult));

//   Exercise 2: String Manipulation
//   Write a promise chain that takes a string, converts it to uppercase,
//   then reverses it, and finally appends the string "-finished" at the end.
//   Log the final result. Use `then` for every phase

const myString = "I am a reversed string";

const stringPromise = new Promise((resolve) => resolve(myString));

stringPromise
  .then((previousResult) => previousResult.toUpperCase())
  .then((previousResult) => previousResult.split("").reverse().join(""))
  .then((previousResult) => (finalResult = previousResult + "-finished"))
  .then((finalResult) => console.log(finalResult));

//   Exercise 3: Array Filtering and Mapping
//   Write a function compareToNum that takes a number as an argument and returns a Promise
//   that tests if the value is less than or greater than the value 10 (reject otherwise)

function compareToNum(num, isAboveNum) {
  return new Promise((resolve, reject) => {
    if (num >= isAboveNum) {
      reject();
    }
    resolve(isAboveNum, num);
  })
    .then(() => console.log(`${isAboveNum} is greater than ${num}`))
    .catch(() => console.log("error"));
}

compareToNum(10, 5);

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises.
// First, wait 2 seconds, then log "Hello", wait another second,
// and log "World!". Each step should be done in a separate .then().

const delayedPromise = () =>
  new Promise((resolve) => setTimeout(resolve, 2000));

// const greeting = async () => {
//     await delayedPromise()
//     console.log("Hello");
//     await delayedPromise()
//     console.log("World!");
// }

// greeting()

delayedPromise()
  .then(() => {
    console.log("Hello");
    return delayedPromise();
  })
  .then(() => {
    console.log("World!");
  });

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data.
// Use a try/catch block within a .then() method to handle JSON parsing errors.
// If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// Bonus
// Make an async await version

const JSONString =
  '{"name":"John Doe","age":30,"email":"johndoe@example.com","address":{"street":"123 Main St","city":"Anytown","state":"NY","zip":"12345"},"isActive":true,"skills":["JavaScript","Python","SQL"],"education":{"degree":"Bachelor\'s","major":"Computer Science","school":"University of Anytown"}}';

// function parseJSONString(JSONString) {
//     return new Promise((resolve, reject) => {
//         try {
//             const parsedData = JSON.parse(JSONString)
//             resolve(parsedData);
//         } catch(error) {
//            reject("Invalid JSON")
//         }
//     })
// }

// parseJSONString(JSONString)
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

async function parseJSONString2(JSONString) {
  try {
    const parsedData = await JSON.parse(JSONString);
    console.log(parsedData);
  } catch (error) {
    console.log("Invalid JSON");
  }
}

parseJSONString2(JSONString);



// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds
// function combine(prmX, prmY) {
//   return Promise.all([prmX, prmY]).then((values) => {
//   return values[0] + values[1];
//   });
// }
// // `fetchX()` should return a promise that is resolved to 25 immediately
// // and `fetchY()` should return a promise that is resolved after 2 seconds to 17
// combine(resolveImmediate(), resolveDelayed())
// .then((sum) => {
// console.log(sum);
// });


function resolveImmediate(num1) {
    return new Promise((resolve) =>
    resolve(num1)
    )
}

function resolveDelayed(num2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num2)
        }, 2000)
    })
}

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
  return values[0] + values[1];
  });
}

combine(resolveImmediate(25), resolveDelayed(17))
.then((sum) => {
console.log(sum);
})
