// class and constructor

class user {
    constructor (username, email, password) {
            this.username = username
            this.email = email
            this.password = password
    }

    encryptPassword () {
        return `${this.password}abc`
    }

    changeUsername (){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new user ('shubham', 'xyz@gmail.com', '123')

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//ab yahi same cheez hum without class, yani function ki help se bhi ker sakte hai lekin fir hume prototype bnane honge.

function user2 (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

user2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new user2 ('shubham', 'xyz@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());