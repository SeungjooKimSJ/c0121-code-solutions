/* exported reverseWord */
function reverseWord(word) {
  var newStr = '';

  for (var i = word.length - 1; i >= 0; i--) {
    newStr += word[i];
  }
  return newStr;
}
