function ftoc(x) {
	let c = (x - 32) * (5 / 9);
	let result = Math.round(c * 10) / 10;

	return result;
}

function ctof(x) {
	let f = (9 / 5) * x + 32;
	let result = Math.round(f * 10) / 10;

	return result;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
