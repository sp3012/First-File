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
    //console.log(printMap);
}
//[NOTE: MAP AREN'T IETRETABLE]

// ++++++++++++++++++++++++++   foreach   +++++++++++++++++++++++++++++

//[NOTE: on array apply forof, on object apply forin loop]

const newArray = ['js', 'cpp', 'java', 'rb', 'py']


// each k bracket me function lagao wo bhi without name, fir jo mrji wo kro
newArray.forEach( function (item) {
    //console.log(item);
}  )


//we can apply arrow function as well. bas function ka naam nahi dena hai.
newArray.forEach( (val) => {
    //console.log(val);
});

//if already function is present then uske naam ko bhi foreach k loop me function ki jagah per rakh sakte hai. EX.

function tryByFunctionName (shubham) {
    //console.log(shubham);
}

newArray.forEach (tryByFunctionName)  //give reference of the function



//function me kewal item hi nahi, uske index ya poore array or bhi kafi kuch ko le sakte hai.
newArray.forEach( (val, index, newArray) => {
    //console.log(val, index, newArray);
});


//[{}, {}, {}, {}]   array k ander object, foreach loop is used.

const objectInArray = [
    {
        language: 'Hindi',
        state: 'Up',
    },
    {
        language: 'Haryanvi',
        state: 'Haryana'
    },
    {
        language: 'Punjabi',
        state: 'punjab'
    }
]

objectInArray.forEach ( (val2) => {
    //console.log(val2.language);
} )

// if we want to extract any one particular item or want to apply condition on array item, then foreach loop doesn't work on this condition.
// basically we can say that foreach doesn't returns the value if applying condition.


//++++++++++++++++++++++++++   Filter  +++++++++++++++++++++

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const var3 = num2.filter( (item) => {
    return item > 4      //after applying scope{}, we have to give return, otherwise it will return empty object.... and if scope{} is not applying then write code in one word without applying {}, now no need of writing return.
} )
//console.log(var3);

//exctrating values of array by applying condition with the help of foreach

const num3 = []

num2.forEach( (item) => {
    if (item > 4) {
        num3.push(item)
    }
} )
//console.log(num3);

//write a program to extract book from any given database. Customer wants to apply filter as per his needs based on genre/edition/publish/title

//database of the book:-

const books = [
    {
        title: 'Book One',
        genre: 'fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book two',
        genre: 'Non-fiction',
        publish: 2000,
        edition: 2007
    },
    {
        title: 'Book three',
        genre: 'fiction',
        publish: 2002,
        edition: 2005
    },
    {
        title: 'Book four',
        genre: 'history',
        publish: 1971,
        edition: 2000
    },
    {
        title: 'Book five',
        genre: 'science',
        publish: 1961,
        edition: 1997
    },
    {
        title: 'Book six',
        genre: 'geography',
        publish: 2001,
        edition: 2008
    },
    {
        title: 'Book seven',
        genre: 'math',
        publish: 1997,
        edition: 2013
    },
    {
        title: 'Book eight',
        genre: 'history',
        publish: 1981,
        edition: 2013
    }
]

// const booksWithGenre = books.filter( (collection) => {
//     return collection.genre === 'history'
// } )

//console.log(booksWithGenre);

//now user wants books whose publication is after 2000.

const booksWithPublication = books.filter( (collection) => {
    return collection.publish >= 2000
} )

//console.log(booksWithPublication);

//+++++++++++++++++++++++++++++    map    ++++++++++++++++++++++++++++++++++++++++++++

//add 10 to each item of the array.

const add10 = [1, 2, 3, 4, 5, 6, 7, 8]

const add10Print = add10.map( (item) => item + 10 )
//console.log(add10Print);


//++++++++++++++++++++++++++++++++ chaining +++++++++++++++++

//we can apply xyz.map.map.filter.map and so on. lets take an example.

const chainPractise = add10
.map( (num) => num * 10 )
.map( (num) => num + 2 ) //isme jo num aaega uspe already pichle map ki condition lagi hui hogi
.filter( (num) => num >= 40 ) //isme num pichle dono map lagne k baad aaegi.

//console.log(chainPractise);

//+++++++++++++++++++++++++++++  reduce  ++++++++++++++++++++++++

// reduce me accumulator or current value hoti hai. initiate krne k lye accumulator ko ek value deni hi hoti hai. Uske baad wo apne aap chlta rehta hai. Lets take an ex.

const myNum = [1, 2, 3]

// let myNumForPrint = myNum.reduce( function (acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
// }, 0)

//console.log(myNumForPrint);

//intial value funtion khatam hone k baad dete hain.


//reduce with the help of arrow function
myNumForPrint = myNum.reduce( (acc, currval) => acc + currval, 0 )
//console.log(myNumForPrint);

//calculate the amount of a shopping cart when a user is buying different kind of course.

const shoppingCart = [
    {
        cousreName: 'js course',
        price: 2999
    },
    {
        cousreName: 'mobile app course',
        price: 5999
    },
    {
        cousreName: 'data science course',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceToPay);