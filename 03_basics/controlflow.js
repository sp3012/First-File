// nullish coalscing operator (??): null and undefined.\

// these operator eliminates null or undefined value and gives some real value.

const val1 = null ?? 10
const val2 = null ?? undefined ?? 10 ?? 20 //null or undefined hata k pehli value ko dega.

console.log(val1);
console.log(val2);

//terniary operator (?)

// falsy values:
// false, 0, -0, BigInt 0n, null, undefined, NaN

//Truthy values
// "0", 'False', " ", [], {}, function(){}