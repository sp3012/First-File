// objects 

// Q: Define a symbol and then define it in object and print it.

const mySym = Symbol('first symbol')

const jsUser = {
    name: 'Shubham Kumar',
    [mySym]: 'second symbol', // to define symbol in object by [] brackets
    age: 24,
    location: 'Noida',
    email: 'kumarshubham3012@gmail.com',
    isLoggedIn: false
}

//  console.log(jsUser.email);
// console.log(jsUser['email']); // shortcut to extract value of the object without dot.
// console.log(jsUser[mySym]); 
// console.log(typeof jsUser[mySym]);

//console.log(jsUser);
jsUser.email = 'baaptera@yahoo.com' // to change any value of any key inside of the object

// console.log(jsUser);

Object.freeze(jsUser)

jsUser.email = 'baaptera@microsoft.com' 
//console.log(jsUser);


// ++++++++++++++++++++ Destructuring of the objects +++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName: 'Stock market basics in hindi',
    price: '999',
    courseInstructor: 'Shubham' 
}

//course.courseInstructor

const {courseInstructor: Instructor} = course  //if we have to extract any key from object then convert it into some small key and then you can use it mutiple times without dot notation

console.log(Instructor);

// +++++++++++++++ API are in objects(without name, i.e. in curli braces {}) (they may be in array, but inside data will be in object) +++++++++

