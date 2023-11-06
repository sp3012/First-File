function printHello () {
    console.log('Hello world');
}

//printHello()

// to add two numbers

function addTwoNum (num1, num2){
    console.log(num1 + num2);
}

// addTwoNum(4,5)

function loginUserMessage (username) {
    if (username === undefined) {
        console.log('Please login first');
        return
    }
    console.log(`${username} just logged in`);
    return
}

//console.log(loginUserMessage('Shubham'))

// write a program to calculate the value of unlimited added  products

// apply three dot in parameter to accept unlimited value in the argument. Printred value would be in array.
function calculateCartPrice (...product1) { 
    return product1
}

//console.log(calculateCartPrice(100, 200, 500, 7800))

// to pass object into a function. 1. first define a object. 2. Then pass it into a function by giving any parameter to the function, But while executing the argument should be object name.

const user = {
    username: 'Shubham',
    price: '700'
}

// we have taken user2 as a parameter because now we can use it call any object, if multiple object are present.
function passObjectInFunction (user2) {
    console.log(`The ${user2.username} have bought a product with amount ${user2.price}`);
}


// now here we have used argument user because now we are calling objects of user with common function username and price values.
//passObjectInFunction(user)


// we can directly pass object into parameter of function.
// passObjectInFunction({
//     username: 'Shubham',
//     price: '700'
// })

// passing array into a function.
const newArray = [100, 400, 200, 700]

function passArrayInFunction (getArray) {
    return getArray[2]
}

//console.log(passArrayInFunction(newArray))


// just similar to oject we can also pass the array directly into function.
//console.log(passArrayInFunction([500, 700, 500, 800]))

