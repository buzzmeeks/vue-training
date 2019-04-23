// -----------------------------------------------------------------
// Promises
// The promise design pattern is used to handle asynchronous operations
// ES6 has implements promises natively
// -----------------------------------------------------------------

// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.

// A promise object has, at any time, one of those 3 states :
// -- pending
// -- fulfilled
// -- rejected

// To create a promise
const myPromise = new Promise(executor)

// The executor is the function that will be able to tell
// when the promise is fulfilled (or errored)
// it takes 2 parameters : resolve and reject functions
// The promise usually resolve a result
const myPromise = new Promise(function(resolve, reject) {
  // Let's resolve this promise in 5 sec.
  setTimeout(function() {
    resolve('yeah !')
  }, 5000)
})

// We use .then() on a promise to access the resolved result
// .then takes a function as a parameter
// this function takes the resolved result as a parameter
myPromise.then(function(result) {
  console.log(result) // should print 'yeah' after 5 seconds
})

// if the .then function returns something
// we can chain our promise with another .then
// which will be resolving the previous value returned
myPromise
  .then(function(result) {
    console.log(result) // should print 'yeah' after 5 seconds
    return 'lalalalala'
  })
  .then(function(result2) {
    console.log(result2) // should print 'lalalalala'
  })

// .then function can return a promise
// the next .then will then resolve the
// resolved value of this promise
const myPromise2 = new Promise(function(resolve, reject) {
  // Let's resolve this promise in 6 sec.
  setTimeout(function() {
    resolve('Another promise')
  }, 6000)
})

myPromise
  .then(function(result) {
    console.log(result) // should print 'yeah' after 5 seconds
    return 'lalalalala'
  })
  .then(function(result2) {
    console.log(result2) // should print 'lalalalala'
    return myPromise2
  })
  .then(function(result3) {
    console.log(result3) // should print 'another promise' after 6 sec
  })
