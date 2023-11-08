class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Your user name is ${this.username}`);
    }

    static createId () {            //static karne k baad ab is method ka excess kisi k pass nahi rehta, chahe agar hume extend(inheritance) bhi krke usse excess le to bhi nahi hota.
        
        return `123`
    }
}

const chai = new user('shubham')
console.log(chai.createId());