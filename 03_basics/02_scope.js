//global varibles can be globally used in entire code irrespective of the {}. However, scope varibles can only be used within the block only i.e {} (functions and if else (not in objects))

function one () {
    username = 'Shubham'

    function two () {
        website = 'babavector'
        console.log(username); //here username executed because a child can take variable from parent but parents can't take varible from child. Hence below mentioned website throug the error.
    }
    //console.log(website);
    two()
}
one()



function addOne (num1) {
    return num1 + 1 
}

console.log(addOne(5))

const addTwo = function (num2) {
    return num2 + 2
}

console.log(addTwo(5));
//hence we can declare functions with the help of variables as well.