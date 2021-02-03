/* exported filterOutNulls */
// function filterOutNulls(values) {
//   for (var i = values.length - 1; i >= 0; i--) {
//     if (values[i] === null) { values.splice(i, 1); }
//   }
//   return values;
// }

function filterOutNulls(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
