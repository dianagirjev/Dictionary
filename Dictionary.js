const dictionary = [];
let counter = 0;

function addWord() {
  let word = document.getElementById("wordToAdd").value;
  dictionary[counter] = word;
  ++counter;
  return false;
}

function searchWord() {
  let word = document.getElementById("wordToSearch").value;
  let found = false;
  for (let i = 0; i < dictionary.length; ++i) {
    if (dictionary[i] === word) {
      found = true;
      break;
    }
  }
  if (found === true) {
    alert("Dictionary contains this word.");
  } else {
    alert("Dictionary doesn't contain this word. First you need to add it.");
  }
  return false;
}
