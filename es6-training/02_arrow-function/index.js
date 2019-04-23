// -----------------------------------------------------------------
// Arrow functions have two different purposes :
//
// - syntax shortcut for functions, to feel closer to functionnal
// programming
//
// - keep the context (this) of where the function has been
// declared
//
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// syntax shortcut
// -----------------------------------------------------------------
const maFonction = function(x, y) {
  const sum = x + y
  return sum
}
// is equivalent to
const maFonction = (x, y) => {
  const sum = x + y
  return sum
}

// when there is only one argument, parentheses are not needed
const maFonction = function(a) {
  const sum = a + 2
  return sum
}
// is equivalent to
const maFonction = a => {
  const sum = a + 2
  return sum
}

// when the function only contains a return instruction,
// brackets and 'return' are not needed
const maFonction = function(x, y) {
  return x + y
}
// is equivalent to
const maFonction = (x, y) => x + y

// this is so pretty !

// -----------------------------------------------------------------
// *this* reminder:
// *this* is usually the object on which on the function is called
// or, in other words, the object it 'belongs' to
// -----------------------------------------------------------------

const o1 = {
  prop1: 3,
  test: function() {
    console.log(this.prop1)
  }
}

// will print 3, because when executed, *this* for test() is o1
// and o1.prop1 === 3
o1.test()

function test2() {
  console.log(this.prop1)
}

// will print *undefined* because test2 does not belong to any object
// and therefor *this* does not exist
test2()

// -----------------------------------------------------------------
// keeping this intact
// -----------------------------------------------------------------

const o2 = {
  prop1: 4,
  prop2: 3,
  doSomething: function(x) {
    const addProp1 = function(a) {
      return this.prop1 + a
    }
    const addProp2 = function(b) {
      return this.prop2 + b
    }
    console.log('Adding prop1 ', addProp1(x))
    console.log('Adding prop2 ', addProp2(x))
  }
}

// This will print something that is not a number
// because when addProp1 and addProp2 are called
// they have no *this*
o2.doSomething(5)

const o3 = {
  prop1: 4,
  prop2: 3,
  doSomething: function(x) {
    const addProp1 = a => this.prop1 + a
    const addProp2 = b => this.prop2 + b
    console.log('Adding prop1 ', addProp1(x))
    console.log('Adding prop2 ', addProp2(x))
  }
}

// This will work as expected
o3.doSomething(5)
