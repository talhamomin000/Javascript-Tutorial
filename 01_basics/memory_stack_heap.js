// stack(primitive)     heap(non-primitive)

let myname = 'talha';

let anotherName = myname;

anotherName = "saima"
myname = 'uzma'


console.log(anotherName)
console.log(myname)


let userOne = {
    email : "talha@gmail.com",
    upiId : '213@ybl'
}

let userTwo = userOne

userTwo.email = 'saad@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)

