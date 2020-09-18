const ftoc = function(temp) {
  return roundTwoDecimals(
    (temp - 32) * 5 / 9
  );
}

const ctof = function(temp) {
  return roundTwoDecimals(
    (temp * 9 / 5) + 32
  );
}

const roundTwoDecimals = function(num) {
  return parseFloat(num.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
