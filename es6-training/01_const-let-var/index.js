// -----------------------------------------------------------------
// 3 different ways to declare variables in ES6
// const, var, let
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// const
// - cannot be assigned again
// - arrays and objects are still mutable
// - making it the prefered way to declare variables
// -----------------------------------------------------------------

const number = 8

// this will throw an error
number = 10

const myArray = [2, 3, 7]

// this is ok
myArray[1] = 6
myArray[3] = 'abc'
myArray.push(14)

// this will throw an error
myArray = [4, 5]
myArray = 'abc'

const myObject = {
  prop1: 'a',
  prop2: 5
}

// this is ok
myObject.prop1 = 'c'
myObject.prop2 += 4
myObject.prop2 = 'o'
myObject.prop3 = 'aaa'

// this will throw an error
myObject = { a: 5 }

// -----------------------------------------------------------------
// let
// - can be assigned again
// - scoped to the current block only
// -----------------------------------------------------------------

let number = 8

// this is ok
number = 10

//
if (true) {
  let toto = 3
}

// this will throw an error
// toto exists in the if block only
console.log(toto)

// -----------------------------------------------------------------
// var
// - can be assigned again
// -----------------------------------------------------------------

var number = 8

// this is ok
number = 10

if (true) {
  var toto = 3
}

// this is ok
console.log(toto)
