var Q = require('q');

var showcallback = function(i, callback) {
	console.log('SHOW: ', i);
	return callback(null, i+1);
}

//denodeify는 [완벽한 callback 패턴]의 함수를 promise 패턴의 함수로 만들어준다.
//완벽한 callback 함수는 첫 번째 파라미터로 에러를 넘기는 형태이다.

var show = Q.denodeify(showcallback);

return show(1)
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	})
	.then(function(i) {
		return show(i);
	});