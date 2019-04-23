const myPromise = new Promise(function(resolve, reject) {
  // Let's resolve this promise in 10 sec.
  setTimeout(function() {
    resolve('yeah !')
  }, 5000)
})

const myPromise2 = new Promise(function(resolve, reject) {
  // Let's resolve this promise in 8 sec.
  setTimeout(function() {
    resolve('Another promise')
  }, 6000)
})

myPromise
  .then(function(result) {
    console.log(result) // should print 'yeah' after 10 seconds
    return 'lalalalala'
  })
  .then(function(result2) {
    console.log(result2) // should print 'lalalalala'
    return myPromise2
  })
  .then(function(result3) {
    console.log(result3) // should print 'another promise' after 8 sec
  })
