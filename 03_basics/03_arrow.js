const user = {
    userName: 'Shubham',
    price: 999,

    welcomeMessage: function (){
        //console.log(`${this.userName}, welcome to my website` ); //'this' is used to call, the variable from same context
        //console.log(this);    //"this" will print all the context   {this refer's to the context of "object"}
    }    
}
user.welcomeMessage()

//in browser the global object is 'window' object
// "this" keyword work's in function

// function thisKeywordWorking () {
//     emailId = 'shubham@gmail.com'
//     console.log(this);
// }
// thisKeywordWorking()

// const thisKeywordWorking = () => {
//     emailId = 'shubham@gmail.com'
//     console.log(this);
// }
// thisKeywordWorking()
//hence "this" keyword doesn't work's in arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,7));

//another way of representing arrow function by eleminating curly braces {note: return can only be written in curly braces only}.

const addTwo = (num1, num2) => (num1 + num2) //NOTE: after arrow the value should be in bracis to avoid any error in future, or evaluating any other value like object
console.log(addTwo(5,7));

//arrow functions denotion

// () => {}
// () => ()


//++++++++++++++++++++ Imediately invoked function +++++++++++++++++++++++++++++++++=

(function chai () {
    console.log(`Shubham Kumar`);
})();

//1. to execute immediatly any function IIFE(immediaty invoked function experession) function is used
//2. sometimes global variable may pollute scope variables, hence to eleminate this prolem IIFE is used.

// ()() //syntax

( () => {
    console.log('shubham Kumar is a good boy');
})();


( (user) => {
    console.log(`${user} is a good boy`);
})('Shubham Kumar Singh');

//Conclusion:
//1. if printing two consecutive IIFE then semi colon is must after completion of each IIFE
//2. IIFE can be applied on arrow functions as well.
//3. we can pass parameter, and can give arguments as well.


