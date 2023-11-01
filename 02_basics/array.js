const myArr = [1, 2, 5, 7, true, 'Shubham']
// console.log(myArr[4]);

const myArr2 = [0, 1, 2, 3, 4, 5]

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

// myArr2.unshift(10)
// myArr2.shift()

// const newArr = myArr2.join()
// console.log(myArr2);
// console.log(typeof newArr);

//+++++++++++++ slice, splice +++++++++++++++++++++++++++++++++++

// const myn1 = myArr2.slice(1, 4)
// console.log('A', myn1);

// const myn2 = myArr2.splice()
// console.log('B', myn2);

// console.log(myArr2);

// const marvelHeros = ['Ironman', 'Spiderman', 'Thor']
// const dcheros = ['Superman', 'Batman', 'flash']

// marvelHeros.push(dcheros)


// combination with the help of concatination
// const combinedHeros = marvelHeros.concat(dcheros)
// console.log(combinedHeros);


// combination of two array with the help of the spread (applying three dot prior to the array name)
// const allNewHeros = [...marvelHeros, ...dcheros]
// console.log(allNewHeros);

// const oneMoreArray = [1, 2, 3, [4, 2], 6, [3, 5, [6, 3, 2], 4], 7]
// const combinedArray = oneMoreArray.flat(1)

// console.log(combinedArray);



// to an array via 'isarray'
// to convert anything into array 'from'
console.log(Array.isArray('Shubham'))
console.log(Array.from('Shubham'))


// to make anything (more than one varibales) into an array with the help of "of"
const score1 = 200
const score2 = 500
const score3 = 300

console.log(Array.of(score1, score2, score3));