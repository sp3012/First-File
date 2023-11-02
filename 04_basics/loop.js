// for loop
// while, do while loop


//++++++++++++++++ forof loop ++++++++++++++++++++++++++++++++++++++++++++++++++++

// objects, string, array are itetrable. Hence loop can be applied
// forof can be applied on array, string, map.
// [NOTE:- forof loop won't work on object]


const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello Shubham"

for (const greet of greeting) {
    //console.log(greet);
}

const map = new Map ()
map.set('IN', 'India')
map.set('USA', 'United States of Americe')
map.set('Fr', 'France')
map.set('IN', 'India')   //again adding key values won't be going to print as it prints only unique key and values

//console.log(map);

for (const [anyThing] of map) {
    //console.log(anyThing);
}

//[NOTE: if we directly print the map, then each pair of key and values, will come out as a new array]
//[NOTE: to extract out keys and values of the map, apply [] to the iteration name of the forof loop. Moreover, if each key and value wants to extract then mention different name to key any value in the oteration [] name.]

for (const [shubham, singh] of map) {
    //console.log(shubham, singh);
}

//++++++++++++++++++++++++++++++ forin loop +++++++++++++++++++++++++++++++++++++++

// can be applied on object

const myObject = {
    js: 'java Script',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const printobject in myObject) {
    //console.log(printobject);
}
//this code will print only key of the object, to print values of the object the syntax is objectName[keyname]

for (const printobject in myObject) {
    //console.log(`${printobject}, ${myObject[printobject]}`);
}

//print array with the help of forin loop

const checkArray = [1, 2, 3, 4, 5]

for (const printArray in checkArray) {
    //console.log(printArray);
}

// forin loop provides key(index value) of the array. Hence to print value of that key syntax is same as object

for (const printArray in checkArray) {
    //console.log(checkArray[printArray]);
}


// forin loop on map 

for (const printMap in map) {
    console.log(printMap);
}
//[NOTE: MAP AREN'T IETRETABLE]

// ++++++++++++++++++++++++++   foreach   +++++++++++++++++++++++++++++

//[NOTE: on array apply forof, on object apply forin loop]