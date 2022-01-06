module.exports = function reverse(n) {
	n += "";
	return parseInt(n.split("").reverse().join(""));
};
