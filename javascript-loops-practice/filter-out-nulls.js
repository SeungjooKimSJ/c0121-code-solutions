/* exported filterOutNulls */
function filterOutNulls(values) {
  var newValue = values.filter(Boolean);
  return newValue;
}
