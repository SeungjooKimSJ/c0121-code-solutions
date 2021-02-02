/* exported filterOutNulls */
function filterOutNulls(values) {
  for (var i = values.length - 1; i >= 0; i--) {
    if (typeof values[i] === 'object') { values.splice(i, 1); }
  }
  return values;
}
