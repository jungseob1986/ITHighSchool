// callback function

var fs = require('fs');

var something1 = function(path, callback) {
	fs.readFile(path, function (err, data) {
	  if (err) throw err;
	  console.log(data);
	  console.log('DB를 조회해서 아이템을 확인해서 알려준다.');
		if(callback) {
			callback();
		}
	});
}

var something2 = function(callback) {
	console.log('something2');
	if(callback) {
		callback();
	}
}

var something3 = function(callback) {
	console.log('something3');
	if(callback) {
		callback();
	}
}

var start = function() {
	something1('./list.txt', function() {
		something2(function() {
			something3();
		});
	});
}

start();