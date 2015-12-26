module.exports = {
	add: function(a, b, callback) {
		return callback(a+b);
	},

	sub: function(a, b, callback) {
		return callback(a-b);
	},

	mul: function(a, b, callback) {
		return callback(a*b);
	},

	div: function(a, b, callback) {
		return callback(a/b);
	}
}