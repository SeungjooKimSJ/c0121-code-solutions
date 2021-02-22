/* exported getValues */
function getValues(object) {
  var key;
  var newArr = [];

  for (key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
