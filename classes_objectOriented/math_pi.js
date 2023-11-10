// kya hum pi ki value ko change ker sakte hai, agar haan to kaise or agar na to ku?

//console.log(Math.PI);

Math.PI = 5         //over write karne ki kosis ki per nahi hua.
//console.log(Math.PI);

const createdObject = Object.getOwnPropertyDescriptor(Math, 'PI')       //(Math, 'PI') yaha isliye likhan pada kuki ye kisi object ki property nahi bata ta hai balki property ka descriptor(property) batata hai.

//console.log(createdObject);

// to is console log ne result dya {
//   value: 3.141592653589793,
//   writable: false,   // ab kuki yaha pe writable false hai islye, hum pi ki value ko overwrite nahi kar sakte kuki library bnane wale ne writable ko hardcore false kiya hai.
//   enumerable: false,
//   configurable: false
// }

const newObject= {
    name:'Shubham',
    course: 'Java Script',
    price: 2999
}

//console.log(Object.getOwnPropertyDescriptor(newObject, 'name'));

//result:-
//    {
//   value: 'Shubham',
//   writable: true,
//   enumerable: true,              //iteration true.
//   configurable: true
// }

//ab iski writable property ko false karke dekho.

Object.defineProperty(newObject, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(newObject, 'name'));

//result:-
// {
//     value: 'Shubham',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
