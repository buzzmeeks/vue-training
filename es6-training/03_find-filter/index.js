// -----------------------------------------------------------------
// ES6 brings a lot utility functions on Array prototype
// - find
// - filter
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
// find :
// can return the first element of an array that matches a condition
// -----------------------------------------------------------------

const element = array.find(condition)
// the *condition* function will be applied to each element of array
// if it returns true, the element being looked on will be the element returned
// and *find* will stop its process

// To find a student named 'Varys'
const student = students.find(function(student) {
  if (student.name === 'Varys') {
    return true
  }
})
// is equivalent to
const student = students.find(function(student) {
  return student.name === 'Varys'
})
// is equivalent to
const student = students.find(student => {
  return student.name === 'Varys'
})
// is equivalent to
const student = students.find(student => student.name === 'Varys')

// -----------------------------------------------------------------
// filter :
// return an array of all the elements of an array that match a condition
// -----------------------------------------------------------------

const elements = array.filter(condition)
