/* exported compact */
function compact(array) {
  var omits = [false, null, NaN, 0, undefined, ''];

  for (var i = 0; i < array.length; i++) {
    array[i].filter(omits);
  }
  return array;

}
