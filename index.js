var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,instruments) {
  const myArray = [];

  for (let i = 0; i < musicians.length; i++) {
  myArray.push(`${musicians[i]} plays ${instruments[i]}`)
}

return myArray

}

function johnLennonFacts(facts) {
  const factsOutput = [];

  let i = 0
  while (i < factsOutput.length) {
    factsOutput.push(`${facts[i]}!!!`)
    i++
  }

}
