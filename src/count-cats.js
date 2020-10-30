const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  var ears = arr.filter(function(number) {
  return '^^';
});
  return ears.length+1;
};
