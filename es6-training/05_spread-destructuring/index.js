// -----------------------------------------------------------------
// ES6 give us new ways of assigning variables by extracting
// data from arrays and objects
// -----------------------------------------------------------------

// Spread operator *...* can expand an iterable
// so that its content can be used as arguments
function sum(x, y, z) {
  return x + y + z
}
const myArray = [2, 7, 14]

sum(myArray[0], myArray[1], myArray[2])
sum(...myArray)

// myOtherArray = [3, 2, 7, 14, 18, 24]

const myOtherArray = [3, myArray[0], myArray[1], myArray[2], 18, 24]
const myOtherArray = [3, ...myArray, 18, 24]

// new is ES2018, spread can be applied to object
const myObject = {
  b: 1,
  c: 3
}
// myOtherObject => a:8, b:1, c:3, d:6
const myOtherObject = {
  a: 8,
  ...myObject,
  d: 6
}
// useful to copy an object
const myCopy = { ...myOjbect }

// By destructuring we can unpack values from array or object
// and assign them directly to variables
const myArray = [10, 'i', 30]
const [a, b, c] = myArray
// a = 10
// b = 'i'
// c = 30

// A value by default can be given
const [a, b, c, d = 4] = myArray

// spread operator can be used to destructure everything else
const [first, second, ...hyenas] = [3, 6, 9, 10, 7, 14]
// first = 3
// second = 6
// hyenas = [9, 10, 7, 14]


// Object destructuring
const obj1 = {
  prop1: 5,
  prop2: 'yeah!'
}
const { prop1 } = obj1
console.log(prop1) // 5

const { prop1: cetteVariable } = obj1
console.log(cetteVariable) // 5

// With a default value
const { prop1: cetteVariable = 7 } = obj1
console.log(cetteVariable) // 5


const student = {
  name: 'Jean',
  lastname: 'Truc',
  note: 
  zkejr:
  lzer:
}
