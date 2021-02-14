/* exported isVowel */
function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (var i = 0; i < char.length; i++) {
    if (char === vowel[i]) {
      return true;
    } else {
      return false;
    }
  }

  // if (char === 'a' || char === 'e' | char === 'i' || char === 'o' | char === 'u') {
  //   return true;
  // } else {
  //   return false;
  // }
}
