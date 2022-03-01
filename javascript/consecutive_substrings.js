//i
  //string
//o
  //array of substrings
//e
  //at least be zero or more

function consecutiveSubstrings(string) {
  if (!string.length) {
    return [];
  }
  if (string.length === 1) {
    return [string]
  }

  //initialize substrings array
  const substrings = [];
  
  for (let i = 0; i <= string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.substring(i, j))
    }
  }

  return substrings
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
