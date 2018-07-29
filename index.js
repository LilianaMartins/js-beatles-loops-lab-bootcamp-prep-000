var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,instruments) {
  const myArray = [];

  for (let i = 0; i < musicians.length; i++) {
  myArray.push(`${musicians[i]} plays ${instruments[i]}`)
}

return myArray

}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];


function johnLennonFacts(facts) {

  const factsOutput = [];

  let i = 0
  while (i < factsOutput.length) {
    factsOutput.push(`${facts[i]}!!!`)
    i++
  }

}
