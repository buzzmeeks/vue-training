// -----------------------------------------------------------------
// ES6 brings a lot utility functions on Array prototype
// - map
// - reduce
// -----------------------------------------------------------------

// A list of students and their score
const students = [
  { name: 'Jean-Michel', score: 12 },
  { name: 'Zoé', score: 1 },
  { name: 'Nathalie', score: 15 },
  { name: 'Thanos', score: 19 },
  { name: 'Varys', score: 3 },
  { name: 'Chouchen', score: 8 },
  { name: 'Alphonso', score: 14 }
]

// -----------------------------------------------------------------
// map :
// parse an array and create an another array of the same length
// by applying a function on each item of the parsed array
// -----------------------------------------------------------------

// *functionToApply* will be applied on each item of *myArray*
// what is returned by this function, will become the element of *newArray*
// at the same index of the *myArray* item being looked at
const newArray = myArray.map(functionToApply)

// students that have a grade above 10 will pass,
// others will fail
// let's create an array of student with a pass/fail boolean
const studentsBool = students.map(function(student) {
  return {
    name: student.name,
    pass: student.grade >= 10
  }
})
// is equivalent to
const studentsBool = students.map(student => {
  return {
    name: student.name,
    pass: student.grade >= 10
  }
})
// is equivalent to
const studentsBool = students.map(student => ({
  name: student.name,
  pass: student.grade >= 10
}))

// -----------------------------------------------------------------
// reduce :
// parse an array and create something else through an accumulator
// -----------------------------------------------------------------

// reduce take 2 parameters :
// - the function that will be applied to each element of the array
// - the initial state of the accumulator
// The function applied take, as arguments, the previous state of the accumulator
// and the item of the array being looked at
// It should always return the new state of the accumulator
const somethingElse = myArray.reduce(function(accumulator, item) {
  // do something
  return accumulator
}, initialAccumulator)

// if we want to get the mean value of the class
// we can use a reduce to transform the array into a sum
const sum = students.reduce(function(acc, student) {
  return acc + student.grade
}, 0)
// is equivalent to
const sum = students.reduce((acc, student) => {
  return acc + student.grade
}, 0)
const sum = students.reduce((acc, student) => acc + student.grade, 0)

// and then

const mean = sum / students.length
