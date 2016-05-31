var obj = {

pow: function(a, b) {
  if (+a === 0) return 0;
  if (+b === 0) return 1;

  var result = a;
  if (a > 0) {
    for (var i = Math.abs(b); i > 1; i--) {
      result *= Math.abs(a);
    }
    return b > 0 ? result : 1/result;
  }
  if (a < 0) {
    for (var i = Math.abs(b); i > 1; i--) {
      result *= Math.abs(a);
    }
    return b > 0 ? -result : -1/result;
  }
}

}

try {
  module.exports = obj;
} catch (e) {}
