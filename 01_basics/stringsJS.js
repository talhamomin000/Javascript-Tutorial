let myString = "Hello"

const strcount = 10

console.log(`${myString} this is my ${strcount} strings`)

// console.log(myString+strcount+"world")

//another way to declare string

const myName = new String('Talha Momin')
// console.log(typeof myName)
console.log(myName[2])
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.indexOf('a'))
console.log(myName.substring(0,6)) //cannot use negative value
console.log(myName.slice(-5,-1))
console.log(myName.trim())

let newString = "talha-saad-uzma-saima-khalid-ayan"

newString.split('-')

console.log(newString.split('-'))