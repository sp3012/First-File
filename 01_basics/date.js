const myDate = new Date

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

const newDate = new Date(2023, 2, 12, 5, 40, 43)

console.log(newDate.toLocaleString('en-IN'));

// now time will come in miliseconds
console.log(Date.now());

// to convert timespan(milisecond) into seconds divide it by 1000
console.log(Math.floor(Date.now()/1000))