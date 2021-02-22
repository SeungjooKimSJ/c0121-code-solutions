/* exported getKeys */
function getKeys(object) {
  var key;
  var newArr = [];

  for (key in object) {
    newArr.push(key);
  }
  return newArr;
}
