// ++++++++++++++++++++++   this    +++++++++++++++++++++++++++++

const user = {
    username: 'Shubham Kumar',
    loginCount: 4,
    signedIn: true,

    getUserDetails: function (){
        //console.log('Got user details from database');
        //console.log(this.username);
        console.log(this);    //agar hum same object me bhi username ya koi key ki value ko lena chahte hai to is function wale ko nahi pata ki m konsa username lu. isliye this ka use karte hai. kuki ye this same context me hi bsa kaam krta hai. 
    }
}

// console.log(user.getUserDetails());
// console.log(this);      //lekin agar hum this ko global me use krenge to us time hume ek blank object milta hai node.js me. Lekin agar wahi m is global this ko browser me open karu to hume poori window as a object milti hai, jisme ander alag alag property hoti hai. 

//this use a variable


// +++++++++++++++   new    +++++++++++++++++++++

// new: to create a new constructor function(to create new context)

function userFun (username, loginCount, isLoggedIn){
    this.username = username;     //yaha per this.username ek varible ki tarah kaam kr raha hai or username k ander jo bhi value h usko apne ander assign ker raha hai.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this     //ab kuki humne this ki help se sab kuch le lya or usko return ker dya, ab us return ki hui value ko hum bahar globally use kr sakte hai. baise agar hum return this na bhi karte to bhi hum bahar parameter ki value ko deke le sakte the, kuki by default wo this yaha pe deta hi hai.
}

const userOne = new userFun('Shubham', 7, true)
const userTwo = new userFun('Singh', 12, false)  //ab humne neeche console me usertwo ka refrence bhi nahi dya lekin fir bhi value two ki print ho rahi h, kuki values ko over write ker dya gaya hai. isiliye "new" keyword ka aawiskar hua kuki wo apni ab ek alag storage banega(yani ek naya empty object create karega) or usi me aoni values ko store karega.


//console.log(userOne);
//console.log(userTwo);         //ab dono apni alag alag values denge kuki new laga dya hai.



// +++++++++++++++++++++++++ call  ++++++++++++++++++++++++++++++++++++++++++

function setUsername (username) {
    //complex database check/call hori h background me
    
    this.username = username
}

function createUsername (username, email, password) {
    
    setUsername.call(this, username)               //ab kuki username baki sare checks ko paar ker k aara h ooper wale function se isliye humne use yaha wale this username se nahi lya. To isliye ye username kuki same context me nahi balki ooper wale se aa raha hai, to isliye ye ese kaam nahi karega jb tak hum use call nahi ker lete.


    //call object work:- The object to be used as the current object(yani jis object me call ko laga rahe hai ab usko current object manta hai ye). Calls a method of an object, substituting another object for the current object (to call kisi doosre object ko current wale object me call karta hai).

    //lekin khali call karne se nahi hoga, kuki ab current object ne call to ker lya lekin pichle function k this.username ki value yaha tak aai nahi hai. so uske lye, kuki this agar global me lagao to ek empty object deta hai, isliye current object k setUsername me this k empty me pichle function k this.username ko store ker lenge, or ab function run karega.


    this.email = email
    this.password = password
}

const chai = new createUsername('shubham', 'xyz@gmail.com', '123')        
console.log(chai);          //ab yaha per email or password to aara h lekin username nahi aa para hai, kuki wo same context me hai hi nahi. 