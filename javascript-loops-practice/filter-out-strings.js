/* exported filterOutStrings */
function filterOutStrings(values) {
  return values.filter(function (values) {
    return typeof values === 'number';
  });
}
