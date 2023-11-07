const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Database call, cryptography, network

  setTimeout(function () {
    //console.log('async task is complete');
    resolve();
  }, 1000);
});

//.then ka direct relation hai reaolve se. ab resolve ko or then ko connect karne k lye async task me resolve() syntax dena hoga tab jake promise resolve hoga/promise.then run hoga.
promiseOne.then(function () {
  //console.log('Promise consumed');
});

//another method to declare above promise and resolve.

new Promise(function (resolve, reject) {
  setTimeout(function () {
    //console.log('Shubham bhai new method se async task done');
    resolve();
  }, 1000);
}).then(function () {
  //console.log("Promise completed by new mwthod as well");
});

//resolve k ander hum kuch data bhi de sakte hai, chahe wo object ho, array ya or kuch, or fir usko promise.then me jake le sakte hai. Let's take an example.

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "ShubhamKumar",
      email: "shubham@example.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  //resolve se jo bhi data aa raha hai humne usko ser bolke function me de dya. or fir us object ki value ko extract kr lya.
  //console.log(user);
});

//ab humne resolve me jo object dya the uski value ko return karna hai, to ese me chain functioning kaam me aata hai. Lets take an example.

const promiseFour = new Promise(function (resolve, reject) {
  setInterval(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "xyz@123",
        password: "12345",
      });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username; //ab hum return me user k ander se username ko lena chah rahe hai, uske lye chainfunctioning kaam me aaegi, yani ek or .then
  })
  .then(function (userKaUsername) {
    console.log(userKaUsername);
  })
  .catch(function (error) {
    //.catch is used to refer reject
    //console.log(error);
  })
  .finally(function () {
    //console.log('The promise is either reolved or rejected.');  //.finally   use karte hai hum last me taki ye pata rahe ki haan poora promise run ho gya hai ab chahe wo resolve hua ya reject hua but poora hua h. By default ye run hota hi hai.
  });

//async await ka use. agar async se function bana dya to hum await laga sakte hai.
//another method to show reject with the help or async await and try catch

const promiseFive = new Promise(function (resolve, reject) {
  setInterval(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "javascript",
        password: "12345",
      });
    } else {
      reject("ERROR: Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; //async await me try catch wala syntax dena hoga, kuki result awaited k baad agar error aaya to usko handle karne k lye catch hai.
    //console.log(response);
  } catch (error) {
    //console.log(error);
  }
}

consumePromiseFive();

//kisi ek url se data lya or ab uske database se information nikalni hai.

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')     //aba yaha per fetched data string me hai to ab isko json me convert karna hoga.
    const data = await response.json()   //ab kuki string ko json/object me convert hone me time lagega so isme hum await laga denge.
    console.log(data);
  } catch (error) {
    console.log('E: ', error);
  }
}

//getAllUsers()

//ab program console log me pending isliye dikha raha h kuki data ko fetch hone me time lag raha hai.

//ab uper wale code ko .then and .catch wale method se karo.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);     //isse purane wale then ke data ko lega ye wala then
})
.catch(() => {
  console.log('Error');
})

//now here is no need to await.

//+++++++++++++++++++++++++++++++++++++++++ FETCH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//study fetch from mdn.

// fetch k lye ek alag se special qeue(micro task qeue/fetch qeue/priority que) banti hai or usko priority pehle di jati hai, isliye agar koi async function pehle dya h lekin humne fetch ko baad me dya h to fri bhi pehle fetch execute hoga or uske baad async function execute hoga. for preference see screenshot image.(irrespective of setInterval time)

