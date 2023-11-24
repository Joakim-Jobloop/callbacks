function greet(name, callback) {
    console.log(`Hello, ${name}`)
    callback()
}

function sayGoodbye() {
    console.log("Goodbye!")
}

function sayWelcome() {
    console.log("Welcome!")
}


greet("John", sayGoodbye)
greet("John", sayWelcome)


function delayedGreeting(name, callback) {
    console.log(`Hello, ${name}`)
    setTimeout(()=> {
    callback()
    },1000)
}

// delayedGreeting("John", sayGoodbye)

const numbers = [1,2,3,4,5]

numbers.forEach(function (num) {
console.log(num *2)
})

numbers.forEach((num)=> console.log(num *2))

function multiply (a,b, callback) {
    const result = a * b
    callback(result)
}

function logResult(result) {
    console.log(`The result is: ${result}`)
}

function logResult2(result) {
    console.log(`The result is ALSO: ${result}`)
}

multiply(3,4, logResult)
multiply(3,4, logResult2)

// function stepOne(callback) {
//     console.log("Step 1 completed.")
//     callback()
// }

// function stepTwo(callback) {
//     console.log('Step 2 completed.');
//     callback();
//   }
  
//   function stepThree() {
//     console.log('Step 3 completed.');
//   }

//   stepOne(function() {
//     stepTwo(function() {
//         stepThree()
//     })
//   })

function stepOne() {
    return new Promise(resolve => {
        console.log("Step 1 completed.")
        resolve()
    })
}

function stepTwo() {
    return new Promise(resolve => {
        console.log("Step 2 completed.")
        resolve()
    })
}

function stepThree() {
        console.log("Step 3 completed.") 
}

async function performSteps() {
    await stepOne();
    await stepTwo();
    stepThree()
}

performSteps()


function fetchData(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => callback(data))
    console.log("Data: ", data)
}

function processData(data) {
    console.log("Data: ", data)
}

fetchData(processData)



