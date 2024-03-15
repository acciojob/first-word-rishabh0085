function firstWord(s) {
  // Trim leading spaces to ensure the split works correctly even if the string starts with a space
  if (!s) {
    return '';
  }
  const trimmedString = s.trimStart();
  const initialWord = trimmedString.split(' ');
  let firstWord = initialWord[0];
  return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
