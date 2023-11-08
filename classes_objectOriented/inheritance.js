class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Your user name is ${this.username}`);
    }
}

//ab maan lo ki hume ek kisi ko teacher ki power assign karni hai, yahi purane wale username se

class teacher extends user {
    constructor(username, email, password) {

        super(username)         //ab yaha pe same context nahi h lekin class ka yahi fayda hai ki hum ooper wale function k variable(this.username) ko yaha laa sakte hai with the help of super() syntax. ye super syntax dekhega ki extends kisse ker rahe h or waha k varible ki value ko le lega, no need of call.

        this.email = email
        this.password = password
    }

    addCourse (){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher ('shubham', 'teacher@gmail.com', '12345')

const masalaChai = new  user ('Singh')

chai.addCourse()
masalaChai.logMe()

console.log(chai instanceof teacher);